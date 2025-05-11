import Reverse from "./Reverse.jsx";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";
import CityInput from "./CityInput.jsx"
import { useState } from "react";

function SearchForm({variant}) {
    const isLarge = variant === "large";
    const navigate = useNavigate();

    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();

        if(!from || !to || !dateStart) {
            alert("Введите валидную дату");
            return;
        }
        const from_city_id = from._id;
        const to_city_id = to._id;
        const url = new URL("https://students.netoservices.ru/fe-diplom/routes");
        url.searchParams.set("from_city_id", from_city_id);
        url.searchParams.set("to_city_id", to_city_id);
        url.searchParams.set("date_start", dateStart);
        if (dateEnd) {
            url.searchParams.set("date_end", dateEnd);
        }

        try {
            console.log("FROM", from);
            console.log("TO", to);
            console.log("URL запроса:", url.toString());
            const res = await fetch(url);
            const data = await res.json();
            console.log("Ответ от API:", data);


            if (!data.items?.length) {
                alert("Маршруты не найдены");
                return;
            }
            console.log("Навигация с маршрутами:", data.items);

            navigate("/search", {state: {routes: data.items}});
        } catch (err) {
            console.error("Ошибка загрузки маршрутов:", err);
            alert("Ошибка при загрузке маршрутов");
        }
    }

    return (
        <div className={`px-6 pt-20 pb-16 flex ${isLarge ? 'flex-col' : 'flex-row gap-9'} bg-gray-shadow/80`}>

            <form className="flex flex-col mb-16 space-y-2">
                <p className="text-amber-50 font-light text-3xl">Направление</p>
                <div className="flex flex-row items-center gap-2">
                <div className="relative w-[20.3rem]">
                    <CityInput label="Откуда" onSelect={setFrom}/>

                    <svg className="w-[1.305rem] h-[1.875rem] absolute top-[15px] right-[15px]">
                        <use xlinkHref="/icons/icons.svg#ping-icon" />
                    </svg>
                </div>

                    <Reverse/>

                    <div className="relative w-[20.3rem]">
                        <CityInput label="Куда" onSelect={setTo} />
                        <svg className="w-[1.305rem] h-[1.875rem] absolute top-[15px] right-[15px]">
                            <use xlinkHref="/icons/icons.svg#ping-icon"/>
                        </svg>
                    </div>
                </div>
            </form>
            <form className="space-y-2 relative">
                <p className="text-amber-50 text-3xl font-light">Дата</p>
                <div className="flex flex-row gap-10 items-center">
                <input type="date" value={dateStart} onChange={(e) => setDateStart(e.target.value)}/>
                <input type="date" value={dateEnd} onChange={(e) => setDateEnd(e.target.value)}/>
                </div>
                {!isLarge && (
                    <Button
                        variant="searchTickets"
                        size="big"
                        type="submit"
                        text={'найти билеты'}
                        className="mt-8 text-2xl ml-auto absolute right-0"
                        onClick={handleSearch}
                    />)}
            </form>

            {isLarge && (<Button variant="searchTickets" size="big" type="submit"
                    text={'найти билеты'} className="self-end mt-24 text-2xl"
                    onClick={handleSearch}
            />)}

        </div>
    )
}

export default SearchForm;