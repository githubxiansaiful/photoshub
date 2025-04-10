import Nav from "../layout/Nav"
import Footer from "../layout/Footer"
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;