import { Heart } from "lucide-react";

const OpenImgPopup = ({ image, onClose }) => {
    if (!image) return null;
    console.log(image);

    return (
        <div className="image-popup-overlay">
            <div className="image-popup-container">
                <div className="img-popup-nav mb-7">
                    <div className="flex justify-between">
                        <div className="flex gap-3 ">
                            <div className="w-[50px] h-[50px]">
                                <img src={image.user.photoURL} className=" rounded-full" />
                            </div>
                            <div className="hidden md:block lg:block">
                                <h3 className="text-xl font-bold">{image.user.displayName}</h3>
                                <p className="text-[#7f7f7f] font-semibold -mt-[5px]">Donate Uploader</p>
                            </div>
                        </div>
                        <div className="img-popup-nav-buttons">
                            <button className="give-like-image"><Heart /> 150</button>
                            <button className="download-image">Free Download</button>
                        </div>
                    </div>
                </div>
                <button className="absolute top-2 right-2 text-black" onClick={onClose}>X</button>
                <div className="popup-image-value">
                    <img src={image.imgUrl}/>
                </div>
            </div>
        </div>
    );
};

export default OpenImgPopup;