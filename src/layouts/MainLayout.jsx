import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Stepper from "../components/Stepper.jsx";

const MainLayout = () => {
    const location = useLocation();
    const path = location.pathname;
    const isHome = path === "/";

    const stepMap = {
        "/search": 1,
        "/passengers": 2,
        "/payment": 3,
        "/confirmation": 4,
    };

    const activeStep =
        Object.keys(stepMap).find((p) => path.startsWith(p)) &&
        stepMap[path.startsWith("/search") ? "/search" : path];

    return (
        <div className="min-h-screen w-full flex flex-col bg-white">
            <Header variant={isHome ? "large" : "compact"} />

            {activeStep && (
                <div>
                    <Stepper activeStep={activeStep} />
                </div>
            )}

            <main
                className={
                    isHome
                        ? "flex flex-grow pt-36"
                        : "flex flex-grow pt-24 justify-center"
                }
            >
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
