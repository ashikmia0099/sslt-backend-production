import { NextFunction, Request, Response } from "express";
import { DonationFaqService } from "./Donation_Faq.service";



// get all data

const getDonationFaq = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await DonationFaqService.getDonationFaq()

        res.status(200).json({
            success: true,
            data: result
        })
    } catch (err) {
        next(err)
    }
}


const postDonationFaq = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { Title_Name, Description } = req.body;
        const data = await DonationFaqService.postDonationFaq( Title_Name, Description)

        res.status(200).json({
            success: true,
            data: data,
            message: "Donation Faq Post Successfully!"
        })
    } catch (err) {
        next(err)
    }
}


const deleteDonationFaq = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        console.log("this is news id", id)

        const deleteData = await DonationFaqService.deleteDonationFaq(id);

        res.status(200).json({
            status: true,
            message: "Donation FAQ delete successfully",
            data: deleteData
        })
    } catch (err) {
        next(err)
    }
}



const updateDonationFaq = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const updatedData = req.body;

        const data = await DonationFaqService.updateDonationFaq(id, updatedData)
        res.status(200).json({
            success: true,
            message: "Donation faq data update successfully",
            data: data
        })

    } catch (err) {
        next(err)
    }
}


export const DonationFaqController = {
    getDonationFaq,
    postDonationFaq,
    deleteDonationFaq,
    updateDonationFaq
}