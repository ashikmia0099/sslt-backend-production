import { prisma } from "../../../lib/prisma"


const GetCommunityService = async () => {
    try {
        const result = await prisma.ourCommunityEvent.findMany();
        return result
    } catch (err) {
        throw err
    }
}



const PostCommunityService = async (
    Event_Title: string,
    Event_Place_Name: string,
    Description: string,
    Choose_Image: string,
) => {

    try {

        const result = await prisma.ourCommunityEvent.create({
            data: {
                Event_Title,
                Event_Place_Name,
                Description,
                Choose_Image
            }
        })
        return result

    } catch (err) {
        throw err
    }
}


const updateCommunityService = async (
    id: string,
    Event_Title: string,
    Event_Place_Name: string,
    Description: string,
    Choose_Image?: string,
) => {
    try {
        const existing = await prisma.ourCommunityEvent.findUnique({
            where: { id }
        });

        const dataToUpdate: any = {
            Event_Title,
            Event_Place_Name,
            Description,
        };

        // ✅ Only add image if exists
        if (Choose_Image) {
            dataToUpdate.Choose_Image = Choose_Image;
        }

        const result = await prisma.ourCommunityEvent.update({
            where: { id },
            data: dataToUpdate
        });

        return result;

    } catch (err) {
        throw err;
    }
};

const deleteCommunity = async (id: string) => {

    try {
        const existingId = await prisma.ourCommunityEvent.findUnique({
            where: { id: id }
        })

        if (!existingId) {
            throw new Error("Community data not found");
        }

        const deleteData = await prisma.ourCommunityEvent.delete({
            where: { id }
        })

        return deleteData;

    } catch (err) {
        throw new Error("Community data doesn`t delete successfully")
    }
}



export const CommunityService = {
    GetCommunityService,
    PostCommunityService,
    updateCommunityService,
    deleteCommunity,
}