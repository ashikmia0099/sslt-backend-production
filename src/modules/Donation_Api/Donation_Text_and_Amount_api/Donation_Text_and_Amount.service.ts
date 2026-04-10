import { prisma } from "../../../lib/prisma";


const getDonationTextandAmount = async () => {
    try {
        const result = await prisma.donationTextAndAmount.findMany();
        return result
    } catch (err) {
        throw err
    }
}

const postDonationTextandAmount = async (
    selectedType: "Text" | "Amount",
    Title?: string | null,
    Description?: string | null,
    NumberOfAmount?: number | null

) => {

    try {
        const result = await prisma.donationTextAndAmount.create({
            data: {
                selectedType,
                Title: Title ?? null,
                Description: Description ?? null,
                NumberOfAmount: NumberOfAmount ?? null
            }
        })
        return result

    } catch (err) {
        throw err
    }
}

// const updateDonationTextandAmount = async (id: string, updatedData: any) => {

//     try {
//         const result = await prisma.donationTextAndAmount.update({
//             where: { id: id },
//             data: updatedData
//         })
//         return result

//     } catch (err: any) {
//         console.log(err)
//         throw new Error("Donation text and amout data doesn`t updated successfully", err)
//     }
// }


const updateDonationTextandAmount = async (id: string, updatedData: any) => {
    try {
        const result = await prisma.donationTextAndAmount.update({
            where: { id: String(id) },
            data: updatedData
        });

        return result;

    } catch (err) {
        throw new Error("Donation update failed");
    }
};


const deleteDonationTextandAmount = async (id: string) => {

    try {
        const findNewsId = await prisma.donationTextAndAmount.findUnique({
            where: { id: id }
        })

        if (!findNewsId) {
            throw new Error("Donation text and amount data not found");
        }

        const deleteData = await prisma.donationTextAndAmount.delete({
            where: { id }
        })
        return deleteData;

    } catch (err) {
        throw new Error("Donation text and amount data not delete successfully")
    }
}


export const Donation_Text_and_AmountService = {
    getDonationTextandAmount,
    postDonationTextandAmount,
    updateDonationTextandAmount,
    deleteDonationTextandAmount,
}