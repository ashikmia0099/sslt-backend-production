import { prisma } from "../../../lib/prisma"


const GetCommuniction_Hearing = async () => {
    try {
        const result = await prisma.hearingAndHealthcare.findMany();
        return result
    } catch (err) {
        throw err
    }
}



const PostCommuniction_Hearing = async ( 
    Title_Name : string,
    Description : string,
    
) => {
    try {
        const result = await prisma.hearingAndHealthcare.create({
             data :{
                Title_Name,
                Description
             }
        })

        return result
    } catch (err) {
        throw err
    }
}




const deleteCommunictionHearing = async (id: string) => {

    try {
        const existingId = await prisma.hearingAndHealthcare.findUnique({
            where: { id: id }
        })

        if (!existingId) {
            throw new Error("Hearing and healthcare not found");
        }

        const deleteData = await prisma.hearingAndHealthcare.delete({
            where: { id }
        })

        return deleteData;

    } catch (err) {
        throw new Error("Hearing and healthcare doesn`t delete successfully")
    }
}


const updateCommunictionHearing = async (id: string, updatedData: any) => {

    try {
        const result = await prisma.hearingAndHealthcare.update({
            where: { id: id },
            data: updatedData
        })
        return result

    } catch (err: any) {
        throw new Error("Communication and Hearing data doesn`t updated successfully")
    }
}



export const Communiction_HearingService = {
    GetCommuniction_Hearing,
    PostCommuniction_Hearing,
    updateCommunictionHearing,
    deleteCommunictionHearing
}