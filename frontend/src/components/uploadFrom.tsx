
import { useState } from "react";
import axios from "axios";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  async function uploadVideo() {
    if (!file) {
      alert("Select a video");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/video/upload",
        {
          title: title,
          fileName: file.name,
          mimeType: file.type,
          size: file.size,
        }
      );

      const { uploadURL, key } = response.data;


      await axios.put(uploadURL, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      alert("Video uploaded successfully");
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        {/* Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">
              Upload Video
            </h1>

            <p className="text-slate-400 mt-2">
              Upload your video directly to cloud storage.
            </p>
          </div>

          {/* Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Video Title
            </label>

            <input
              type="text"
              placeholder="Enter video title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-slate-800
                border border-slate-700
                text-white
                placeholder-slate-500
                outline-none
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20
              "
            />
          </div>

          {/* File Upload */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Select Video
            </label>

            <label
              className="
                flex
                flex-col
                items-center
                justify-center
                w-full
                h-48
                border-2
                border-dashed
                border-slate-700
                rounded-2xl
                cursor-pointer
                bg-slate-800/50
                hover:bg-slate-800
                hover:border-blue-500
                transition
              "
            >
              <div className="flex flex-col items-center justify-center">
                {/* Upload Icon */}
                <svg
                  className="w-10 h-10 mb-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7 16a4 4 0 01-.88-7.903A5.002 5.002 0 0115.9 6H16a5 5 0 011 9.9M12 12v9m0-9l-3 3m3-3l3 3"
                  />
                </svg>

                {file ? (
                  <>
                    <p className="text-sm font-medium text-white">
                      {file.name}
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-slate-300">
                      <span className="text-blue-400 font-semibold">
                        Click to upload
                      </span>{" "}
                      or select a video
                    </p>

                    <p className="text-xs text-slate-500 mt-2">
                      MP4, WebM, MOV
                    </p>
                  </>
                )}
              </div>

              <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0];

                  if (selectedFile) {
                    setFile(selectedFile);
                  }
                }}
              />
            </label>
          </div>

          {/* Upload Button */}
          <button
            onClick={uploadVideo}
            disabled={loading}
            className="
              w-full
              py-3.5
              rounded-xl
              bg-blue-600
              hover:bg-blue-500
              disabled:bg-slate-700
              disabled:text-slate-400
              text-white
              font-semibold
              transition
              shadow-lg
              shadow-blue-600/20
              disabled:shadow-none
              cursor-pointer
              disabled:cursor-not-allowed
            "
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <span
                  className="
                    w-5
                    h-5
                    border-2
                    border-white/30
                    border-t-white
                    rounded-full
                    animate-spin
                  "
                />

                Uploading...
              </span>
            ) : (
              "Upload Video"
            )}
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-600 mt-5">
          Your video is uploaded securely using a pre-signed URL.
        </p>
      </div>
    </div>
  );
}

