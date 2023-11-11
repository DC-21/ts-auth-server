import { IUser, User } from "src/models/user-model";

const userRepository = () => {
    const createUser = async ({ email, name, password }: IUser) => {
        await User.create({
            data: {
                email, name, password
            },
        })
    };
    const getUsers = async () => {
        await User.findMany();
    }
    const getUserById = async({id}:IUser)=>{
        await User.findUnique({
            where: {
                id:id,
            },
        })
    };
    const getUserByEmailAndPassword =async ({email,password}:IUser) => {
        await User.findFirst({
            where:{
                email,password,
            },
        })
    };
    const updateUserById =async ({id,email,name,password}:IUser) => {
        await User.update({
            where:{
                id
            },
            data: {
                email,name,password
            },
        });
    };
    return {
        createUser,getUsers,getUserById,getUserByEmailAndPassword,updateUserById
    }
};
export default userRepository;