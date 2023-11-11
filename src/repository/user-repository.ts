import { IUser, User } from "src/models/user-model";

const userRepository = () => {
    const createUser = async ({ email, name, password }: IUser) => {
        await User.create({
            data: {
                email, name, password
            }
        })
    };
    const getUsers = async () => {
        await User.findMany();
    }
    const getUserById = async({id}:IUser)=>{
        await User.findUnique({
            where: {
                id:id,
            }
        })
    };
    return {
        createUser,getUsers
    }
};
export default userRepository;