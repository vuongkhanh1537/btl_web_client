import { useState } from "react";

function ImgUpload() {
    const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => prevImages.concat(imagePreviews));
    event.target.value = ''; // Clear the input value
  };

  const handleRemoveImage = (index) => {
    const newImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(newImages);
  };
    return (
        <>
        <div className="dropzone dz-clickable">
              <input
                type="file"
                className="form-control"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
            </div>
            <div className="row">
              {selectedImages.map((image, index) => (
                <div key={index} className="col-4 mb-2 position-relative">
                  <img
                    src={image}
                    alt={`Preview ${index + 1}`}
                    className="img-thumbnail"
                  />
                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0"
                    aria-label="Close"
                    onClick={() => handleRemoveImage(index)}
                  ></button>
                </div>
              ))}
            </div>
          
          
          
          </>
    )
}

export default ImgUpload;
