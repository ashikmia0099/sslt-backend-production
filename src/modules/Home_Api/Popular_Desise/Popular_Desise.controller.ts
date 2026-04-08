import { NextFunction, Request, Response } from "express";
import { prisma } from "../../../lib/prisma";
import { PopularDesisService } from "./Popular_Desise.service";
import { SingleImageUploadInCloudinery } from "../../../config/SingleImageUploadInCloudinery";



// get all data

const getPopularDesiesController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await PopularDesisService.GetPopularDesisService()

        res.status(200).json({
            success: true,
            data: result
        })
    } catch (err) {
        next(err)
    }
}


export const createPopularDesiesController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { Desis_Name, Description_Title, Description, dynamicDescriptions } = req.body;

        let chooseImageUrl = "";

        // ✅ image upload
        if (req.file && req.file.buffer) {
            chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
        }

        // ✅ parse JSON safely
        const parsedDynamicDescriptions = dynamicDescriptions
            ? JSON.parse(dynamicDescriptions)
            : [];

        const data = await PopularDesisService.PostPopularDesisService(
            Desis_Name,
            chooseImageUrl,
            Description_Title,
            Description,
            parsedDynamicDescriptions
        );

        res.status(200).json({
            success: true,
            data,
            message: "Popular Desies Post Successfully!",
        });
    } catch (err) {
        next(err);
    }
};



const updatePopularDesisService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id as string;
    const Desis_Name = req.body.Desis_Name as string || "";
    const Description_Title = req.body.Description_Title as string || "";
    const Description = req.body.Description as string || "";
    const dynamicDescriptions = req.body.dynamicDescriptions;
    let chooseImageUrl = (req.body.existingImage as string) || "";

    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }

    const parsedDynamicDescriptions = dynamicDescriptions
      ? JSON.parse(dynamicDescriptions as string)
      : [];

    const data = await PopularDesisService.updatePopularDesisService(
      id,
      Desis_Name,
      chooseImageUrl,
      Description_Title,
      Description,
      parsedDynamicDescriptions
    );

    res.status(200).json({
      success: true,
      data,
      message: "Updated successfully",
    });

  } catch (err) {
    next(err);
  }
};

const deletePopularDesis = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id as string;
        console.log("this is news id", id)

        const deleteData = await PopularDesisService.deletePopularDesis(id);

        res.status(200).json({
            status: true,
            message: "Gallery image delete successfully",
            data: deleteData
        })
    } catch (err) {
        next(err)
    }
}


export const PopularDesisController = {
    getPopularDesiesController,
    createPopularDesiesController,
    updatePopularDesisService,
    deletePopularDesis
}