import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async (req, res) => {
    try {
        const response = await prisma.user.findMany();
        res.status(200).json({
            message: 'This is all users',
            data: response
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(user ? 200 : 404).json({
            message: user ? 'This is user with id = ' + req.params.id : 'There is no user with id = ' + req.params.id,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

export const createNewUser = async (req, res) => {
    const { name, email, address } = req.body;
    try {
        let datetime = new Date();

        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                address: address,
                created_at: datetime,
            }
        })

        res.status(200).json({
            message: 'user created',
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

const updateUser = (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.json({
        message: 'user updated'
    })
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.json({
        message: 'user deleted'
    })
}

export default {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser,
};