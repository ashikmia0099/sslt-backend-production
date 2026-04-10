import { NextFunction, Request, Response } from "express";
import { Communication_HelthCareService } from "./Communication_HelthCare.service";
import { SingleImageUploadInCloudinery } from "../../../config/SingleImageUploadInCloudinery";


// get all data

const getCommunication_HelthCareController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Communication_HelthCareService.GetCommunication_HelthCareService()

        res.status(200).json({
            success: true,
            data: result
        })
    } catch (err) {
        next(err)
    }
}



export const createCommunication_HelthCare = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { Title_Name, Overview, DescriptionTitle, Description, dynamicDescriptions } = req.body;

        let chooseImageUrl = "";

        if (req.file && req.file.buffer) {
            chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
        }

        const parsedDynamicDescriptions = dynamicDescriptions
            ? JSON.parse(dynamicDescriptions)
            : [];

        const data = await Communication_HelthCareService.PostCommunication_HelthCareService(
            Title_Name, Overview, chooseImageUrl, DescriptionTitle, Description, parsedDynamicDescriptions
        );

        res.status(200).json({
            success: true,
            data,
            message: "Communication health care Post Successfully!"
        });
    } catch (err) {
        next(err);
    }
};

export const updateCommunicationHelthCare = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const { Title_Name, Overview, DescriptionTitle, Description, dynamicDescriptions } = req.body;

        let chooseImageUrl = "";

        if (req.file && req.file.buffer) {
            chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
        }

        const parsedDynamicDescriptions = dynamicDescriptions
            ? JSON.parse(dynamicDescriptions)
            : [];

        const data = await Communication_HelthCareService.updateCommunicationHelthCare(
           id, Title_Name, Overview, chooseImageUrl, DescriptionTitle, Description, parsedDynamicDescriptions
        );

        res.status(200).json({
            success: true,
            data,
            message: "Communication health care Post Successfully!"
        });
    } catch (err) {
        next(err);
    }
};




// const updateCommunicationHelthCare = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const id = req.params.id as string;
//         const { Title_Name, Overview, DescriptionTitle, Description, dynamicDescriptions } = req.body;

//         // check if file exist 

//         let chooseImageUrl = " ";

//         if (req.file && req.file.buffer) {
//             chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer)
//         }
//         const data = await Communication_HelthCareService.updateCommunicationHelthCare(id, Title_Name, Overview, chooseImageUrl, DescriptionTitle, Description, dynamicDescriptions)

//         res.status(200).json({
//             success: true,
//             data: data,
//             message: "Communication health care update Successfully!"
//         })
//     } catch (err) {
//         next(err)
//     }
// }




const deleteCommunicationHelthCare = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id as string;

        const deleteData = await Communication_HelthCareService.deleteCommunicationHelthCare(id);

        res.status(200).json({
            status: true,
            message: "Communication health care data delete successfully",
            data: deleteData
        })
    } catch (err) {
        next(err)
    }
}



export const Communication_HelthCareController = {
    getCommunication_HelthCareController,
    createCommunication_HelthCare,
    updateCommunicationHelthCare,
    deleteCommunicationHelthCare
}