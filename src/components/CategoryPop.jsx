const CategoryPop = ({ show, onClose }) => {
    return (
        <div className="category-popup-overlay" onClick={onClose}>
            <div
                className={`categor-popup-content ${show ? 'showcat-popup' : ''}`}
                onClick={(e) => e.stopPropagation()} // prevent closing on content click
            >
                <div className="border-b border-[#ddd] px-5 py-2 flex justify-between items-center">
                    <p className="font-bold">Categories</p>
                    <button onClick={onClose} className="border border-[#ddd] hover:bg-[#ddd] duration-[.3s] rounded-[10px] px-4 py-2 cursor-pointer">
                        Close
                    </button>
                </div>
                <ul className="category-items">
                    {Array.from({ length: 17 }).map((_, i) => (
                        <li key={i}>List Item {i + 1}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoryPop;