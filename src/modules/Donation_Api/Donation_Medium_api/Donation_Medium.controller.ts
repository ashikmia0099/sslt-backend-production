import { NextFunction, Request, Response } from "express";
import { SingleImageUploadInCloudinery } from "../../../config/SingleImageUploadInCloudinery";
import { Donation_MediumService } from "./Donation_Medium.service";


// get all data

const getDonationMedium = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Donation_MediumService.getDonationMedium()

        res.status(200).json({
            success: true,
            data: result
        })
    } catch (err) {
        next(err)
    }
}


const postDonationMedium = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { MFS_Bank_Name, shortOverview, FieldOne, FieldTwo } = req.body;


        if (!MFS_Bank_Name || !shortOverview) {
            throw new Error("Required fields missing");
        }

        if (!req.file) {
            throw new Error("Image is required");
        }

        // check if file exist 

        const chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);

        const data = await Donation_MediumService.postDonationMedium(MFS_Bank_Name, chooseImageUrl, shortOverview, FieldOne, FieldTwo)

        res.status(200).json({
            success: true,
            data: data,
            message: "donation Post Successfully!"
        })
    } catch (err) {
        next(err)
    }
}



const deleteDonationMedium = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;

        const deleteData = await Donation_MediumService.deleteDonationMedium(id);

        res.status(200).json({
            status: true,
            message: "Donation medium delete successfully",
            data: deleteData
        })
    } catch (err) {
        next(err)
    }
}


const updateDonationMedium = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const { MFS_Bank_Name, shortOverview, FieldOne, FieldTwo } = req.body;

        // check if file exist 
        let chooseImageUrl = " ";

        if (req.file && req.file.buffer) {
            chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer)
        }
        const data = await Donation_MediumService.updateDonationMedium(id, MFS_Bank_Name, shortOverview, FieldOne, FieldTwo, chooseImageUrl)

        res.status(200).json({
            success: true,
            data: data,
            message: "Donation medium updated successfully!"
        })
    } catch (err) {
        next(err)
    }
}


export const Donation_MediumController = {
    getDonationMedium,
    postDonationMedium,
    updateDonationMedium,
    deleteDonationMedium
}