import { prisma } from "../../../lib/prisma";


export const hero_post_service = async (data: {
    postType: "Text" | "Image";
    title?: string | null;
    shortOverview?: string | null;
    image: string;
}) => {
    const result = await prisma.hero.create({ data });
    return result;
};

export const hero_get_service = async () => {
    const result = await prisma.hero.findMany()

    return result;
};



const updateHero = async (
    id: string,
    postType: "Text" | "Image",
    title: string,
    shortOverview: string,
    image: string,
) => {

    try {
        const result = await prisma.hero.update({
            where: { id: id },
            data: {
                postType,
                title,
                shortOverview,
                image
            }
        })
        return result

    } catch (err) {
        throw err
    }
}


const deleteHero = async (id: string) => {

    try {
        const existingId = await prisma.hero.findUnique({
            where: { id: id }
        })

        if (!existingId) {
            throw new Error("Hero not found");
        }

        const deleteData = await prisma.hero.delete({
            where: { id }
        })

        return deleteData;

    } catch (err) {
        throw new Error("Hero doesn`t delete successfully")
    }
}



export const heroSerivce = {
    hero_get_service,
    hero_post_service,
    updateHero,
    deleteHero


}