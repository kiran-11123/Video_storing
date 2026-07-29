import mongoose from "mongoose";
declare const metadata: mongoose.Model<{
    title: string;
    path: string;
    size: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title: string;
    path: string;
    size: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
    path: string;
    size: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    path: string;
    size: string;
}, mongoose.Document<unknown, {}, {
    title: string;
    path: string;
    size: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
    path: string;
    size: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    title: string;
    path: string;
    size: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
    path: string;
    size: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default metadata;
//# sourceMappingURL=video_metadata.d.ts.map