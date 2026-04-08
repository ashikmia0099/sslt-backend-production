import { prisma } from "../../../lib/prisma";


// get service
const getAboutBanner = async () => {
    try {
        const result = await prisma.aboutHero.findMany()
        return result;
    } catch (err) {
        throw err
    }
};


// post service 
const postAboutBanner = async (data: {
    selected_type: "Text" | "Image";
    title?: string | null;
    shortOverview?: string | null;
    descripiton?: string | null;
    image: string;
}) => {
    try {
        const result = await prisma.aboutHero.create({ data });
        return result;
    } catch (err) {
        throw err
    }
};


const updateAboutBanner = async (
    id: string,
    selected_type: "Text" | "Image",
    title: string,
    shortOverview?: string,
    descripiton?: string,
    image?: string
) => {

    try {

        const data: any = {
            selected_type,
            title
        }

        if (shortOverview !== undefined) data.shortOverview = shortOverview
        if (descripiton !== undefined) data.descripiton = descripiton
        if (image !== undefined) data.image = image

        const result = await prisma.aboutHero.update({
            where: { id },
            data
        })

        return result

    } catch (err: any) {
        throw new Error("About banner data doesn`t updated successfully")
    }
}



const deleteAboutBanner = async (id: string) => {

    try {
        const findNewsId = await prisma.aboutHero.findUnique({
            where: { id: id }
        })

        if (!findNewsId) {
            throw new Error("About banner not found");
        }

        const deleteData = await prisma.aboutHero.delete({
            where: { id }
        })
        return deleteData;

    } catch (err) {
        throw new Error("About banner not delete successfully")
    }
}




export const aboutBannerSerivce = {
    getAboutBanner,
    postAboutBanner,
    updateAboutBanner,
    deleteAboutBanner,


}