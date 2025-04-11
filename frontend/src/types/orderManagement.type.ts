export type User = {
  email: string;
  name: string; 
  phone: string;
  address: string;
};

export type Event = {
  event: string;
  _id: string;
};

export type TEvent = {
  _id?: string;
  name: string;
  eventImg?: string;
  eventHost: string;
  description: string;
  user: User;
  email: string;
  events: Event[];
  details: string;
  date: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  
};
