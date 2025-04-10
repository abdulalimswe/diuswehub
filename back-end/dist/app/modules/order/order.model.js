"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },
    email: {
        type: String,
        // required: true,
    },
    products: [
        {
            product: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Bicycle',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    // details: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Bicycle',
    // },
    // quantity: {
    //   type: Number,
    //   required: true,
    // },
    totalPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Paid', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending',
    },
    transaction: {
        id: String,
        transactionStatus: String,
        bank_status: String,
        sp_code: String,
        sp_message: String,
        method: String,
        date_time: String,
    },
}, { timestamps: true, versionKey: false });
//create order model
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
