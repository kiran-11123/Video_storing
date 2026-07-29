import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from 'crypto';
import { s3Client } from "../db_config/s3_config/s3.js";
import metadata from "../db_config/video_metadata.js";
import dotenv from 'dotenv';
dotenv.config();
export const upload_video_service = async (title, fileName, mimeType, size) => {
    try {
        const videoId = crypto.randomUUID();
        const extension = fileName.split(".").pop();
        const key = `videos/${videoId}.${extension}`;
        const command = new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: key,
            ContentType: mimeType
        });
        const uploadURL = await getSignedUrl(s3Client, command, {
            expiresIn: 300,
        });
        const video_data = await metadata.create({
            title: title,
            type: 'video',
            path: key,
            size,
            mimeType,
            status: 'Pending'
        });
        return { uploadURL, key };
    }
    catch (er) {
        throw er;
    }
};
//# sourceMappingURL=video.service.js.map