import { prisma } from "../../lib/prisma";


const getContact = async () => {
    try {
        const result = await prisma.contactMedium.findMany();
        return result
    } catch (err) {
        throw err
    }
}

const postContact = async (
    postedType: "Phone" | "Email" | "Address" | "OpeningDayTime",
    FieldOne?: string,
    FieldTwo?: string

) => {

    try {
        const result = await prisma.contactMedium.create({
            data: {
                postedType,
                FieldOne: FieldOne ?? null,
                FieldTwo: FieldTwo ?? null
            }
        })
        return result

    } catch (err) {
        throw err
    }
}


const deleteContact = async (id: string) => {

    try {
        const findNewsId = await prisma.contactMedium.findUnique({
            where: { id: id }
        })

        if (!findNewsId) {
            throw new Error("Contact not found");
        }

        const deletenewsData = await prisma.contactMedium.delete({
            where: { id }
        })

        return deletenewsData;

    } catch (err) {
        throw new Error("Contact data not delete successfully")
    }
}

const updateContact = async (
    id: string,
    postedType: "Phone" | "Email" | "Address" | "OpeningDayTime",
    FieldOne: string,
    FieldTwo: string
) => {

    try {
        const result = await prisma.contactMedium.update({
            where: { id: id },
            data: {
                postedType,
                FieldOne,
                FieldTwo
            }
        })
        return result

    } catch (err: any) {
        console.log(err)
        throw new Error("Contact data doesn`t updated successfully", err)
    }
}



export const ContactService = {
    getContact,
    postContact,
    updateContact,
    deleteContact,
}