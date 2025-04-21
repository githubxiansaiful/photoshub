import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Main = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div>
            <ScrollToTop />
            <div className="header-area">
                <Nav />
            </div>
            <div className="main-content">
                <Outlet />
            </div>
            {!isHomePage && (
                <div className="footer-area">
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Main;
