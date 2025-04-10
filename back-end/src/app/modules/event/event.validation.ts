import { z } from 'zod';

const createEventValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required'),
    //productImg: z.string().nonempty('ProductImg is required'),
    description: z.string().nonempty('Description is required'),
    eventHost: z.string().nonempty('EventHost is required'),
    
  }),
});

const updateEventValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required').optional(),
    // productImg: z.string().nonempty('ProductImg is required').optional(),
    eventHost: z.string().nonempty('EventHost is required').optional(),
    description: z.string().nonempty('Description is required').optional(),
  }),
});

export const EventValidation = {
  createEventValidationSchema,
  updateEventValidationSchema,
};
