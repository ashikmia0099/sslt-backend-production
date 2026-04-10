import { NextFunction, Request, Response } from "express";
import { prisma } from "../../../lib/prisma";
import { SingleImageUploadInCloudinery } from "../../../config/SingleImageUploadInCloudinery";
import { CommunityService } from "./Community.service";



// get all data

const getCommunityController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await CommunityService.GetCommunityService()

        res.status(200).json({
            success: true,
            data: result
        })
    } catch (err) {
        next(err)
    }
}


const createCommunityController = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { Event_Title, Event_Place_Name, Description } = req.body;

        // check if file exist 

        let chooseImageUrl = " ";

        if (req.file && req.file.buffer) {
            chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer)
        }

        const data = await CommunityService.PostCommunityService(Event_Title, Event_Place_Name, Description, chooseImageUrl)

        res.status(200).json({
            success: true,
            data: data,
            message: "Community Post Successfully!"
        })
    } catch (err) {
        next(err)
    }
}


const updateCommunity = async (req: Request, res: Response, next: NextFunction) => {
    try {


        const id = req.params.id as string;
        const { Event_Title, Event_Place_Name, Description } = req.body;

        let chooseImageUrl: string | undefined = undefined;

        if (req.file && req.file.buffer) {
            chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
        }

        const data = await CommunityService.updateCommunityService(
            id,
            Event_Title,
            Event_Place_Name,
            Description,
            chooseImageUrl
        );

        res.status(200).json({
            success: true,
            data: data,
            message: "Community update successfully!"
        });

    } catch (err) {
        next(err);
    }
};





const deleteCommunity = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id as string;

        const deleteData = await CommunityService.deleteCommunity(id);

        res.status(200).json({
            status: true,
            message: "Community data delete successfully",
            data: deleteData
        })
    } catch (err) {
        next(err)
    }
}

export const CommunityController = {
    getCommunityController,
    createCommunityController,
    updateCommunity,
    deleteCommunity
}