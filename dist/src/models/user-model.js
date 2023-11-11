"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_1 = require("src/config/db");
exports.User = db_1.prisma.user;
