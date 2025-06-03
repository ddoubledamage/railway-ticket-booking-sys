import { useState, useEffect } from "react";

function getSeatInfo(index, coach) {
    if (!coach) return { price: 0, label: "" };
    const { class_type, top_price, bottom_price, price } = coach;
    if (class_type === "second") { // купе
        return index % 2 === 0
            ? { price: top_price, label: "Верхнее" }
            : { price: bottom_price, label: "Нижнее" };
    }
    return { price, label: "" };
}

export default function CoupeScheme({ seats = [], coach, resetKey }) {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const MAX_SEATS = 6;

    useEffect(() => {
        setSelectedSeats([]);
    }, [resetKey]);

    const handleClick = (index, available) => {
        if (!available) return;
        if (selectedSeats.includes(index)) {
            setSelectedSeats(prev => prev.filter(num => num !== index));
        } else {
            if (selectedSeats.length >= MAX_SEATS) return;
            setSelectedSeats(prev => [...prev, index]);
        }
    };

    const total = selectedSeats.reduce(
        (sum, index) => sum + getSeatInfo(index, coach).price, 0
    );

    // Группируем по купе: каждый блок по 4 места
    const coupeGroups = [];
    for (let i = 0; i < seats.length; i += 4) {
        coupeGroups.push(seats.slice(i, i + 4));
    }

    return (
        <div>
            <div className="flex flex-col gap-4 mb-3">
                {coupeGroups.map((group, idx) => (
                    <div key={idx} className="flex flex-col border rounded-lg p-1 bg-slate-50 shadow-sm min-w-[120px]">
                        {/* Верхний ряд: чётные индексы */}
                        <div className="flex flex-row gap-2 mb-1 justify-center">
                            {group.filter(s => s.index % 2 === 0).map(({ index, available }) => {
                                const { price, label } = getSeatInfo(index, coach);
                                const isSelected = selectedSeats.includes(index);
                                return (
                                    <div
                                        key={index}
                                        className={`w-10 h-10 flex flex-col items-center justify-center rounded border text-xs cursor-pointer
                                            ${!available ? 'bg-gray-300 cursor-not-allowed text-gray-500' : ''}
                                            ${isSelected ? 'border-orange-500 border-4 z-10' : 'border-gray-400 bg-white'}
                                            hover:shadow-lg transition`}
                                        onClick={() => handleClick(index, available)}
                                        title={`${label} | ${price} ₽`}
                                    >
                                        <span className="font-bold">{index}</span>
                                        <span className="text-[9px]">{label}</span>
                                    </div>
                                );
                            })}
                        </div>
                        {/* Нижний ряд: нечётные индексы */}
                        <div className="flex flex-row gap-2 justify-center">
                            {group.filter(s => s.index % 2 !== 0).map(({ index, available }) => {
                                const { price, label } = getSeatInfo(index, coach);
                                const isSelected = selectedSeats.includes(index);
                                return (
                                    <div
                                        key={index}
                                        className={`w-10 h-10 flex flex-col items-center justify-center rounded border text-xs cursor-pointer
                                            ${!available ? 'bg-gray-300 cursor-not-allowed text-gray-500' : ''}
                                            ${isSelected ? 'border-orange-500 border-4 z-10' : 'border-gray-400 bg-white'}
                                            hover:shadow-lg transition`}
                                        onClick={() => handleClick(index, available)}
                                        title={`${label} | ${price} ₽`}
                                    >
                                        <span className="font-bold">{index}</span>
                                        <span className="text-[9px]">{label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            <div className="font-bold mt-2">
                Выбрано мест: {selectedSeats.length} <br />
                Сумма: {total} ₽
            </div>
        </div>
    );
}
