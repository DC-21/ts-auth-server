"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = __importDefault(require("../controllers/user-controllers"));
const userRouter = (0, express_1.Router)();
userRouter.post('/register', user_controllers_1.default.userRegister);
exports.default = userRouter;
