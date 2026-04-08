import { NextFunction, Request, Response } from "express";
import { heroSerivce } from "./Hero.service";
import cloudinary from "../../../config/cloudinary";
import { UploadApiResponse } from "cloudinary";
import { prisma } from "../../../lib/prisma";
import { SingleImageUploadInCloudinery } from "../../../config/SingleImageUploadInCloudinery";


export const Home_Hero_Post = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const { postType, title, shortOverview, image } = req.body;

    let imageUrl: string = ""

    if (postType === "Image") {
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

    const result = await heroSerivce.hero_post_service({
      postType,
      title: title ?? null,
      shortOverview: shortOverview ?? null,
      image: imageUrl,
    })
    res.status(201).json({ success: true, data: result });
  } catch (err) {
  next(err)
  }
}



const Home_Hero_Get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await heroSerivce.hero_get_service()
    res.status(200).json(result);
  } catch (err) {
    next(err)
  }
}


const getDynamicData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    console.log(id)

    const result = await prisma.hero.findUnique({
      where: { id }
    })

    console.log(result)

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Data id not found"
      })
    }

    return res.status(200).json({
      success: true,
      data: result
    })

  } catch (error) {
    console.log('data not found')
  }

}




const updateHero = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const { postType, title, shortOverview } = req.body;

        // check if file exist 

        let chooseImageUrl = " ";

        if (req.file && req.file.buffer) {
            chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer)
        }

        const data = await heroSerivce.updateHero(id,postType, title, shortOverview, chooseImageUrl)

        res.status(200).json({
            success: true,
            data: data,
            message: "Hero update successfully!"
        })
    } catch (err) {
        next(err)
    }
}



const deleteHero = async(req : Request, res : Response, next : NextFunction) =>{
    try{

        const id = req.params.id as string;
        console.log("this is news id", id)

        const deleteData = await heroSerivce.deleteHero(id);

        res.status(200).json({
            status : true,
            message : "Hero image delete successfully",
            data : deleteData
        })
    }catch(err){
        next(err)
    }
}

export const heroController = {
  Home_Hero_Post,
  Home_Hero_Get,
  getDynamicData,
  updateHero,
  deleteHero


}