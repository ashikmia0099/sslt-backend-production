import { NextFunction, Request, Response } from "express";
import { socialService } from "./Social.service";



// get all data

const getSocial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await socialService.getSocial()

        res.status(200).json({
            success: true,
            data: result
        })
    } catch (err) {
        next(err)
    }
}


const postSocial = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { socialLink, selectedType } = req.body;

        const data = await socialService.postSocial({
            socialLink,
            selectedType
        });

        res.status(200).json({
            success: true,
            data: data,
            message: "Footer Post Successfully!"
        });

    } catch (err) {
        next(err);
    }
};



const patchSocial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const { socialLink, selectedType } = req.body;

        const data = await socialService.patchSocial({id, socialLink, selectedType});

        res.status(200).json({
            success: true,
            data: data,
            message: "Footer update Successfully!"
        });

    } catch (err) {
        next(err);
    }
};

const deleteSocial = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id as string;
        console.log("this is news id", id)

        const deleteData = await socialService.deleteSocial(id);

        res.status(200).json({
            status: true,
            message: "News delete successfully",
            data: deleteData
        })
    } catch (err) {
        next(err)
    }
}


export const socialController = {
    getSocial,
    postSocial,
    patchSocial,
    deleteSocial
}