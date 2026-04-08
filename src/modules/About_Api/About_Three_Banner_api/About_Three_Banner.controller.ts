import { NextFunction, Request, Response } from "express";
import { ThreeBannerService } from "./About_Three_Banner.service";
import { SingleImageUploadInCloudinery } from "../../../config/SingleImageUploadInCloudinery";


const postThreeBanner = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ThreeBannerService.postThreeBanner({
            ...req.body,
            ImageBuffer: (req.file as any)?.buffer
        });
        res.status(201).json({ success: true, data: result })
    } catch (err) {
        next(err)
    }
}

const getThreeBanner = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ThreeBannerService.getThreeBanner()
        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
}


const deleteThreeBanner = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id as string;
        console.log("this is news id", id)

        const deleteData = await ThreeBannerService.deleteThreeBanner(id);

        res.status(200).json({
            status: true,
            message: "Three Banner banner delete successfully",
            data: deleteData
        })
    } catch (err) {
        next(err)
    }
}



const updateThreeBanner = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const { selected_type, BannerTitle, Description } = req.body;

        // check if file exist 
        let chooseImageUrl = " ";

        if (req.file && req.file.buffer) {
            chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer)
        }

        const data = await ThreeBannerService.updateThreeBanner(id, selected_type, BannerTitle, Description, chooseImageUrl)

        res.status(200).json({
            success: true,
            data: data,
            message: "About three banner update successfully!"
        })
    } catch (err) {
        next(err)
    }

}



export const AboutThreeBannerController = {
    postThreeBanner,
    getThreeBanner,
    updateThreeBanner,
    deleteThreeBanner
}