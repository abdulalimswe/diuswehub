"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidations = exports.createAdminValidationSchema = void 0;
const zod_1 = require("zod");
exports.createAdminValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().max(20).optional(),
        role: zod_1.z.string(),
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
    }),
});
exports.AdminValidations = {
    createAdminValidationSchema: exports.createAdminValidationSchema,
};
