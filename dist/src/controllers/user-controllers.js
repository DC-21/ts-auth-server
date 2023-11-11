"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = __importDefault(require("../services/user-services"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userController = () => {
    const userRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, email, password } = req.body;
        try {
            const hashedPassword = yield bcrypt_1.default.hash(password, 10); // Use an appropriate number of salt rounds
            const user = yield user_services_1.default.CreateUser({
                name,
                email,
                password: hashedPassword,
            });
            res.status(200).json({
                message: 'User created successfully',
                user,
            });
        }
        catch (error) {
            console.log(error);
            res.send({ message: error, status: 500 });
        }
    });
    return { userRegister };
};
exports.default = userController();
