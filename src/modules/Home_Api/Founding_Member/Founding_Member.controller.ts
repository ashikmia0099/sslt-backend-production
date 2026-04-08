import { NextFunction, Request, Response } from "express";
import { FoundingMemberService } from "./Founding_Member.service";
import { SingleImageUploadInCloudinery } from "../../../config/SingleImageUploadInCloudinery";

const FoundingMemberControllerPost = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const result = await FoundingMemberService.FoundingMemberServicePost({
            ...req.body,
            ImageBuffer: (req.file as any)?.buffer
        })
        res.status(201).json(result)
    } catch (err) {
        next(err)
    }
}


const FoundingMemberControllerGet = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FoundingMemberService.FoundingMemberServiceGet();
        res.status(200).json(result);
    } catch (err) {
        next(err)
    }
}


const updateFoundingMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const { ChooseFoundingMemberType, Name, Description } = req.body;


        let chooseImageUrl = " ";

        if (req.file && req.file.buffer) {
            chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer)
        }

        const data = await FoundingMemberService.updateFoundingMember(id, ChooseFoundingMemberType, Name, Description, chooseImageUrl)

        res.status(200).json({
            success: true,
            data: data,
            message: "Community Post Successfully!"
        })
    } catch (err) {
        next(err)
    }
}

const deleteFoundingMember = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = req.params.id as string;
        console.log("this is news id", id)

        const deleteData = await FoundingMemberService.deleteFoundingMember(id);

        res.status(200).json({
            status: true,
            message: "Founding member data delete successfully",
            data: deleteData
        })
    } catch (err) {
        next(err)
    }
}

export const FoundingMemberController = {
    FoundingMemberControllerPost,
    FoundingMemberControllerGet,
    updateFoundingMember,
    deleteFoundingMember
}