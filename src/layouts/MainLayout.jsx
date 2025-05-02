import {Outlet, useLocation} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
    const location = useLocation();

    const isHome = location.pathname === "/";

    return (
        <div className="min-h-screen w-full flex flex-col bg-white">
            <Header variant={isHome ? "large" : "compact"}/>
            <main className={isHome ? "flex flex-grow pt-36" : "flex flex-grow pt-24 justify-center"}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout;