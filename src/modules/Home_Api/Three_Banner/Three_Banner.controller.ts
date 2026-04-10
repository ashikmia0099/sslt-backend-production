import { NextFunction, Request, Response } from "express";
import { ThreeBannerService } from "./Three_Banner.service";
import { SingleImageUploadInCloudinery } from "../../../config/SingleImageUploadInCloudinery";


const ThreeBannerControllerPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ThreeBannerService.ThreeBannerServicePost({
            ...req.body,
            ImageBuffer : (req.file as any)?.buffer
        });


        res.status(201).json({ success: true, data: result })
    } catch (err) {
      next(err);
    }
}

const ThreeBannerControllerGet = async (req : Request, res : Response, next : NextFunction) =>{
    try{
        const result = await ThreeBannerService.ThreeBannerServiceGet()
        res.status(200).json(result)
    }catch(err) {
       next(err)
    }
}


const updateThreeBanner = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const { Selected_type, BannerTitle, Description } = req.body;

        // check if file exist 

        let chooseImageUrl = " ";

        if (req.file && req.file.buffer) {
            chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer)
        }

        const data = await ThreeBannerService.updateThreeBanner(id,Selected_type, BannerTitle, Description, chooseImageUrl)

        res.status(200).json({
            success: true,
            data: data,
            message: "Three banner data updated successfully!"
        })
    } catch (err) {
        next(err)
    }
}


const deletethreeBanner = async(req : Request, res : Response, next : NextFunction) =>{
    try{

        const id = req.params.id as string;

        const deleteData = await ThreeBannerService.deletethreeBanner(id);

        res.status(200).json({
            status : true,
            message : "Three banner delete successfully",
            data : deleteData
        })
    }catch(err){
        next(err)
    }
}

export const ThreeBannerController = {
    ThreeBannerControllerPost,
    ThreeBannerControllerGet,
    updateThreeBanner,
    deletethreeBanner
}