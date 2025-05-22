import {useState} from "react";
import TicketQuantityItem from "./TicketQuantityItem.jsx";

export default function SeatQuantity() {

    return (
        <div>
            <h2 className="font-bold text-3xl mt-10 ml-5 mb-3">Количество билетов</h2>
            <section className="max-w-[959px] flex flex-row">
               <TicketQuantityItem MAX_SEATS={6} description={(remaining) => `Можно добавить ещё ${remaining} пассажиров`} label='Взрослых&nbsp;&mdash;&nbsp;'/>
                <TicketQuantityItem MAX_SEATS={3} description={(remaining) => `Можно добавить еще ${remaining} детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле 
в среднем на 50-65%`} label='Детских&nbsp;&mdash;&nbsp;'/>
                <TicketQuantityItem MAX_SEATS={2} description={(remaining) => `Можно добавить ещё ${remaining} детских билетов`} label='Детских&nbsp;&mdash;&nbsp;'/>
            </section>

            <hr className="w-full border border-gray-500 border-dashed mt-14" />

            <span className="font-bold text-3xl">Тип вагона</span>
            <div className="flex flex-row justify-around">
                <div>
                    <p className="text-2xl">Сидячий</p>
                </div>
                <div>
                    <p className="text-2xl">Плацкарт</p>
                </div>
                <div>
                    <p className="text-2xl">Купе</p>
                </div>
                <div>
                    <p className="text-2xl">Люкс</p>
                </div>
            </div>
            <div className="w-full flex flex-row justify-between px-8 pb-0 mt-6 [background-color:rgba(255,168,0,0.44)]">
                <span>Вагоны</span>
                <span>Нумерация вагонов начинается с головы поезда</span>
            </div>
            <div className="flex flex-row">
                <div className="w-[190px] h-[161px] flex flex-col items-center justify-center [background-color:rgba(255,168,0,0.44)]">
                    <span className="text-7xl font-bold">07</span>
                    <span className="text-2xl"> вагон</span>
                </div>
                <div className="flex flex-row w-full">
                    <div>
                        <p>Места</p>
                        <p>Верхние</p>
                        <p>Нижние</p>
                    </div>

                    <div>
                        <p>Стоимость</p>
                        <p>Скокато</p>
                        <p>Сколькото</p>
                    </div>
                </div>
            </div>
        </div>
    )
}