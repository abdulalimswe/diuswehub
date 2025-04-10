"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bicycle_controller_1 = require("./bicycle.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const bicycle_validation_1 = require("./bicycle.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../user/user.constant");
// import { upload } from '../../utils/sendImageToCloudinary';
const multer_config_1 = require("../../config/multer.config");
const router = express_1.default.Router();
// create event
router.post('/', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), multer_config_1.multerUpload.single('file'), 
// upload.single('file'),
(req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, (0, validateRequest_1.default)(bicycle_validation_1.EventValidation.createEventValidationSchema), bicycle_controller_1.EventController.createEvent);
// get all
router.get('/', bicycle_controller_1.EventController.getAllEvent);
// get a single evvent route
router.get('/:productId', bicycle_controller_1.EventController.getASpecificEvent);
//update event
router.patch('/:productId', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(bicycle_validation_1.EventValidation.updateEventValidationSchema), bicycle_controller_1.EventController.updateEvent);
// delete a event
router.delete('/:productId', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), bicycle_controller_1.EventController.deleteEvent);
exports.EventRoutes = router;
