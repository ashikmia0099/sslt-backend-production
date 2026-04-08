import { JsonArray } from './../../../../generated/prisma/internal/prismaNamespace';
import { Prisma } from "../../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma"
import { DynamicDescriptions } from "../../../types/common"


const GetCommunication_HelthCareService = async () => {

    try {
        const result = await prisma.communicationAndHealthcare.findMany();
        return result
    } catch (err) {
        throw err
    }
}




 const PostCommunication_HelthCareService = async (
  Title_Name: string,
  Overview: string,
  Choose_Image: string,
  DescriptionTitle: string,
  Description: string,
  dynamicDescriptions: any[]
) => {
  return await prisma.communicationAndHealthcare.create({
    data: {
      Title_Name,
      Overview,
      Choose_Image,
      DescriptionTitle,
      Description,
      dynamicDescriptions,
    },
  });
};


const updateCommunicationHelthCare = async (
    id : string,
    Title_Name: string,
    Overview: string,
    Choose_Image: string,
    DescriptionTitle: string,
    Description: string,
    dynamicDescriptions: DynamicDescriptions[]
) => {

    try {

        const result = await prisma.communicationAndHealthcare.update({
            where: { id: id },
            data: {
                Title_Name,
                Overview,
                Choose_Image,
                DescriptionTitle,
                Description,
                dynamicDescriptions: dynamicDescriptions as unknown as Prisma.JsonArray
            }
        })

        return result

    } catch (err) {
        throw err
    }
}



const deleteCommunicationHelthCare = async (id: string) => {

    try {
        const existingId = await prisma.communicationAndHealthcare.findUnique({
            where: { id: id }
        })

        if (!existingId) {
            throw new Error("Popular medical Decis image not found");
        }

        const deleteData = await prisma.communicationAndHealthcare.delete({
            where: { id }
        })

        return deleteData;

    } catch (err) {
        throw new Error("Popular medical Decis doesn`t delete successfully")
    }
}


export const Communication_HelthCareService = {
    GetCommunication_HelthCareService,
    PostCommunication_HelthCareService,
    updateCommunicationHelthCare,
    deleteCommunicationHelthCare,
}