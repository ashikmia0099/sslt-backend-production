import { NextFunction, Request, Response } from "express";
import cloudinary from "../../../config/cloudinary";
import { UploadApiResponse } from "cloudinary";
import { aboutBannerSerivce } from "./About_Banner.service";
import { SingleImageUploadInCloudinery } from "../../../config/SingleImageUploadInCloudinery";


const postAboutBanner = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const { selected_type, title, shortOverview, descripiton, image } = req.body;

    let imageUrl: string = ""

    if (selected_type === "Image") {
      if (!req.file) {
        return res.status(400).json({ err: "Image is required of upload image" })
      };
      const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
        cloudinary.uploader.upload_stream({ folder: "hero" }, (error, result) => {
          if (error) reject(error);
          else if (!result) reject(new Error('Cloudinary Upload Failed'));
          else resolve(result);
        })
          .end(req.file!.buffer);
      });
      imageUrl = uploadResult.secure_url;
    }

    const result = await aboutBannerSerivce.postAboutBanner({
      selected_type,
      title: title ?? null,
      shortOverview: shortOverview ?? null,
      descripiton: descripiton ?? null,
      image: imageUrl,
    })
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err)
  }
}



const getAboutBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await aboutBannerSerivce.getAboutBanner()
    res.status(200).json(result);
  } catch (err) {
    next(err)
  }
}




const updateAboutBanner = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const {  selected_type, title, shortOverview, descripiton } = req.body;

        // check if file exist 
        let chooseImageUrl = " ";

        if (req.file && req.file.buffer) {
            chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer)
        }

        const data = await aboutBannerSerivce.updateAboutBanner( id,  selected_type, title, shortOverview, descripiton,chooseImageUrl)

        res.status(200).json({
            success: true,
            data: data,
            message: "About banner data update Successfully!"
        })
    } catch (err) {
        next(err)
    }

}

const deleteAboutBanner = async(req : Request, res : Response, next : NextFunction) =>{
    try{

        const id = req.params.id as string;

        const deleteData = await aboutBannerSerivce.deleteAboutBanner(id);

        res.status(200).json({
            status : true,
            message : "About banner delete successfully",
            data : deleteData
        })
    }catch(err){
        next(err)
    }
}


export const aboutBannerController = {
  postAboutBanner,
  getAboutBanner,
  updateAboutBanner,
  deleteAboutBanner,
}