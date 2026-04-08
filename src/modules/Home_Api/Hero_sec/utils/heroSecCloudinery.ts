
import { UploadApiResponse } from 'cloudinary';
import cloudinary from '../../../../config/cloudinary';




export const SecondImageUploadInCloudinery = async(buffer : Buffer) : Promise<string> =>{
    return new Promise ((resolve , reject) =>{
        cloudinary.uploader.upload_stream({folder : "secondHero"}, (error, result) =>{
             if (error) reject(error);
        else if (!result) reject(new Error("Cloudinary Upload Failed"));
        else resolve(result.secure_url);
        })
         .end(buffer);
    });
}

