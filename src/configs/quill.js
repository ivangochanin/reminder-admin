import axios from 'axios';
import { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
Quill.register("modules/imageUploader", ImageUploader);

const url = process.env.REACT_APP_API_URL;
const isDevelopment = process.env.REACT_APP_ENV === 'development'

const cloudinaryApiBaseUrl = process.env.REACT_APP_CLOUDINARY_API_BASE_URL
const cloudinaryCloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
const cloudinaryPresetName = process.env.REACT_APP_CLOUDINARY_PRESET_NAME

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "link"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["clean", "code-block", "image"]
  ],

  imageUploader: {
    upload: file => {
        return new Promise((resolve, reject) => {
          let axiosInstance

          const formData = new FormData();
          formData.append(isDevelopment ? 'image' : 'file', file);

          if (isDevelopment) {
            axiosInstance = axios.post(`${url}/upload`, formData)
          } else {
            formData.append('upload_preset', cloudinaryPresetName);
            axiosInstance = axios.post(`${cloudinaryApiBaseUrl}/${cloudinaryCloudName}/upload`, formData)
          }

          axiosInstance
            .then(response => {
              resolve(response.data.url)
            })
            .catch(error => {
              reject('Upload failed');
              alert('Upload failed')
              console.error("Error:", error);
            })
        });
      }
    }
}

export {
  quillModules
}
