import Reverse from "./Reverse.jsx";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";

function SearchForm({variant}) {
    const isLarge = variant === "large";
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/search");
    }
    return (
        <div className={`px-6 pt-20 pb-16 flex ${isLarge ? 'flex-col' : 'flex-row gap-9'} bg-gray-shadow/80`}>

            <form className="flex flex-col mb-16 space-y-2">
                <p className="text-amber-50 font-light text-3xl">Направление</p>
                <div className="flex flex-row items-center gap-2">
                <div className="relative w-[20.3rem]">
                <input
                    type="text"
                    placeholder="Откуда"
                />
                    <svg className="w-[1.305rem] h-[1.875rem] absolute top-[15px] right-[15px]">
                        <use xlinkHref="/icons/icons.svg#ping-icon" />
                    </svg>
                </div>

                    <Reverse/>

                    <div className="relative w-[20.3rem]">
                        <input
                            type="text"
                            placeholder="Куда"
                        />
                        <svg className="w-[1.305rem] h-[1.875rem] absolute top-[15px] right-[15px]">
                            <use xlinkHref="/icons/icons.svg#ping-icon"/>
                        </svg>
                    </div>
                </div>
            </form>
            <form className="space-y-2 relative">
                <p className="text-amber-50 text-3xl font-light">Дата</p>
                <div className="flex flex-row gap-10 items-center">
                <input type="date"/>
                <input type="date"/>
                </div>
                {!isLarge && (
                    <Button
                        variant="searchTickets"
                        size="big"
                        type="submit"
                        text={'найти билеты'}
                        className="mt-8 text-2xl ml-auto absolute right-0"
                        onClick={handleClick}
                    />)}
            </form>

            {isLarge && (<Button variant="searchTickets" size="big" type="submit"
                    text={'найти билеты'} className="self-end mt-24 text-2xl"
                    onClick={handleClick}
            />)}

        </div>
    )
}

export default SearchForm;