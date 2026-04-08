import { Prisma } from "../../../../generated/prisma/client"
import { prisma } from "../../../lib/prisma"
import { DynamicDescriptions } from "../../../types/common"

const HeroSecondServiceGet = async () => {
    try {
        const getAllData = await prisma.bannerSecond.findMany()
        return getAllData
    } catch (err) {
        throw err;
    }
}

const HeroSecondServicePost = async (
  Doctor_Name: string,
  Doctor_Position: string,
  Working_place: string,
  Description_Title: string,
  Description: string,
  dynamicDescriptions?: DynamicDescriptions[],
  mainImageUrl?: string,
  ImagePostType?: "SingleImage" | "DualImage",
  dualImage1?: string,
  dualImage2?: string
) => {
  try {

    if (!ImagePostType) {
      throw new Error("ImagePostType is required");
    }

    const result = await prisma.bannerSecond.create({
      data: {
        Doctor_Name,
        Doctor_Position,
        Working_place,
        Description_Title,
        Description,
        ImagePostType,
        SingleImage: ImagePostType === "SingleImage" ? mainImageUrl || null : null,

        Choose_Dual_Type_Image_1:
          ImagePostType === "DualImage" ? dualImage1 || null : null,

        Choose_Dual_Type_Image_2:
          ImagePostType === "DualImage" ? dualImage2 || null : null,

        dynamicDescriptions:
          dynamicDescriptions as unknown as Prisma.JsonArray
      }
    });

    return result;

  } catch (err) {
    throw err;
  }
};



const HeroSecondControllerPatch = async (
  id: string,
  Doctor_Name: string,
  Doctor_Position: string,
  Working_place: string,
  Description_Title: string,
  Description: string,
  dynamicDescriptions?: DynamicDescriptions[],
  mainImageUrl?: string,
  ImagePostType?: "SingleImage" | "DualImage",
  dualImage1?: string,
  dualImage2?: string
) => {
  try {

    if (!ImagePostType) {
      throw new Error("ImagePostType is required");
    }

    // ✅ dynamic data object (VERY IMPORTANT)
    const updateData: any = {
      Doctor_Name,
      Doctor_Position,
      Working_place,
      Description_Title,
      Description,
      ImagePostType,
      dynamicDescriptions: dynamicDescriptions as unknown as Prisma.JsonArray
    };

    // ✅ conditionally add fields (NO undefined)
    if (ImagePostType === "SingleImage") {
      updateData.SingleImage = mainImageUrl || null;
    }

    if (ImagePostType === "DualImage") {
      updateData.Choose_Dual_Type_Image_1 = dualImage1 || null;
      updateData.Choose_Dual_Type_Image_2 = dualImage2 || null;
    }

    const result = await prisma.bannerSecond.update({
      where: { id },
      data: updateData
    });

    return result;

  } catch (err) {
    throw err;
  }
};





const deleteHeroSecond = async (id: string) => {

    try {
        const existingId = await prisma.bannerSecond.findUnique({
            where: { id: id }
        })

        if (!existingId) {
            throw new Error("Second hero not found");
        }

        const deleteData = await prisma.bannerSecond.delete({
            where: { id }
        })

        return deleteData;

    } catch (err) {
        throw err;
    }
}



export const HeroSecondService = {
    HeroSecondServicePost,
    HeroSecondServiceGet,
    HeroSecondControllerPatch,
    deleteHeroSecond
}

