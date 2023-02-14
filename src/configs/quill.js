import axios from 'axios';
import { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
Quill.register("modules/imageUploader", ImageUploader);

const url = process.env.REACT_APP_API_URL;

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
          const formData = new FormData();
          formData.append("image", file);

          axios.post(`${url}/upload`, formData)
            .then(response => {
              resolve(response.data.url)
            })
            .catch(error => {
              reject("Upload failed");
              console.error("Error:", error);
            })
        });
      }
    }
}

export {
  quillModules
}
