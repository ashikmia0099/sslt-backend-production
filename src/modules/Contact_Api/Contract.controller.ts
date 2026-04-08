import { NextFunction, Request, Response } from "express";
import { ContactService } from "./Contract.service";
import { SingleImageUploadInCloudinery } from "../../config/SingleImageUploadInCloudinery";


// get all data

const getContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ContactService.getContact()

        res.status(200).json({
            success: true,
            data: result
        })
    } catch (err) {
        next(err)
    }
}

const postContact = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { postedType, FieldOne, FieldTwo } = req.body;

        const data = await ContactService.postContact(postedType, FieldOne, FieldTwo)

        res.status(200).json({
            success: true,
            data: data,
            message: "contact post Successfully!"
        })
    } catch (err) {
        next(err)
    }
}

const deleteContact = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id as string;
        console.log("this is news id", id)

        const deleteData = await ContactService.deleteContact(id);

        res.status(200).json({
            status: true,
            message: "Contact data delete successfully",
            data: deleteData
        })
    } catch (err) {
        next(err)
    }
}

const updateContact = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const { postedType, FieldOne, FieldTwo } = req.body;

        // check if file exist 
        let chooseImageUrl = " ";

        if (req.file && req.file.buffer) {
            chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer)
        }

        const data = await ContactService.updateContact(id, postedType, FieldOne, FieldTwo)

        res.status(200).json({
            success: true,
            data: data,
            message: "Contact data update successfully",
        })
    } catch (err) {
        next(err)
    }

}


export const ContactController = {
    getContact,
    postContact,
    updateContact,
    deleteContact
}