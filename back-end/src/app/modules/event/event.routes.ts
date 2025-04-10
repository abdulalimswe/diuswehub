import express, { NextFunction, Request, Response } from 'express';
import { EventController } from './event.controller';
import validateRequest from '../../middlewares/validateRequest';
import { EventValidation } from './event.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
// import { upload } from '../../utils/sendImageToCloudinary';
import { multerUpload } from '../../config/multer.config';

const router = express.Router();

// create event
router.post(
  '/',
  auth(USER_ROLE.admin),
  multerUpload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(EventValidation.createEventValidationSchema),
  EventController.createEvent,
);

// get all
router.get('/', EventController.getAllEvent);

// get a single evvent route
router.get('/:eventId', EventController.getASpecificEvent);

//update event
router.patch(
  '/:eventId',
  auth(USER_ROLE.admin),
  validateRequest(EventValidation.updateEventValidationSchema),
  EventController.updateEvent,
);

// delete a event
router.delete(
  '/:eventId',
  auth(USER_ROLE.admin),
  EventController.deleteEvent,
);

export const EventRoutes = router;
