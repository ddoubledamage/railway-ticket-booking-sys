import AsideOptions from "./AsideOptions.jsx";
import {Toggle} from "./Toggle.jsx";
import {useState} from "react";
import {PriceRangeSlider} from "./PriceRangeSlider.jsx";
import Icon from "./Icon.jsx";


function AsideMenu() {
    const [coupe, setCoupe] = useState(true);
    const [thirdClass, setThirdClass] = useState(false);
    const [seating, setSeating] = useState(false);
    const [luxe, setLuxe] = useState(false);
    const [wiFi, setWiFi] = useState(true);
    const [express, setExpress] = useState(false);
    const [priceRange, setPriceRange] = useState([1920, 4500]);
    return (
        <div className="flex flex-col relative bg-gray-stepper max-w-96 px-9">
            <div className="flex flex-col gap-6 py-10">
                <form action="">
                    <span className="text-white font-normal text-3xl">Дата поездки</span>
                    <input type="date" className="w-80 h-16 bg-white px-4"/>
                </form>

                <form action="">
                    <span className="text-white font-normal text-3xl">Дата возвращения</span>
                    <input type="date" className="w-80 h-16 bg-white px-4"/>
                </form>
            </div>

            <hr className="-mx-9 border-t border-gray-light"/>

            <div className="flex flex-col items-center">
                <AsideOptions iconName="coupe-icon" label="Купе">
                    <Toggle
                    checked={coupe}
                    onChange={setCoupe}
                    ariaLabel="Включить или отключить тип: купе"
                    />
                </AsideOptions>

                <AsideOptions iconName="third‑class-sleeper-carriage-icon" label="Плацкарт">
                    <Toggle
                        checked={thirdClass}
                        onChange={setThirdClass}
                        ariaLabel="Включить или отключить тип: плацкарт"
                    />
                </AsideOptions>

                <AsideOptions iconName="seating-car" label="Сидячий">
                    <Toggle
                        checked={seating}
                        onChange={setSeating}
                        ariaLabel="Включить или отключить тип: сидячий"
                    />
                </AsideOptions>

                <AsideOptions iconName="luxury-icon" label="Люкс">
                    <Toggle
                        checked={luxe}
                        onChange={setLuxe}
                        ariaLabel="Включить или отключить тип: люкс"
                    />
                </AsideOptions>

                <AsideOptions iconName="wifi-icon" label="Wi-Fi">
                    <Toggle
                        checked={wiFi}
                        onChange={setWiFi}
                        ariaLabel="Включить или отключить тип: Wi-Fi"
                    />
                </AsideOptions>

                <AsideOptions iconName="express-icon" label="Экспресс">
                    <Toggle
                        checked={express}
                        onChange={setExpress}
                        ariaLabel="Включить или отключить тип: экспресс"
                    />
                </AsideOptions>
            </div>

            <hr className="-mx-9 border-t border-gray-light"/>

            <div>
                <p className="text-3xl text-white">Стоимость</p>
                <PriceRangeSlider
                    min={1920}
                    max={7000}
                    step={10}
                    value={priceRange}
                    onChange={setPriceRange}
                />
            </div>

            <hr className="-mx-9 border-t border-gray-light"/>

            <div className="flex flex-row justify-between items-center py-7">
                <div className="flex flex-row items-center gap-3">
                    <Icon name="arrow-right-but-icon" className="w-8 h-7"/>
                    <p className="text-3xl text-white font-bold">Туда</p>
                </div>
                <Icon name="plus-icon" className="w-5 h-5 cursor-pointer"/>
            </div>

            <hr className="-mx-9 border-t border-gray-light"/>

            <div className="flex flex-row justify-between items-center py-7">
                <div className="flex flex-row items-center gap-3">
                    <Icon name="arrow-right-but-icon" className="w-8 h-7"/>
                    <p className="text-3xl text-white font-bold">Обратно</p>
                </div>
                <Icon name="plus-icon" className="w-5 h-5 cursor-pointer"/>
            </div>

        </div>
    )
}

export default AsideMenu;