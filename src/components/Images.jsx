import { useEffect, useState } from "react";
import MasonryImage from "./MasonryImage";

const Images = () => {
    const [images, setImages] = useState([]);
    const [visibleCount, setVisibleCount] = useState(12);
    const [loadingMore, setLoadingMore] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    useEffect(() => {
        fetch("https://photoshub-server.vercel.app/images")
            .then(res => res.json())
            .then(data => {
                setImages(data);
                setIsLoading(false); // Set loading state to false when data is fetched
            })
            .catch(err => {
                console.error("Error loading images:", err);
                setIsLoading(false); // Handle error and stop loading
            });
    }, []);

    // Infinite scroll listener
    useEffect(() => {
        const handleScroll = () => {
            const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
            if (scrollBottom && !loadingMore && visibleCount < images.length) {
                setLoadingMore(true);
                setTimeout(() => {
                    setVisibleCount(prev => prev + 15);
                    setLoadingMore(false);
                }, 1500); // simulate loading delay
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [images, visibleCount, loadingMore]);

    return (
        <>
            {isLoading ? (  // Conditionally render the loading spinner based on loading state
                <div className="h-[80vh] flex items-center justify-center"><span className="loading loading-spinner loading-xl"></span></div>
            ) : (
                <div className="my-10 all-images">
                    {images.slice(0, visibleCount).map((img, index) => (
                        <div key={index} className="img-box">
                            <MasonryImage src={img.imgUrl} alt={img.title || `Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            )}
            <div>
                {loadingMore && (
                    <div className="text-center my-5">
                        <p className="text-center">Loading</p>
                        <span className="loading loading-ring loading-xl"></span>
                    </div>
                )}
            </div>
        </>
    );
};

export default Images;
