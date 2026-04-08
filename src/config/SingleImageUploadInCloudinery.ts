
import cloudinary from "./cloudinary";

export const SingleImageUploadInCloudinery = async(buffer : Buffer) : Promise<string> =>{
    return new Promise ((resolve , reject) =>{
        cloudinary.uploader.upload_stream({folder : "image"}, (error, result) =>{
             if (error) reject(error);
        else if (!result) reject(new Error("Cloudinary Upload Failed"));
        else resolve(result.secure_url);
        })
         .end(buffer);
    });
}

