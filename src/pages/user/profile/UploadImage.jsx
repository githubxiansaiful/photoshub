import { X } from "lucide-react";
import { useState } from "react";

const UploadImage = () => {
    const [imageInputs, setImageInputs] = useState([{ id: Date.now(), url: "", valid: false }]);
    const [popupImage, setPopupImage] = useState(null); // for preview popup

    const handleImageUrlChange = (index, value) => {
        const newInputs = [...imageInputs];
        newInputs[index].url = value;

        const img = new Image();
        img.onload = () => {
            newInputs[index].valid = true;
            setImageInputs([...newInputs]);
        };
        img.onerror = () => {
            newInputs[index].valid = false;
            setImageInputs([...newInputs]);
        };
        img.src = value;

        setImageInputs(newInputs);
    };

    const handleAddNewImage = () => {
        if (imageInputs.length < 5) {
            setImageInputs([...imageInputs, { id: Date.now(), url: "", valid: false }]);
        }
    };

    const openPopup = (url) => {
        if (url) setPopupImage(url);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="my-10">
            <div className="container">
                <div className="flex justify-center">
                    <img src="/cam-icons.jpg" alt="" />
                </div>
                <div className="mt-5 mb-5">
                    <h1 className="text-center font-bold text-2xl lg:text-3xl">Upload Image</h1>
                </div>

                <div className="img-upload-form-container">
                    <form className="image-upload-form space-y-5">
                        {imageInputs.map((input, index) => (
                            <div className="image-url-preview" key={input.id}>
                                <div
                                    className="preview-image cursor-pointer"
                                    onClick={() => openPopup(input.valid ? input.url : null)}
                                >
                                    <img
                                        src={input.valid ? input.url : "/landscape-placeholder.svg"}
                                        alt="Preview"
                                    />
                                </div>
                                <input
                                    type="url"
                                    placeholder="Type or Paste valid image URL"
                                    value={input.url}
                                    onChange={(e) => handleImageUrlChange(index, e.target.value)}
                                    className="w-full border p-2"
                                />
                            </div>
                        ))}

                        {imageInputs.length < 5 && (
                            <div className="add-new-image cursor-pointer text-blue-500" onClick={handleAddNewImage}>
                                <p>Add New Image</p>
                            </div>
                        )}

                        <div className="upload-image-btn">
                            <button type="submit">Upload Image</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Modal Preview */}
            {popupImage && (
                <div
                    className="fixed inset-0 bg-[#000000c9] bg-opacity-70 flex items-center justify-center z-50"
                    onClick={closePopup}
                >
                    <div className="relative bg-white p-4 rounded shadow-lg max-w-xl" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-7 h-7 flex items-center justify-center"
                            onClick={closePopup}
                        >
                            <X />
                        </button>
                        <img src={popupImage} alt="Full Preview" className="max-w-full max-h-[80vh] rounded" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadImage;
