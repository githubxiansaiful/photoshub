import { ArrowBigDown, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header className="bg-white border-b border-[#f1f1f1] py-2 main-nav">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="max-w-[120px]">
                        <Link to="/"><img src="/photoshub.png" alt="photoshub" /></Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <ul className="flex gap-3 nav-menu-items">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><Link to="/license">License</Link></li>
                            <li className="has-sub-menu">
                                <a href="#" className="flex">More <ChevronDown /></a>
                                <ul className="sub-menu">
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="flex gap-3">
                            <div className="nav-user-profile">
                                <img src="/user.png" />
                            </div>
                            <Link to="/login" className="nav-btn">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Nav;