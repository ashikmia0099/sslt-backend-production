import { NextFunction, Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";


export const globalErrorHandler = (
    err : any,
    req : Request,
    res : Response,
    next : NextFunction

) =>{

    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "Something want wrong";





    res.status(statusCode).json({
        success : false,
        message : errorMessage
    })

}


