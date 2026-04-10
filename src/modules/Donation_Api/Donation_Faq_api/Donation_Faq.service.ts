
import { prisma } from "../../../lib/prisma"

// get all data
const getDonationFaq = async () => {
    try {
        const result = await prisma.donationFAQ.findMany();
        return result
    } catch (err) {
        throw err
    }
}



const postDonationFaq = async (
    Title_Name: string,
    Description: string,

) => {
    try {
        const result = await prisma.donationFAQ.create({
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


const deleteDonationFaq = async (id: string) => {

    try {
        const findNewsId = await prisma.donationFAQ.findUnique({
            where: { id: id }
        })

        if (!findNewsId) {
            throw new Error("Donation FAQ data not found");
        }

        const deleteData = await prisma.donationFAQ.delete({
            where: { id }
        })
        return deleteData;

    } catch (err) {
        throw new Error("Donation FAQ data not delete successfully")
    }
}


const updateDonationFaq = async (id: string, updatedData: any) => {

    try {
        const result = await prisma.donationFAQ.update({
            where: { id: id },
            data: updatedData
        })
        return result

    } catch (err: any) {
        throw new Error("Donation FAQ data doesn`t updated successfully", err)
    }
}


export const DonationFaqService = {
    getDonationFaq,
    postDonationFaq,
    updateDonationFaq,
    deleteDonationFaq
}