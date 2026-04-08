import { NextFunction, Request, Response } from "express";
import { NewsService } from "./News.service";
import { SingleImageUploadInCloudinery } from "../../config/SingleImageUploadInCloudinery";



// get all data

const getNews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await NewsService.getNews()

        res.status(200).json({
            success: true,
            data: result
        })
    } catch (err) {
        next(err)
    }
}


const postNews = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { newsTitle, description } = req.body;

        // check if file exist 
        let chooseImageUrl = " ";

        if (req.file && req.file.buffer) {
            chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer)
        }

        const data = await NewsService.postNews(newsTitle, chooseImageUrl, description)

        res.status(200).json({
            success: true,
            data: data,
            message: "News Post Successfully!"
        })
    } catch (err) {
        next(err)
    }
}



const updateNews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const { newsTitle, description } = req.body;

        let updateData: any = {
            newsTitle,
            description
        };

        // ✅ only update image if new file আসে
        if (req.file && req.file.buffer) {
            const imageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
            updateData.image = imageUrl;
        }

        const data = await NewsService.updateNews(id, updateData);

        res.status(200).json({
            success: true,
            data: data,
            message: "News update Successfully!"
        });

    } catch (err) {
        next(err);
    }
};

const deleteNews = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id as string;
        console.log("this is news id", id)

        const deleteData = await NewsService.deleteNews(id);

        res.status(200).json({
            status: true,
            message: "News delete successfully",
            data: deleteData
        })
    } catch (err) {
        next(err)
    }
}


export const NewsController = {
    getNews,
    postNews,
    updateNews,
    deleteNews
}