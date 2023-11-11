import { prisma } from "src/config/db";

export interface IUser{
    id? : number;
    email: string;
    name: string;
    password: string;
}

export const User = prisma.user;