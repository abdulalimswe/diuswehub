import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { EventRoutes } from './app/modules/event/event.routes';
import { UserRoutes } from './app/modules/user/user.route';
import { AuthRoutes } from './app/modules/auth/auth.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
const app: Application = express();

app.use(express.json());
//app.use(cors({ origin: "https://diuswehub.vercel.app", credentials: true }));
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cors({ origin: true, credentials: true }));

app.use('/api/events', EventRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/auth', AuthRoutes);

app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Software Engineering Hub');
});

app.use(notFound);

export default app;
