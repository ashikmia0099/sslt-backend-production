import { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import { DynamicGallaryDescription } from "../../types/common";


const getGallery = async () => {
    try {
        const result = await prisma.gallary.findMany();
        return result
    } catch (err) {
        throw err
    }
}

const postGallery = async (
    width: number,
    image: string,
    dynamicDescriptions? : DynamicGallaryDescription[]
    
) => {

    try {
        const result = await prisma.gallary.create({
            data: {
                width,
                image,
                dynamicDescriptions : dynamicDescriptions as unknown as Prisma.JsonArray
            }
        })
        return result

    } catch (err) {
        throw err
    }
}

const updateGallery = async (id: string, width: number, image: string,  dynamicDescriptions? : DynamicGallaryDescription[]) => {

    try {
        const result = await prisma.gallary.update({
            where: { id: id },
            data: {
                width,
                image,
                dynamicDescriptions : dynamicDescriptions as unknown as Prisma.JsonArray
            }
        })
        return result

    } catch (err: any) {
        throw new Error("Gallery image doesn`t updated successfully")
    }
}



const deleteGallery = async (id: string) => {

    try {
        const existingId = await prisma.gallary.findUnique({
            where: { id: id }
        })

        if (!existingId) {
            throw new Error("Gallary image not found");
        }

        const deleteData = await prisma.gallary.delete({
            where: { id }
        })

        return deleteData;

    } catch (err) {
        throw new Error("Gallery image doesn`t delete successfully")
    }
}


export const GalleryService = {
    getGallery,
    postGallery,
    updateGallery,
    deleteGallery,
}