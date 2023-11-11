import { Router } from "express";
import userControllers from "../controllers/user-controllers";

const userRouter = Router();

userRouter.post('/register',userControllers.userRegister);

export default userRouter;