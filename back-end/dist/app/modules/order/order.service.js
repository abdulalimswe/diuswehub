"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const order_constant_1 = require("./order.constant");
const order_model_1 = require("./order.model");
const bicycle_model_1 = require("../bicycle/bicycle.model");
const order_utils_1 = require("./order.utils");
const user_model_1 = require("../user/user.model");
const createOrderIntoDB = (userEmail, payload, client_ip) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = yield user_model_1.User.findOne({ email: userEmail });
    if (!user) {
        return {
            error: true,
            statusCode: http_status_1.default.NOT_FOUND,
            message: 'User not found',
        };
    }
    if (!user.address || !user.phone || !user.city) {
        return {
            error: true,
            statusCode: http_status_1.default.BAD_REQUEST,
            message: 'Missing required user information (address, phone, or city)',
        };
    }
    if (!((_a = payload === null || payload === void 0 ? void 0 : payload.products) === null || _a === void 0 ? void 0 : _a.length)) {
        return {
            error: true,
            statusCode: http_status_1.default.BAD_REQUEST,
            message: 'No products found in order',
        };
    }
    const updatedBicycles = [];
    // Loop through each product in the order to update its quantity and stock
    for (const product of payload.products) {
        const { product: productId, quantity } = product;
        if (!productId || !quantity) {
            return {
                error: true,
                statusCode: http_status_1.default.BAD_REQUEST,
                message: 'Product ID or quantity is missing',
            };
        }
        const bicycle = yield bicycle_model_1.Bicycle.findById(productId);
        if (!bicycle) {
            return {
                error: true,
                statusCode: http_status_1.default.NOT_FOUND,
                message: 'Bicycle not found',
            };
        }
        // Check if the stock is sufficient
        if (bicycle.quantity === undefined || bicycle.quantity < quantity) {
            return {
                error: true,
                statusCode: http_status_1.default.BAD_REQUEST,
                message: bicycle.quantity === undefined
                    ? 'Bicycle quantity is undefined'
                    : 'Insufficient stock available',
            };
        }
        // Update the stock and quantity before updating the bicycle
        const updatedBicycle = yield bicycle_model_1.Bicycle.findOneAndUpdate({ _id: productId }, [
            {
                $set: {
                    quantity: { $subtract: ['$quantity', quantity] },
                    stock: {
                        $cond: [
                            { $gt: [{ $subtract: ['$quantity', quantity] }, 0] },
                            true,
                            false,
                        ],
                    },
                },
            },
        ], { new: true });
        if (!updatedBicycle) {
            return {
                error: true,
                statusCode: http_status_1.default.BAD_REQUEST,
                message: 'Failed to update bicycle stock',
            };
        }
        updatedBicycles.push(updatedBicycle);
    }
    // Calculate total price of the order
    const totalPrice = updatedBicycles.reduce((total, bicycle, index) => {
        return total + bicycle.price * payload.products[index].quantity;
    }, 0);
    const orderDetails = {
        products: payload.products,
        totalPrice,
    };
    let order = yield order_model_1.Order.create({
        user,
        products: orderDetails.products,
        totalPrice,
    });
    // Payment integration
    const shurjopayPayload = {
        amount: totalPrice,
        order_id: order._id,
        currency: 'BDT',
        customer_name: user.name,
        customer_address: user.address,
        customer_email: user.email,
        customer_phone: user.phone,
        customer_city: user.city,
        client_ip,
    };
    const payment = yield order_utils_1.orderUtils.makePaymentAsync(shurjopayPayload);
    if (payment === null || payment === void 0 ? void 0 : payment.transactionStatus) {
        order = yield order.updateOne({
            transaction: {
                id: payment.sp_order_id,
                transactionStatus: payment.transactionStatus,
            },
        });
    }
    return payment.checkout_url;
});
const verifyPayment = (order_id) => __awaiter(void 0, void 0, void 0, function* () {
    const verifiedPayment = yield order_utils_1.orderUtils.verifyPaymentAsync(order_id);
    if (verifiedPayment.length) {
        yield order_model_1.Order.findOneAndUpdate({
            'transaction.id': order_id,
        }, {
            'transaction.bank_status': verifiedPayment[0].bank_status,
            'transaction.sp_code': verifiedPayment[0].sp_code,
            'transaction.sp_message': verifiedPayment[0].sp_message,
            'transaction.transactionStatus': verifiedPayment[0].transaction_status,
            'transaction.method': verifiedPayment[0].method,
            'transaction.date_time': verifiedPayment[0].date_time,
            status: verifiedPayment[0].bank_status == 'Success'
                ? 'Paid'
                : verifiedPayment[0].bank_status == 'Failed'
                    ? 'Pending'
                    : verifiedPayment[0].bank_status == 'Cancel'
                        ? 'Cancelled'
                        : '',
        });
    }
    return verifiedPayment;
});
const getAllOrdersFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const orderQuery = new QueryBuilder_1.default(order_model_1.Order.find().populate('user'), query)
        .search(order_constant_1.orderSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const meta = yield orderQuery.countTotal();
    const result = yield orderQuery.modelQuery;
    return { meta, result };
});
const getSingleOrderFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findById(id);
    return result;
});
const updateOrderIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findByIdAndUpdate({ _id: id }, payload, {
        unique: true,
    });
    return result;
});
const deleteOrderFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findByIdAndDelete(id);
    return result;
});
const calculateRevenueFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield order_model_1.Order.aggregate([
            {
                $unwind: '$products', // Separate products for accurate calculation
            },
            {
                $lookup: {
                    from: 'bicycles', // Ensure the referenced collection name is correct
                    localField: 'products.product',
                    foreignField: '_id',
                    as: 'productDetails',
                },
            },
            {
                $unwind: '$productDetails', // Unwind to access product prices
            },
            {
                $addFields: {
                    totalRevenue: {
                        $multiply: ['$productDetails.price', '$products.quantity'],
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: '$totalRevenue' },
                },
            },
        ]);
        return ((_a = result[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0;
    }
    catch (error) {
        throw new Error('Error calculating revenue from database');
    }
});
exports.OrderServices = {
    createOrderIntoDB,
    // getOrders,
    verifyPayment,
    getAllOrdersFromDB,
    getSingleOrderFromDB,
    updateOrderIntoDB,
    deleteOrderFromDB,
    calculateRevenueFromDB,
};
