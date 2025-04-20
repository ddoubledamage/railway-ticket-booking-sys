import SearchForm from "./SearchForm.jsx";
import Navigation from "./Navigation.jsx";
import Stepper from "./Stepper.jsx";

function Header({variant}) {

    if (variant === "large") {
        return (
        <div
            className="w-screen relative flex flex-col bg-[url('/header-main-background.png')] bg-no-repeat bg-cover scale-x-[-1]">
            {/*проблема с палитрой и цветами в макете, еще там img автобусов каких-то, надо уточнить*/}
            <div className="absolute inset-0 bg-yellow-chromatic opacity-20"></div>
            <div className="flex flex-col w-full scale-x-[-1]">
                <Navigation about="#about" howItWorks="#how-it-works" contact="#contact-us" reviews="#reviews"/>
                <div className="flex flex-row items-center gap-10 justify-center mt-auto">
                    <div>
                        <p className="font-thin text-white text-7xl">Вся жизнь — <br/></p>
                        <p className="font-bold text-white text-7xl">путешествие</p>
                    </div>
                    <div>
                        <SearchForm variant="large"/>
                    </div>
                </div>
            </div>
            <hr className="border-t-8 border-yellow-chromatic my-4 mt-auto mb-0 relative z-10 "/>
        </div>
    );
    }
    return (
        <div className="w-screen relative flex flex-col bg-[url('/header-compact-bg.png')] bg-no-repeat bg-cover">
            <div className="flex flex-col w-full">
                <Navigation about="#about" howItWorks="#how-it-works" contact="#contact-us" reviews="#reviews"/>
            </div>
            <div className="flex flex-row items-center gap-10 justify-center mt-auto">
                <SearchForm/>
            </div>
            <div>
                <Stepper activeStep={1}/>
            </div>
        </div>
    )

}

export default Header;