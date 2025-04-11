import { EventServices } from './event.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { request } from 'http';
import { log } from 'console';

const createEvent = catchAsync(async (req, res) => {


  const eventData = req.body // Manually parse the JSON data
  const file = req.file;

  if (!file) {
    throw new Error('Image file is required');
  }

  const result = await EventServices.createEventIntoDB({
    ...eventData,
    eventImg: file.path,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event is created successfully',
    data: result,
  });
});


const getAllEvent = catchAsync(async (req, res) => {
  const result = await EventServices.getAllEventFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getASpecificEvent = catchAsync(async (req, res) => {
  const { eventId } = req.params;
  const result = await EventServices.getASpecificEventFromDB(eventId);
  res.status(200).json({
    message: 'Get a specific event successfully',
    status: true,
    data: result,
  });
});

//  updateEvent
const updateEvent = catchAsync(async (req, res) => {
  const { eventId } = req.params;
  console.log(req.body);
  console.log(eventId);
  const result = await EventServices.updateEventIntoDB(eventId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event updated successfully',
    data: result,
  });
});

// detele Event
const deleteEvent = catchAsync(async (req, res) => {
  const { eventId } = req.params;
  await EventServices.deleteEventFromDB(eventId);

  res.send({
    message: 'Event deleted successfully',
    status: true,
    data: {},
  });
});

export const EventController = {
  createEvent,
  getAllEvent,
  getASpecificEvent,
  updateEvent,
  deleteEvent,
};
