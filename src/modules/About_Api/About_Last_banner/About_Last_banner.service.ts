import { prisma } from "../../../lib/prisma";


export const postAboutLastBanner = async (data: {
    selected_type: "Text" | "Image";
    title?: string | null;
    descripiton?: string | null;
    image: string;
}) => {
    const result = await prisma.lastBanner.create({ data });
    return result;
};

export const getAboutLastBanner = async () => {
    const result = await prisma.lastBanner.findMany()

    return result;
};


const deleteAboutLastBanner = async (id: string) => {

    try {
        const findNewsId = await prisma.lastBanner.findUnique({
            where: { id: id }
        })

        if (!findNewsId) {
            throw new Error("Last banner not found");
        }

        const deleteData = await prisma.lastBanner.delete({
            where: { id }
        })
        return deleteData;

    } catch (err) {
        throw new Error("Last banner not delete successfully")
    }
}

const updateAboutLastBanner = async (id: string, selected_type: "Text" | "Image", title: string, descripiton: string,image : string) => {

    try {
        const result = await prisma.lastBanner.update({
            where: { id: id },
            data: {
                selected_type,
                title,
                descripiton,
                image
            }
        })
        return result

    } catch (err: any) {
        throw new Error("About last banner data doesn`t updated successfully", err)
    }
}



export const aboutLastBannerSerivce = {
    postAboutLastBanner,
    getAboutLastBanner,
    updateAboutLastBanner,
    deleteAboutLastBanner
}