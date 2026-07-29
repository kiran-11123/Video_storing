import mongoose, { Document } from "mongoose";
export interface IVideo extends Document {
    title: string;
    type: 'video' | 'image' | 'audio';
    path: string;
    size: number;
    mimeType: string;
    status: "Pending" | "Uploaded";
}
declare const metadata: mongoose.Model<IVideo, {}, {}, {}, Document<unknown, {}, IVideo, {}, mongoose.DefaultSchemaOptions> & IVideo & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IVideo>;
export default metadata;
//# sourceMappingURL=video_metadata.d.ts.map