import { prisma } from "../../../lib/prisma"
import { FoundingMemberImageUploadInCloudinery } from "./utils/FoundingMemberCloudinery"




const FoundingMemberServiceGet = async () => {
    try {
        const result = await prisma.foundingMemberMessage.findMany()
        return result;
    } catch (err) {
        throw err
    }
}


const FoundingMemberServicePost = async (data: {
    ChooseFoundingMemberType: "Pesident" | "Secretary" | "Founding",
    Name: string,
    Description: string,
    ImageBuffer: Buffer
}
) => {
    try {

        if (!data.ImageBuffer) {
            throw new Error("Image is required")
        }

        let ImageUrl = await FoundingMemberImageUploadInCloudinery(
            data.ImageBuffer
        )

        const result = await prisma.foundingMemberMessage.create({
            data: {
                ChooseFoundingMemberType: data.ChooseFoundingMemberType,
                Name: data.Name,
                Description: data.Description,
                Choose_Image: ImageUrl
            }
        })
        return result;

    } catch (err) {
        throw err
    }
}





const updateFoundingMember = async( 
    id :string,
    ChooseFoundingMemberType: "Pesident" | "Secretary" | "Founding",
    Name: string,
    Description: string,
    Choose_Image: string
) => {
    try {
        const result = await prisma.foundingMemberMessage.update({
            where: { id: id },
            data: {
                ChooseFoundingMemberType,
                Name,
                Description,
                Choose_Image,
            }
        })
        return result;

    } catch (err) {
        throw err
    }
}


const deleteFoundingMember = async (id: string) => {

    try {
        const existingId = await prisma.foundingMemberMessage.findUnique({
            where: { id: id }
        })

        if (!existingId) {
            throw new Error("Founding member not found");
        }

        const deleteData = await prisma.foundingMemberMessage.delete({
            where: { id }
        })

        return deleteData;

    } catch (err) {
        throw new Error("Founding member doesn`t delete successfully")
    }
}



export const FoundingMemberService = {
    FoundingMemberServicePost,
    FoundingMemberServiceGet,
    updateFoundingMember,
    deleteFoundingMember
}



