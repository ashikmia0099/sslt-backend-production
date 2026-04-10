import { NextFunction, Request, Response } from "express";
import cloudinary from "../../../config/cloudinary";
import { UploadApiResponse } from "cloudinary";
import { prisma } from "../../../lib/prisma";
import { Mission_vission_objectService } from "./Mission_vission_object.service";
import { SingleImageUploadInCloudinery } from "../../../config/SingleImageUploadInCloudinery";




const Mission_vission_object_Post = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Destructure from req.body
    const { postType, Title, Description, dynamicDescriptions } = req.body;

    if (!postType) {
      return res.status(400).json({ success: false, message: "PostType is required" });
    }

    let imageUrl: string = "";

    if (postType === "Image") {
      if (!req.file) {
        return res.status(400).json({ success: false, message: "Image is required for upload" });
      }
      const uploadResult: UploadApiResponse = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ folder: "hero" }, (error, result) => {
          if (error) reject(error);
          else if (!result) reject(new Error("Cloudinary Upload Failed"));
          else resolve(result);
        }).end(req.file!.buffer);
      });

      imageUrl = uploadResult.secure_url;
    }

    let parsedDynamicDescriptions: any[] = [];
    if (dynamicDescriptions) {
      try {
        parsedDynamicDescriptions = JSON.parse(dynamicDescriptions);
      } catch (err) {
        return res.status(400).json({ success: false, message: "Invalid dynamicDescriptions format" });
      }
    }
    const result = await Mission_vission_objectService.Create_Mission_vission_object_service({
      postType,
      Title: Title || "",
      Description: Description || "",
      dynamicDescriptions: parsedDynamicDescriptions,
      Image: imageUrl,
    });

    res.status(200).json({ success: true, data: result });
  } catch (err: any) {
    next(err)
  }
};



const Mission_vission_object_Get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await Mission_vission_objectService.getMissionVissionObject()
    res.status(200).json(result);
  } catch (err: any) {
    next(err)
  }
}




export const updateMissionVissionObject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;

    // For multipart/form-data, all text fields are in req.body
    // multer parses files into req.file
    const postType = req.body.postType as "Text" | "Image";
    const Title = req.body.Title as string;
    const Description = req.body.Description as string;
    const dynamicDescriptions = req.body.dynamicDescriptions
      ? JSON.parse(req.body.dynamicDescriptions)
      : undefined;

    let chooseImageUrl = req.body.existingImage || ""; // fallback if no new image

    if (req.file && req.file.buffer) {
      // upload new image
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }

    const data = await Mission_vission_objectService.updateMissionVissionObject(
      id,
      postType,
      Title,
      Description,
      chooseImageUrl,
      dynamicDescriptions
    );

    res.status(200).json({
      success: true,
      data,
      message: "Mission vission object data updated successfully!",
    });
  } catch (err) {
    next(err);
  }
};





const deleteMissionVissionObject = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const id = req.params.id as string;

    const deleteData = await Mission_vission_objectService.deleteMissionVissionObject(id);

    res.status(200).json({
      status: true,
      message: "Mission Vission object delete successfully",
      data: deleteData
    })
  } catch (err) {
    next(err)
  }
}


export const MissionVissionObjectController = {
  Mission_vission_object_Post,
  Mission_vission_object_Get,
  updateMissionVissionObject,
  deleteMissionVissionObject


}