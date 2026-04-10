import { NextFunction, Request, Response } from "express";
import { Donation_Text_and_AmountService } from "./Donation_Text_and_Amount.service";


// get all data

const getDonationTextandAmount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Donation_Text_and_AmountService.getDonationTextandAmount()

        res.status(200).json({
            success: true,
            data: result
        })
    } catch (err) {
        next(err)
    }
}


const postDonationTextandAmount = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { selectedType, Title, Description,NumberOfAmount } = req.body;
        const NumberOfAmountInt = Number(NumberOfAmount);

        // Validate selectedType
        if (!selectedType || !["Text", "Amount"].includes(selectedType)) {
            return res.status(400).json({ success: false, message: "selectedType must be 'Text' or 'Amount'" });
        }

        const data = await Donation_Text_and_AmountService.postDonationTextandAmount(selectedType as "Text" | "Amount", Title, Description,NumberOfAmountInt)

        res.status(200).json({
            success: true,
            data: data,
            message: "donation text and amount post Successfully!"
        })
    } catch (err) {
        next(err)
    }
}


const deleteDonationTextandAmount = async(req : Request, res : Response, next : NextFunction) =>{
    try{
        const id = req.params.id as string;

        const deleteData = await Donation_Text_and_AmountService.deleteDonationTextandAmount(id);

        res.status(200).json({
            status : true,
            message : "Donation medium delete successfully",
            data : deleteData
        })
    }catch(err){
        next(err)
    }
}


// const updateDonationTextandAmount = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const id = req.params.id as string;
//         const updatedData = req.body;

//         const data = await Donation_Text_and_AmountService.updateDonationTextandAmount(id, updatedData)
//         res.status(200).json({
//             success : true,
//             message : "Donation text and amount data update successfully",
//             data : data 
//         })

//     } catch (err ) {
//         next(err)
//     }
// }


const updateDonationTextandAmount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const updatedData = req.body;

        const data = await Donation_Text_and_AmountService.updateDonationTextandAmount(id, updatedData);

        res.status(200).json({
            success: true,
            message: "Donation updated successfully",
            data
        });

    } catch (err) {
        next(err);
    }
};


export const Donation_Text_and_AmountController = {
    getDonationTextandAmount,
    postDonationTextandAmount,
    deleteDonationTextandAmount,
    updateDonationTextandAmount
}