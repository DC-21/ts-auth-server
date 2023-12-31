import { prisma } from "../config/db";

export interface IUser{
    id? : number;
    email: string;
    name?: string|any;
    password: string;
}

export const User = prisma.user;