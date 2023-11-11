import userRepository from "../repository/user-repository";
import { IUser } from '../models/user-model';

const userService =()=>{
    const CreateUser = async({name,email,password}:IUser) =>{
        const user = await userRepository.createUser({name,email,password});
        return user;
    };
    const GetUsers = async({}:IUser)=>{
        const users = await userRepository.getUsers();
        return users;
    }
    const GetUserByEmailAnPassword = async({email,password}:IUser)=>{
        const user = await userRepository.getUserByEmailAndPassword({email,password});
        return user;
    }
    return {
        CreateUser,GetUsers,GetUserByEmailAnPassword
    }
}

export default userService();