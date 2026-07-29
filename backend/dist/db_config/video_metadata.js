import mongoose, { Schema, Document } from "mongoose";
const metadata_schema = new Schema({
    title: { type: String, required: true },
    type: {
        type: String,
        enum: ['video', 'audio', 'image'],
        required: true
    },
    path: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    mimeType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Uploaded'],
        default: 'Pending'
    },
}, {
    timestamps: true
});
const metadata = mongoose.model('metadata', metadata_schema);
export default metadata;
//# sourceMappingURL=video_metadata.js.map