/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from '../../builder/QueryBuilder';
// import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';
import { eventSearchableFields } from './event.constant';
import { TEvent } from './event.interface';
import { Event } from './event.model';


const createEventIntoDB = async (eventData: TEvent) => {
  try {

    const result = await Event.create(eventData);
    return result;
  } catch (error) {
    console.error('Error in createEventIntoDB:', error);
    throw new Error('Failed to create event in DB');
  }
};

const getAllEventFromDB = async (query: Record<string, unknown>) => {
  const eventQuery = new QueryBuilder(Event.find(), query)
    .search(eventSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await eventQuery.countTotal();
  const result = await eventQuery.modelQuery;
  return { meta, result };
};

const getASpecificEventFromDB = async (_id: string) => {
  const result = await Event.findOne({ _id });
  return result;
};

const updateEventIntoDB = async (_id: string, payload: Partial<TEvent>) => {
  const result = await Event.findByIdAndUpdate(_id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteEventFromDB = async (_id: string) => {
  const result = await Event.findByIdAndDelete(_id);
  return result;
};
export const EventServices = {
  createEventIntoDB,
  getAllEventFromDB,
  getASpecificEventFromDB,
  updateEventIntoDB,
  deleteEventFromDB,
};
