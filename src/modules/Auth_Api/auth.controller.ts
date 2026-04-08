import { NextFunction, Request, Response } from "express";
import { authService } from "./auth.service";


const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const data = await authService.getAlluser();
        res.status(200).json({
            success: true,
            message: "You are register successfully",
            data: data
        })

    } catch (err) {
        next(err)
    }
}



const register = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { name, email, password, emailVerifyToken } = req.body;


        const data = await authService.register(name, email, password);
        res.status(200).json({
            success: true,
            message: "You are register successfully",
            data: data
        })

    } catch (err) {
        next(err)
    }

}


const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;


        const data = await authService.login( email, password);
        res.status(200).json({
            success: true,
            message: "You are register successfully",
            data: data
        })

    } catch (err) {
        next(err)
    }
}


const updateUserRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const { role } = req.body;

        const data = await authService.updateUserRole(id, role)

        res.status(200).json({
            success: true,
            data: data,
            message: "Role update Successfully!"
        })
    } catch (err) {
        next(err)
    }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id as string;

        const deleteData = await authService.deleteUser(id);

        res.status(200).json({
            status: true,
            message: "User delete successfully",
            data: deleteData
        })
    } catch (err) {
        next(err)
    }
}




const verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { token } = req.params as any;

        await authService.verifyEmail(token);

        res.json({
            success: true,
            message: "Email verified successfully"
        });

    } catch (err) {
        next(err);
    }
};


export const authController = {
    getAllUser,
    register,
    login,
    updateUserRole,
    deleteUser,
    verifyEmail
}