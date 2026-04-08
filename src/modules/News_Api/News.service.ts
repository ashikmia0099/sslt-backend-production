import { prisma } from "../../lib/prisma";


const getNews = async () => {
    try {
        const result = await prisma.newsAndUpdate.findMany();
        return result
    } catch (err) {
        throw err
    }
}



const postNews = async (
    newsTitle: string,
    image: string,
    description: string,
) => {
    try {

        const result = await prisma.newsAndUpdate.create({
            data: {
                newsTitle,
                image,
                description,
            }
        })
        return result
    } catch (err) {
        throw err
    }
}



const updateNews = async (id: string, updateData: any) => {
    try {
        const result = await prisma.newsAndUpdate.update({
            where: { id },
            data: updateData  
        });

        return result;

    } catch (err: any) {
        console.log(err);
        throw new Error("News update failed");
    }
};


const deleteNews = async (id: string) => {

    try {
        const findNewsId = await prisma.newsAndUpdate.findUnique({
            where: { id: id }
        })

        if (!findNewsId) {
            throw new Error("News not found");
        }

        const deletenewsData = await prisma.newsAndUpdate.delete({
            where: { id }
        })

        return deletenewsData;

    } catch (err) {
        throw new Error("News Data not delete successfully")
    }
}

export const NewsService = {
    getNews,
    postNews,
    updateNews,
    deleteNews,
}