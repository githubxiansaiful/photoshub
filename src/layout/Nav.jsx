import { useEffect, useState } from "react";
import { ChevronDown, GripHorizontal, X } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        const newState = !mobileMenuOpen;
        setMobileMenuOpen(newState);

        if (newState) {
            document.body.classList.add("mobile-menu-active");
        } else {
            document.body.classList.remove("mobile-menu-active");
        }
    };

    // Inside your Nav component
    useEffect(() => {
        return () => {
            document.body.classList.remove("mobile-menu-active");
        };
    }, []);

    return (
        <header className="bg-white border-b border-[#f1f1f1] py-2 main-nav relative">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="max-w-[120px]">
                        <Link to="/"><img src="/photoshub.png" alt="photoshub" /></Link>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Mobile Menu */}
                        <ul className={`nav-menu-items fixed top-[67px] lg:top-[unset] right-0 bg-white z-50 transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} h-screen w-[300px] max-w-full md:static md:h-auto md:w-auto md:flex md:translate-x-0 nav-ul-lists`}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><Link to="/license">License</Link></li>
                            <li className="has-sub-menu">
                                <a href="#" className="flex items-center gap-1">More <ChevronDown /></a>
                                <ul className="sub-menu pl-4">
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </li>
                        </ul>

                        {/* Right Buttons */}
                        <div className="flex gap-3 nav-right-buttons items-center">
                            <div className="nav-user-profile">
                                <img src="/user.png" alt="user" />
                            </div>
                            <Link to="/login" className="nav-btn hidden md:block">Login</Link>
                            <button className="mobile-navigation-btn" onClick={toggleMobileMenu}>
                                <GripHorizontal />
                                <X />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Nav;
