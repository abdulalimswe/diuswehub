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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBicycleStock = void 0;
const bicycle_model_1 = require("./bicycle.model");
// Function to update stock dynamically whenever quantity is changed
const updateBicycleStock = (bicycleId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const bicycle = yield bicycle_model_1.Bicycle.findById(bicycleId);
    if (!bicycle)
        return;
    const isInStock = ((_a = bicycle.quantity) !== null && _a !== void 0 ? _a : 0) > 0; // Ensure quantity check is safe
    if (bicycle.stock !== isInStock) {
        yield bicycle_model_1.Bicycle.updateOne({ _id: bicycleId }, { stock: isInStock });
    }
});
exports.updateBicycleStock = updateBicycleStock;
