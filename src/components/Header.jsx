import SearchForm from "./SearchForm.jsx";
import Navigation from "./Navigation.jsx";

function Header() {
    return (
        <div className="w-screen flex flex-col bg-[url('/header-main-background.png')] bg-no-repeat bg-cover">
            <div className="flex flex-col w-full">
                <Navigation/>
                <div className="flex flex-row items-center gap-10 justify-center mt-auto">
                    <div>
                        <p className="font-thin text-white text-7xl">Вся жизнь — <br/></p>
                        <p className="font-bold text-white text-7xl">путешествие</p>
                    </div>
                    <div>
                        <SearchForm/>
                    </div>
                </div>
            </div>
            <hr className="border-t-8 border-yellow-chromatic my-4 mt-auto mb-0 "/>
        </div>
    );
}

export default Header;