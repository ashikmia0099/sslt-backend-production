import { NextFunction, Request, Response } from "express";
import { SingleImageUploadInCloudinery } from "../../config/SingleImageUploadInCloudinery";
import { GalleryService } from "./Gallary.service";
import { DynamicGallaryDescription } from "../../types/common";



// get all data

const getGallery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await GalleryService.getGallery()

    res.status(200).json({
      success: true,
      data: result
    })
  } catch (err) {
    next(err)
  }
}



const postGallery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { width } = req.body;

    let dynamicDescriptions: DynamicGallaryDescription[] = [];

    if (req.body.dynamicDescriptions) {
      dynamicDescriptions = JSON.parse(req.body.dynamicDescriptions);
    }

    const files = req.files as {
      image?: Express.Multer.File[];
      dynamicImages?: Express.Multer.File[];
    };

    let mainImageUrl = "";

    if (files?.image && files.image.length > 0) {
      const file = files.image[0]!;
      mainImageUrl = await SingleImageUploadInCloudinery(file.buffer);
    }

    let dynamicImageUrls: string[] = [];

    if (files?.dynamicImages && files.dynamicImages.length > 0) {
      for (const file of files.dynamicImages) {
        const url = await SingleImageUploadInCloudinery(file.buffer);
        dynamicImageUrls.push(url);
      }
    }

    const finalDescriptions: DynamicGallaryDescription[] = dynamicDescriptions.map(
      (item: DynamicGallaryDescription, index: number) => ({
        width: Number(item.width),
        image: dynamicImageUrls[index] || ""
      })
    );

    const data = await GalleryService.postGallery(
      Number(width),
      mainImageUrl,
      finalDescriptions
    );

    res.status(200).json({
      success: true,
      data,
    });

  } catch (err) {
    next(err);
  }
};






const updateGallery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const { width } = req.body;

    let dynamicDescriptions: DynamicGallaryDescription[] = [];

    if (req.body.dynamicDescriptions) {
      dynamicDescriptions = JSON.parse(req.body.dynamicDescriptions);
    }

    const files = req.files as {
      image?: Express.Multer.File[];
      dynamicImages?: Express.Multer.File[];
    };

    let mainImageUrl = "";

    if (files?.image && files.image.length > 0) {
      const file = files.image[0]!;
      mainImageUrl = await SingleImageUploadInCloudinery(file.buffer);
    }

    let dynamicImageUrls: string[] = [];

    if (files?.dynamicImages && files.dynamicImages.length > 0) {
      for (const file of files.dynamicImages) {
        const url = await SingleImageUploadInCloudinery(file.buffer);
        dynamicImageUrls.push(url);
      }
    }

    const finalDescriptions: DynamicGallaryDescription[] = dynamicDescriptions.map(
      (item: DynamicGallaryDescription, index: number) => ({
        width: Number(item.width),
        image: dynamicImageUrls[index] || ""
      })
    );

    const data = await GalleryService.updateGallery(
      id,
      Number(width),
      mainImageUrl,
      finalDescriptions
    );

    res.status(200).json({
      success: true,
      data,
    });

  } catch (err) {
    next(err);
  }
};


const deleteGallery = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const id = req.params.id as string;

    const deleteData = await GalleryService.deleteGallery(id);

    res.status(200).json({
      status: true,
      message: "Gallery image delete successfully",
      data: deleteData
    })
  } catch (err) {
    next(err)
  }
}




export const GalleryController = {
  getGallery,
  postGallery,
  updateGallery,
  deleteGallery
}