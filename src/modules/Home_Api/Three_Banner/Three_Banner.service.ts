

// post model 

import { prisma } from "../../../lib/prisma"
import { ThreeBannerImageUploadInCloudinery } from "./utils/ThreeBannerCloudinery"

const ThreeBannerServicePost = async (data: {
    Selected_type: "BannerOne" | "BannerTWo" | "BannerThree",
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
        console.log("Three banner Service Post")

        const result = await prisma.threeBanner.create({
            data: {
                Selected_type: data.Selected_type,
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

const ThreeBannerServiceGet = async () => {
    try {

        const result = await prisma.threeBanner.findMany()
        return result

    } catch (err) {
        console.log('data not found in service')
    }
}




const updateThreeBanner = async (
    id: string,
    Selected_type: "BannerOne" | "BannerTWo" | "BannerThree",
    BannerTitle: string,
    Description: string,
    Image: string
) => {

    try {
        const result = await prisma.threeBanner.update({
            where: { id: id },
            data: {
                Selected_type,
                BannerTitle,
                Description,
                Image
            }
        })
        return result

    } catch (err) {
        throw err
    }
}




const deletethreeBanner = async (id: string) => {

    try {
        const existingId = await prisma.threeBanner.findUnique({
            where: { id: id }
        })

        if (!existingId) {
            throw new Error("Three banner not found");
        }

        const deleteData = await prisma.threeBanner.delete({
            where: { id }
        })

        return deleteData;

    } catch (err) {
        throw new Error("Three banner doesn`t delete successfully")
    }
}


export const ThreeBannerService = {
    ThreeBannerServicePost,
    ThreeBannerServiceGet,
    updateThreeBanner,
    deletethreeBanner
}