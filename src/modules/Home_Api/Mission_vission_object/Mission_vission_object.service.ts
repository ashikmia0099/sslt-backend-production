import { prisma } from "../../../lib/prisma";
import { DynamicDescriptions } from "../../../types/common";
import { Prisma } from "../../../../generated/prisma/client";




export const getMissionVissionObject = async () => {
    try {
        const result = await prisma.missionVissionObject.findMany()
        return result;
    } catch (err: any) {
        throw err
    }
};



export const Create_Mission_vission_object_service = async (data: {
    postType: "Text" | "Image";
    Title: string;
    Description: string;
    dynamicDescriptions?: any[];
    Image: string;
}) => {
    try {
        const result = await prisma.missionVissionObject.create({
            data: {
                postType: data.postType,
                Title: data.Title,
                Description: data.Description,
                dynamicDescriptions: data.dynamicDescriptions ?? [],
                Image: data.Image,
            },
        });
        return result;
    } catch (err) {
        throw err;
    }
};





const updateMissionVissionObject = async (
    id: string,
    postType: "Text" | "Image",
    Title: string,
    Description: string,
    Image: string,
    dynamicDescriptions?: DynamicDescriptions[],
) => {

    try {
        const result = await prisma.missionVissionObject.update({
            where: { id: id },
            data: {
                postType,
                Title,
                Description,
                Image,
                dynamicDescriptions: dynamicDescriptions as unknown as Prisma.JsonArray
            }
        })
        return result

    } catch (err) {
        throw err
    }
}


const deleteMissionVissionObject = async (id: string) => {

    try {
        const existingId = await prisma.missionVissionObject.findUnique({
            where: { id: id }
        })

        if (!existingId) {
            throw new Error("Mission vission not found");
        }

        const deleteData = await prisma.missionVissionObject.delete({
            where: { id }
        })

        return deleteData;

    } catch (err) {
        throw new Error("Misson vission doesn`t delete successfully")
    }
}




export const Mission_vission_objectService = {
    getMissionVissionObject,
    Create_Mission_vission_object_service,
    deleteMissionVissionObject,
    updateMissionVissionObject


}