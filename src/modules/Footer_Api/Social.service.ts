import { prisma } from "../../lib/prisma";


const getSocial = async () => {
    try {
        const result = await prisma.footer.findMany();
        return result
    } catch (err) {
        throw err
    }
}



const postSocial = async (data: {
    selectedType: "Facebook" | "Youtube" | "Twitter" | "Linkedin",
    socialLink: string,
}) => {
    try {
        const result = await prisma.footer.create({
            data: {
                selectedType: data.selectedType,
                socialLink: data.socialLink,
            }
        });

        return result;
    } catch (err) {
        throw err;
    }
}



const patchSocial = async (data: {
    id: string;
    selectedType: "Facebook" | "Youtube" | "Twitter" | "Linkedin";
    socialLink: string;
}) => {
    try {
        const result = await prisma.footer.update({
            where: { id: data.id }, 
            data: {
                selectedType: data.selectedType,
                socialLink: data.socialLink
            }
        });

        return result;

    } catch (err: any) {
        throw err;
    }
};

const deleteSocial = async (id: string) => {

    try {
        const findId = await prisma.footer.findUnique({
            where: { id: id }
        })

        if (!findId) {
            throw new Error("Footer not found");
        }

        const deleteData = await prisma.footer.delete({
            where: { id }
        })
        return deleteData;

    } catch (err) {
        throw err
    }
}

export const socialService = {
    getSocial,
    postSocial,
    patchSocial,
    deleteSocial
}