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
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../models/user-model");
const userRepository = () => {
    const createUser = ({ email, name, password }) => __awaiter(void 0, void 0, void 0, function* () {
        yield user_model_1.User.create({
            data: {
                email, name, password
            },
        });
    });
    const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
        yield user_model_1.User.findMany();
    });
    const getUserById = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
        yield user_model_1.User.findUnique({
            where: {
                id: id,
            },
        });
    });
    const getUserByEmailAndPassword = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
        yield user_model_1.User.findFirst({
            where: {
                email, password,
            },
        });
    });
    const updateUserById = ({ id, email, name, password }) => __awaiter(void 0, void 0, void 0, function* () {
        yield user_model_1.User.update({
            where: {
                id
            },
            data: {
                email, name, password
            },
        });
    });
    const deleteUserById = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
        yield user_model_1.User.delete({
            where: {
                id
            },
        });
    });
    return {
        createUser, getUsers, getUserById, getUserByEmailAndPassword, updateUserById, deleteUserById
    };
};
exports.default = userRepository();
