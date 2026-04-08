import { prisma } from "../../../lib/prisma"


const getDonationMedium = async () => {

    try {
        const result = await prisma.donationMedium.findMany();
        return result
    } catch (err) {
        throw err
    }
}


const postDonationMedium = async (
    MFS_Bank_Name: string,
    MFS_Bank_Image: string,
    shortOverview: string,
    FieldOne: string,
    FieldTwo: string,
) => {

    try {
        const result = await prisma.donationMedium.create({
            data: {
                MFS_Bank_Name,
                MFS_Bank_Image,
                shortOverview,
                FieldOne : FieldOne || null ,
                FieldTwo : FieldTwo || null,
            }
        })
        return result
    } catch (err) {
        throw err
    }
}


const updateDonationMedium = async (

    id: string,  
    MFS_Bank_Name :string, 
    shortOverview : string, 
    FieldOne :string, 
    FieldTwo :string, 
    MFS_Bank_Image  : string
    ) => {

    try {
        const result = await prisma.donationMedium.update({
            where: { id: id },
            data: {
               MFS_Bank_Name,
               shortOverview,
               FieldOne,
               FieldTwo,
               MFS_Bank_Image
            }
        })
        return result

    } catch (err: any) {
        throw new Error("Donation Medium data doesn`t updated successfully")
    }
}


const deleteDonationMedium = async (id: string) => {

    try {
        const findNewsId = await prisma.donationMedium.findUnique({
            where: { id: id }
        })

        if (!findNewsId) {
            throw new Error("Donation meidum data not found");
        }

        const deleteData = await prisma.donationMedium.delete({
            where: { id }
        })
        return deleteData;

    } catch (err) {
        throw new Error("Donation medium data not delete successfully")
    }
}

export const Donation_MediumService = {
    getDonationMedium,
    postDonationMedium,
    updateDonationMedium,
    deleteDonationMedium,
}