import { Prisma } from "../../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma"
import { DynamicDescriptions } from "../../../types/common"


const GetPopularDesisService = async () => {

    try {

        const result = await prisma.popularMedicalDecis.findMany();
        return result
    } catch (err) {
        throw err
    }
}



const PostPopularDesisService = async (
    Desis_Name: string,
    Choose_Image: string,
    Description_Title: string,
    Description: string,
    dynamicDescriptions: DynamicDescriptions[]
) => {

    try {

        const result = await prisma.popularMedicalDecis.create({
            data: {
                Desis_Name,
                Choose_Image,
                Description_Title,
                Description,
                dynamicDescriptions: dynamicDescriptions as unknown as Prisma.JsonArray
            }
        })

        return result

    } catch (err) {
        throw err
    }
}


const updatePopularDesisService = async (
  id: string,
  Desis_Name: string,
  Choose_Image: string,
  Description_Title: string,
  Description: string,
  dynamicDescriptions: DynamicDescriptions[]
) => {
  try {
    const result = await prisma.popularMedicalDecis.update({
      where: { id },
      data: {
        Desis_Name,
        Choose_Image,
        Description_Title,
        Description,
        dynamicDescriptions: dynamicDescriptions as unknown as Prisma.JsonArray
      }
    });

    return result;
  } catch (err) {
    throw err;
  }
};




const deletePopularDesis = async (id: string) => {

    try {
        const existingId = await prisma.popularMedicalDecis.findUnique({
            where: { id: id }
        })

        if (!existingId) {
            throw new Error("Popular desis not found");
        }

        const deleteData = await prisma.popularMedicalDecis.delete({
            where: { id }
        })

        return deleteData;

    } catch (err) {
        throw new Error("Popular desies doesn`t delete successfully")
    }
}


export const PopularDesisService = {
    GetPopularDesisService,
    PostPopularDesisService,
    deletePopularDesis,
    updatePopularDesisService
}