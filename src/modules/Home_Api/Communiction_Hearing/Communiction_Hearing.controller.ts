import { NextFunction, Request, Response } from "express";
import { Communiction_HearingService } from "./Communiction_Hearing.service";



// get all data

const getCommuniction_Hearing = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Communiction_HearingService.GetCommuniction_Hearing()

        res.status(200).json({
            success: true,
            data: result
        })
    } catch (err) {
        next(err)
    }
}


const postCommuniction_Hearing = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {Title_Name, Description} = req.body
        const data = await Communiction_HearingService.PostCommuniction_Hearing(Title_Name, Description)

        res.status(200).json({
            success: true,
            data: data,
            message: "Communiction hearing Post Successfully!"
        })
    } catch (err) {
        next(err)
    }
}


const deleteCommunictionHearing = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id as string;
        console.log("this is news id", id)

        const deleteData = await Communiction_HearingService.deleteCommunictionHearing(id);

        res.status(200).json({
            status: true,
            message: "Communication and hearing data delete successfully",
            data: deleteData
        })
    } catch (err) {
        next(err)
    }
}


const updateCommunictionHearing = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const updatedData = req.body;

        const data = await Communiction_HearingService.updateCommunictionHearing(id, updatedData)
        res.status(200).json({
            success: true,
            message: "Donation faq data update successfully",
            data: data
        })

    } catch (err) {
        next(err)
    }
}


export const Communiction_HearingController = {
    getCommuniction_Hearing,
    postCommuniction_Hearing,
    updateCommunictionHearing,
    deleteCommunictionHearing
}