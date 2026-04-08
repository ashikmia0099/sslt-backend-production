// post model 

import { prisma } from "../../../lib/prisma"
import { ThreeBannerImageUploadInCloudinery } from "../../Home_Api/Three_Banner/utils/ThreeBannerCloudinery"

const postThreeBanner = async (data: {
    selected_type: "BannerOne" | "BannerTWo" | "BannerThree",
    BannerTitle: string,
    Description: string,
    ImageBuffer: Buffer
}) => {
    try {

        if (!data.ImageBuffer) {
            throw new Error("Image is Required")
        }
        let ImageUrl = await ThreeBannerImageUploadInCloudinery(
            data.ImageBuffer
        )
        const result = await prisma.aboutThreeBanner.create({
            data: {
                selected_type: data.selected_type,
                BannerTitle: data.BannerTitle,
                Description: data.Description,
                Image: ImageUrl
            }
        })

        return result
    } catch (err) {
        throw err
    }
}

const getThreeBanner = async () => {
    try {

        const result = await prisma.aboutThreeBanner.findMany()
        return result

    } catch (err) {
        throw err
    }
}


const deleteThreeBanner = async (id: string) => {

    try {
        const findNewsId = await prisma.aboutThreeBanner.findUnique({
            where: { id: id }
        })

        if (!findNewsId) {
            throw new Error("Three banner data not found");
        }

        const deleteData = await prisma.aboutThreeBanner.delete({
            where: { id }
        })
        return deleteData;

    } catch (err) {
        throw new Error("Three banner data not delete successfully")
    }
}



const updateThreeBanner = async (
    id: string,
    selected_type: "BannerOne" | "BannerTWo" | "BannerThree",
    BannerTitle: string,
    Description: string,
    Image: string
) => {

    try {
        const result = await prisma.aboutThreeBanner.update({
            where: { id: id },
            data: {
                selected_type,
                BannerTitle,
                Description,
                Image
            }
        })
        return result

    } catch (err: any) {
        throw new Error("About three banner data doesn`t updated successfully")
    }
}


export const ThreeBannerService = {
    postThreeBanner,
    getThreeBanner,
    updateThreeBanner,
    deleteThreeBanner
}