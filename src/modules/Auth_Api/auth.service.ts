import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import crypto from "crypto";
import { sendVerificationEmail } from "../../middleware/auth";
import jwt from "jsonwebtoken"


const register = async (
    name: string,
    email: string,
    password: string,
) => {
    try {

        const existingEmail = await prisma.user.findUnique({
            where: { email }
        });

        if (existingEmail) {
            throw new Error("Email already exist")
        }

        const hassedPassword = await bcrypt.hash(password, 6);
        const token = crypto.randomBytes(32).toString("hex")
        const registerUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hassedPassword,
                emailVerifyToken: token
            }
        })

        await sendVerificationEmail(email, token)
        return registerUser

    } catch (err: any) {
        throw err
    }
}


const verifyEmail = async (token: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: { emailVerifyToken: token }
        })

        if (!user) {
            throw new Error("Invalid verification token");
        }

        const data = await prisma.user.update({
            where: { id: user.id },
            data: {
                isVerified: true,
                emailVerifyToken: null
            }
        })

        return data;

    } catch (err) {
        throw err
    }

}


const login = async ( email: string, password: string) => {
    try {

        // find user email 

        const findEmail = await prisma.user.findUnique({
            where: ({ email: email })
        });

        if (!findEmail) {
            throw new Error("This email does not exist");
        }

         //  check if user is verified
        if (!findEmail.isVerified) {
            throw new Error("Please verify your email first");
        }

        // compire password 
        const compirePassword = await bcrypt.compare(
            password,
            findEmail.password
        )

        if (!compirePassword) {
            throw new Error("Invalid Credintials")
        }

        // generate jwt token 

         const token = jwt.sign(
            {
                id: findEmail.id,
                name : findEmail.name,
                email: findEmail.email,
                role: findEmail.role
            },
            process.env.JWT_SECRET as string, {
            expiresIn: "7d"
        });

         return {
            token,
            user: {
                id: findEmail.id,
                name: findEmail.name,
                email: findEmail.email,
                role: findEmail.role
            }
        }

    } catch (err) {
        throw err
    }
}


const getAlluser = async () => {
    try {

        const result = await prisma.user.findMany()
        return result

    } catch (err) {
        throw err
    }
}


const updateUserRole = async (id: string, role: "ADMIN" | "USER") => {

    try {
        const result = await prisma.user.update({
            where: { id: id },
            data: {
                role
            }
        })
        return result

    } catch (err: any) {
        throw new Error("User role doesn`t updated")
    }
}


const deleteUser = async (id: string) => {

    try {
        const findEmail = await prisma.user.findUnique({
            where: { id: id }
        })

        if (!findEmail) {
            throw new Error("Email not found");
        }

        const deleteUser = await prisma.user.delete({
            where: { id }
        })

        return deleteUser;

    } catch (err) {
        throw new Error("User doesn't delete successfully")
    }
}




export const authService = {
    register,
    verifyEmail,
    login,
    getAlluser,
    updateUserRole,
    deleteUser
}