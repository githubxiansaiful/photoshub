import { useEffect } from "react";
import { useState } from "react";
import MasonryImage from "./MasonryImage";

const Images = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/images.json')
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(err => console.error('Error loading images:', err));
    }, [])
    console.log(images);
    return (
        <div className="my-10 all-images">
            {
                images.map((img, index) => (
                    <div key={index} className="img-box">
                        {/* <img src={img.imgUrl} alt={img.title || `Image ${index + 1}`} /> */}
                        <MasonryImage key={index} src={img.imgUrl} alt={img.title || `Image ${index + 1}`} />
                    </div>
                ))
            }
        </div>
    );
};

export default Images;