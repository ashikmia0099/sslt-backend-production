import { NextFunction, Request, Response } from "express";
import { HeroSecondService } from "./HeroSecond.service";
import { DynamicDescriptions } from "../../../types/common";
import { SingleImageUploadInCloudinery } from "../../../config/SingleImageUploadInCloudinery";




const HeroSecondControllerPost = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const {
      Doctor_Name,
      Doctor_Position,
      Working_place,
      Description_Title,
      Description,
      ImagePostType
    } = req.body;

    // dynamic text parse
    let dynamicDescriptions: DynamicDescriptions[] = [];

    if (req.body.dynamicDescriptions) {
      dynamicDescriptions = JSON.parse(req.body.dynamicDescriptions);
    }

    // files
    const files = req.files as {
      image?: Express.Multer.File[];
      dynamicImages?: Express.Multer.File[];
      Choose_Dual_Type_Image_1?: Express.Multer.File[];
      Choose_Dual_Type_Image_2?: Express.Multer.File[];
    };

    // single image
    let mainImageUrl = "";

    if (files?.image && files.image.length > 0) {
      const file = files.image[0];
      if (file) {
        mainImageUrl = await SingleImageUploadInCloudinery(file.buffer);
      }
    }

    // dynamic images
    let dynamicImageUrls: string[] = [];

    if (files?.dynamicImages && files.dynamicImages.length > 0) {
      for (const file of files.dynamicImages) {
        if (file) {
          const url = await SingleImageUploadInCloudinery(file.buffer);
          dynamicImageUrls.push(url);
        }
      }
    }

    // dual images
    let dualImage1 = "";
    let dualImage2 = "";

    if (files?.Choose_Dual_Type_Image_1?.length) {
      const file = files.Choose_Dual_Type_Image_1[0];
      if (file) {
        dualImage1 = await SingleImageUploadInCloudinery(file.buffer);
      }
    }

    if (files?.Choose_Dual_Type_Image_2?.length) {
      const file = files.Choose_Dual_Type_Image_2[0];
      if (file) {
        dualImage2 = await SingleImageUploadInCloudinery(file.buffer);
      }
    }

    // merge dynamic text + image
    const finalDescriptions: DynamicDescriptions[] = dynamicDescriptions.map(
      (item, index) => ({
        title: item.title,
        description: item.description,
        image: dynamicImageUrls[index] || null,
      })
    );

    const data = await HeroSecondService.HeroSecondServicePost(
      Doctor_Name,
      Doctor_Position,
      Working_place,
      Description_Title,
      Description,
      finalDescriptions,
      mainImageUrl,
      ImagePostType,
      dualImage1,
      dualImage2
    );

    res.status(200).json({
      success: true,
      data,
    });

  } catch (err) {
    next(err);
  }
};



const HeroSecondControllerPatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // ✅ id only from params
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const {
      Doctor_Name,
      Doctor_Position,
      Working_place,
      Description_Title,
      Description,
      ImagePostType
    } = req.body;

    // ✅ parse dynamicDescriptions
    let dynamicDescriptions: DynamicDescriptions[] = [];

    if (req.body.dynamicDescriptions) {
      dynamicDescriptions = JSON.parse(req.body.dynamicDescriptions);
    }

    // ✅ files
    const files = req.files as {
      image?: Express.Multer.File[];
      dynamicImages?: Express.Multer.File[];
      Choose_Dual_Type_Image_1?: Express.Multer.File[];
      Choose_Dual_Type_Image_2?: Express.Multer.File[];
    };

    // ✅ single image
    let mainImageUrl = "";

    if (files?.image && files.image.length > 0) {
      const file = files.image[0];
      if (file) {
        mainImageUrl = await SingleImageUploadInCloudinery(file.buffer);
      }
    }

    // ✅ dynamic images
    let dynamicImageUrls: string[] = [];

    if (files?.dynamicImages && files.dynamicImages.length > 0) {
      for (const file of files.dynamicImages) {
        if (file) {
          const url = await SingleImageUploadInCloudinery(file.buffer);
          dynamicImageUrls.push(url);
        }
      }
    }

    // ✅ dual images
    let dualImage1 = "";
    let dualImage2 = "";

    if (files?.Choose_Dual_Type_Image_1?.length) {
      const file = files.Choose_Dual_Type_Image_1[0];
      if (file) {
        dualImage1 = await SingleImageUploadInCloudinery(file.buffer);
      }
    }

    if (files?.Choose_Dual_Type_Image_2?.length) {
      const file = files.Choose_Dual_Type_Image_2[0];
      if (file) {
        dualImage2 = await SingleImageUploadInCloudinery(file.buffer);
      }
    }

    // ✅ merge dynamic text + image
    const finalDescriptions: DynamicDescriptions[] = dynamicDescriptions.map(
      (item, index) => ({
        title: item.title,
        description: item.description,
        image: dynamicImageUrls[index] || null,
      })
    );

    // ✅ call service
    const data = await HeroSecondService.HeroSecondControllerPatch(
      id,
      Doctor_Name,
      Doctor_Position,
      Working_place,
      Description_Title,
      Description,
      finalDescriptions,
      mainImageUrl,
      ImagePostType,
      dualImage1,
      dualImage2
    );

    res.status(200).json({
      success: true,
      data,
    });

  } catch (err) {
    next(err);
  }
};

const HeroSecondControllerGet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await HeroSecondService.HeroSecondServiceGet()
    res.status(200).json(result)
  } catch (err) {
    next(err);
  }
}



const deleteSecondHero = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const id = req.params.id as string;

    const deleteData = await HeroSecondService.deleteHeroSecond(id);

    res.status(200).json({
      status: true,
      message: "Hero image delete successfully",
      data: deleteData
    })
  } catch (err) {
    next(err)
  }
}


export const HeroSecondController = {
  HeroSecondControllerPost,
  HeroSecondControllerGet,
  HeroSecondControllerPatch,
  deleteSecondHero
}