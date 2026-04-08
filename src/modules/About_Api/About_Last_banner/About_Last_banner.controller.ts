import { NextFunction, Request, Response } from "express";
import cloudinary from "../../../config/cloudinary";
import { UploadApiResponse } from "cloudinary";
import { aboutLastBannerSerivce } from "./About_Last_banner.service";
import { SingleImageUploadInCloudinery } from "../../../config/SingleImageUploadInCloudinery";


export const postAboutLastBanner = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const { selected_type, title, descripiton, image } = req.body;

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

    const result = await aboutLastBannerSerivce.postAboutLastBanner({
      selected_type,
      title: title ?? null,
      descripiton: descripiton ?? null,
      image: imageUrl,
    })
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err)
  }
}



const getAboutLastBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await aboutLastBannerSerivce.getAboutLastBanner()
    res.status(200).json(result);
  } catch (err) {
    next(err)
  }
}


const deleteAboutLastBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const id = req.params.id as string;
    console.log("this is news id", id)

    const deleteData = await aboutLastBannerSerivce.deleteAboutLastBanner(id);

    res.status(200).json({
      status: true,
      message: "About last banner delete successfully",
      data: deleteData
    })
  } catch (err) {
    next(err)
  }
}





const updateAboutLastBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const { selected_type, title,descripiton } = req.body;

    // check if file exist 
    let chooseImageUrl = " ";

    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer)
    }

    const data = await aboutLastBannerSerivce.updateAboutLastBanner(id, selected_type, title,descripiton, chooseImageUrl)

    res.status(200).json({
      success: true,
      data: data,
      message: "About last banner data update Successfully!"
    })
  } catch (err) {
    next(err)
  }
}

export const aboutLastBannerController = {
  postAboutLastBanner,
  getAboutLastBanner,
  updateAboutLastBanner,
  deleteAboutLastBanner
}