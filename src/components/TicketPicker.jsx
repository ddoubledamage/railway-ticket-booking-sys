import { useState } from "react";
import TicketQuantityItem from "./TicketQuantityItem.jsx";
import SeatsScheme from "./SeatsScheme.jsx";
import SittingScheme from "./SittingScheme.jsx";
import CoupeScheme from "./CoupeScheme.jsx";
import PlatzkartScheme from "./PlatzkartScheme.jsx"; // подключаем схему сидячего

const coachTypeLabels = [
    { key: 'fourth', label: 'Сидячий' },
    { key: 'third', label: 'Плацкарт' },
    { key: 'second', label: 'Купе' },
    { key: 'first', label: 'Люкс' },
];

export default function TicketPicker({ coaches = [] }) {
    const [selectedCoachType, setSelectedCoachType] = useState(null);
    const [selectedCoachId, setSelectedCoachId] = useState(null);

    const filteredCoaches = selectedCoachType
        ? coaches.filter(c => c.coach.class_type === selectedCoachType)
        : [];

    const selectedCoachObj = filteredCoaches.find(c => c.coach._id === selectedCoachId);

    return (
        <div>
            <h2 className="font-bold text-3xl mt-10 ml-5 mb-3">Количество билетов</h2>
            <section className="max-w-[959px] flex flex-row">
                <TicketQuantityItem MAX_SEATS={6} description={(remaining) => `Можно добавить ещё ${remaining} пассажиров`} label='Взрослых&nbsp;&mdash;&nbsp;'/>
                <TicketQuantityItem MAX_SEATS={3} description={(remaining) => `Можно добавить еще ${remaining} детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%`} label='Детских&nbsp;&mdash;&nbsp;'/>
                <TicketQuantityItem MAX_SEATS={2} description={(remaining) => `Можно добавить ещё ${remaining} детских билетов`} label='Детских&nbsp;&mdash;&nbsp;'/>
            </section>

            <hr className="w-full border border-gray-500 border-dashed mt-14" />

            <span className="font-bold text-3xl">Тип вагона</span>
            <div className="flex flex-row justify-around my-4">
                {coachTypeLabels.map(({ key, label }) => (
                    <button
                        key={key}
                        className={`text-2xl px-6 py-2 rounded transition 
                            ${selectedCoachType === key ? 'bg-orange-400 text-white font-bold shadow' : 'bg-white border border-orange-200'}
                        `}
                        onClick={() => {
                            setSelectedCoachType(key);
                            setSelectedCoachId(null);
                        }}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="w-full flex flex-row justify-between px-8 pb-0 mt-6 [background-color:rgba(255,168,0,0.44)]">
                <span>Вагоны</span>
                <span>Нумерация вагонов начинается с головы поезда</span>
            </div>

            <div className="flex flex-row gap-5 mt-4">
                {filteredCoaches.length === 0 && selectedCoachType && (
                    <p className="text-xl text-gray-500">Нет вагонов выбранного типа</p>
                )}
                {filteredCoaches.map((coachWrap) => (
                    <div
                        key={coachWrap.coach._id}
                        className={`w-[140px] h-[110px] flex flex-col items-center justify-center cursor-pointer 
                            rounded border-2 transition 
                            ${selectedCoachId === coachWrap.coach._id ? 'border-orange-500 bg-orange-100' : 'border-gray-300 bg-white'}
                        `}
                        onClick={() => setSelectedCoachId(coachWrap.coach._id)}
                    >
                        <span className="text-4xl font-bold">{coachWrap.coach.name}</span>
                        <span className="text-base">{coachWrap.coach.class_type}</span>
                        <span className="text-lg font-semibold mt-2">{coachWrap.coach.top_price || coachWrap.coach.bottom_price || coachWrap.coach.price} ₽</span>
                        <span className="text-xs mt-1">Свободно: {coachWrap.coach.available_seats}</span>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                {selectedCoachId && selectedCoachObj && (
                    <div>
                        <p className="text-lg font-bold mb-3">Места в выбранном вагоне</p>

                        {selectedCoachObj.coach.class_type === "fourth" ? (
                            <SittingScheme
                                seats={selectedCoachObj.seats}
                                coach={selectedCoachObj.coach}
                                resetKey={selectedCoachId}
                            />
                        ) : selectedCoachObj.coach.class_type === "second" ? (
                            <CoupeScheme
                                seats={selectedCoachObj.seats}
                                coach={selectedCoachObj.coach}
                                resetKey={selectedCoachId}
                            />
                        ): selectedCoachObj.coach.class_type === "third" ? (
                                    <PlatzkartScheme
                                        seats={selectedCoachObj.seats}
                                        coach={selectedCoachObj.coach}
                                        resetKey={selectedCoachId}
                                    />
                                ) :

                            <SeatsScheme
                            seats={selectedCoachObj.seats}
                            coach={selectedCoachObj.coach}
                            resetKey={selectedCoachId}
                        />}
                    </div>
                )}
            </div>
        </div>
    );
}
