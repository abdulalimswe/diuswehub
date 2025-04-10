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
exports.EventServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
// import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';
const bicycle_constant_1 = require("./bicycle.constant");
const bicycle_model_1 = require("./bicycle.model");
const createEventIntoDB = (eventData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bicycle_model_1.Event.create(eventData);
        return result;
    }
    catch (error) {
        console.error('Error in createEventIntoDB:', error);
        throw new Error('Failed to create event in DB');
    }
});
const getAllEventFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const eventQuery = new QueryBuilder_1.default(bicycle_model_1.Event.find(), query)
        .search(bicycle_constant_1.eventSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const meta = yield eventQuery.countTotal();
    const result = yield eventQuery.modelQuery;
    return { meta, result };
});
const getASpecificEventFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Event.findOne({ _id });
    return result;
});
const updateEventIntoDB = (_id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Event.findByIdAndUpdate(_id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteEventFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Event.findByIdAndDelete(_id);
    return result;
});
exports.EventServices = {
    createEventIntoDB,
    getAllEventFromDB,
    getASpecificEventFromDB,
    updateEventIntoDB,
    deleteEventFromDB,
};
