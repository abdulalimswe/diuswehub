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
exports.EventController = void 0;
const bicycle_service_1 = require("./bicycle.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
// create a event
const createEvent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body);
    // console.log(req.file);
    const eventData = req.body; // Manually parse the JSON data
    const file = req.file;
    if (!file) {
        throw new Error('Image file is required');
    }
    const result = yield bicycle_service_1.EventServices.createEventIntoDB(Object.assign(Object.assign({}, eventData), { productImg: file.path }));
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Event is created successfully',
        data: result,
    });
}));
const getAllEvent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_service_1.EventServices.getAllEventFromDB(req.query);
    // if (!result.length) {
    //   res.status(404).json({
    //     message: 'No event found matching your search criteria.',
    //     success: false,
    //     data: [],
    //   });
    //   return;
    // }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Event retrieved successfully',
        meta: result.meta,
        data: result.result,
    });
}));
const getASpecificEvent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield bicycle_service_1.EventServices.getASpecificEventFromDB(productId);
    res.status(200).json({
        message: 'Get a specific event successfully',
        status: true,
        data: result,
    });
}));
//  updateEvent
const updateEvent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield bicycle_service_1.EventServices.updateEventIntoDB(productId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Event updated successfully',
        data: result,
    });
}));
// detele Event
const deleteEvent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    yield bicycle_service_1.EventServices.deleteEventFromDB(productId);
    res.send({
        message: 'Event deleted successfully',
        status: true,
        data: {},
    });
}));
exports.EventController = {
    createEvent,
    getAllEvent,
    getASpecificEvent,
    updateEvent,
    deleteEvent,
};
