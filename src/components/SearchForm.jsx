import Reverse from "./Reverse.jsx";
import Button from "./Button.jsx";

function SearchForm() {
    return (
        <div className="px-6 pt-20 pb-16 flex flex-col bg-gray-800/80">

            <form className="flex flex-col mb-16 space-y-2">
                <p className="text-amber-50 text-3xl">Направление</p>
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
            <form className="space-y-2">
                <p className="text-amber-50 text-3xl">Дата</p>
                <div className="flex flex-row gap-10 items-center">
                <input type="date"/>
                <input type="date"/>
                </div>
            </form>

            <Button variant="searchTickets" size="big" type="submit" text={'найти билеты'} className="self-end mt-24 text-2xl"/>

        </div>
    )
}

export default SearchForm;