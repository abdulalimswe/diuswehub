"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventValidation = void 0;
const zod_1 = require("zod");
const createEventValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().nonempty('Name is required'),
        //productImg: z.string().nonempty('ProductImg is required'),
        description: zod_1.z.string().nonempty('Description is required'),
        eventHost: zod_1.z.string().nonempty('EventHost is required'),
    }),
});
const updateEventValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().nonempty('Name is required').optional(),
        // productImg: z.string().nonempty('ProductImg is required').optional(),
        eventHost: zod_1.z.string().nonempty('EventHost is required').optional(),
        description: zod_1.z.string().nonempty('Description is required').optional(),
    }),
});
exports.EventValidation = {
    createEventValidationSchema,
    updateEventValidationSchema,
};
