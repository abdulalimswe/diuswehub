"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const order_validation_1 = require("./order.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../user/user.constant");
const router = express_1.default.Router();
//create order
router.post('/', (0, auth_1.default)(user_constant_1.USER_ROLE.customer, user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(order_validation_1.OrderValidations.createOrderSchema), order_controller_1.OrderController.createOrder);
//get all order
router.get('/', (0, auth_1.default)(user_constant_1.USER_ROLE.customer, user_constant_1.USER_ROLE.admin), order_controller_1.OrderController.getAllOrders);
//verify order
router.get('/verify', (0, auth_1.default)(user_constant_1.USER_ROLE.customer, user_constant_1.USER_ROLE.admin), order_controller_1.OrderController.verifyPayment);
router.get('/revenue', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), order_controller_1.OrderController.calculateRevenue);
//get single order
router.get('/:orderId', (0, auth_1.default)(user_constant_1.USER_ROLE.customer, user_constant_1.USER_ROLE.admin), order_controller_1.OrderController.getSingleOrder);
// update order
router.patch('/:orderId', (0, auth_1.default)(user_constant_1.USER_ROLE.customer, user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(order_validation_1.OrderValidations.updateOrderSchema), order_controller_1.OrderController.updateOrder);
// detete order
router.delete('/:orderId', (0, auth_1.default)(user_constant_1.USER_ROLE.customer, user_constant_1.USER_ROLE.admin), order_controller_1.OrderController.deleteOrder);
// calculate revenue
exports.OrderRoutes = router;
