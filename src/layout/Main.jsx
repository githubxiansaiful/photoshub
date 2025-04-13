import Nav from "../layout/Nav"
import Footer from "../layout/Footer"
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Main = () => {
    return (
        <div>
            <ScrollToTop />
            <div className="header-area">
                <Nav></Nav>
            </div>
            <div className="main-content">
                <Outlet></Outlet>
            </div>
            <div className="footer-area">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;