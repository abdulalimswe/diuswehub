"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const event_routes_1 = require("./app/modules/event/event.routes");
const user_route_1 = require("./app/modules/user/user.route");
const auth_route_1 = require("./app/modules/auth/auth.route");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//app.use(cors({ origin: "https://diuswehub.vercel.app", credentials: true }));
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use('/api/events', event_routes_1.EventRoutes);
app.use('/api/users', user_route_1.UserRoutes);
app.use('/api/auth', auth_route_1.AuthRoutes);
app.use(globalErrorHandler_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to Software Engineering Hub');
});
app.use(notFound_1.default);
exports.default = app;
