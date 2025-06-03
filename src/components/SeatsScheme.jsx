import { useState, useEffect } from "react";

// Универсальная функция для цены и типа места
function getSeatInfo(index, coach) {
    if (!coach) return { price: 0, label: "" };
    const { class_type, top_price, bottom_price, side_price, price } = coach;

    if (class_type === "third") { // Плацкарт
        if (index >= 33) {
            return { price: side_price || bottom_price, label: "Боковое" };
        }
        return index % 2 === 0
            ? { price: top_price, label: "Верхнее" }
            : { price: bottom_price, label: "Нижнее" };
    }
    if (class_type === "second") { // Купе
        return index % 2 === 0
            ? { price: top_price, label: "Верхнее" }
            : { price: bottom_price, label: "Нижнее" };
    }
    if (class_type === "fourth") { // Сидячий
        return { price, label: "Сидячее" };
    }
    if (class_type === "first") { // Люкс
        return { price, label: "Люкс" };
    }
    return { price, label: "" };
}

export default function SeatsScheme({ seats = [], coach, resetKey }) {
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
        (sum, index) => sum + getSeatInfo(index, coach).price,
        0
    );

    // Для сетки: определяем количество колонок по типу
    const gridCols = coach?.class_type === "second" ? 4 // купе: 4 в ряду
        : coach?.class_type === "third" ? 6 // плацкарт: 6
            : coach?.class_type === "first" ? 2 // люкс: 2
                : 6; // сидячий: 6

    return (
        <div>
            <div className={`grid grid-cols-${gridCols} gap-2 mb-3`}>
                {seats.map(({ index, available }) => {
                    const { price, label } = getSeatInfo(index, coach);
                    const isSelected = selectedSeats.includes(index);
                    const isSide = coach?.class_type === "third" && index >= 33;
                    return (
                        <div
                            key={index}
                            className={`w-11 h-11 flex flex-col items-center justify-center rounded border text-xs cursor-pointer relative
                                ${!available ? 'bg-gray-300 cursor-not-allowed text-gray-500' : ''}
                                ${isSelected ? 'border-orange-500 border-4 z-10' : 'border-gray-400 bg-white'}
                                ${isSide ? 'bg-blue-50' : ''}
                                hover:shadow-lg transition`}
                            onClick={() => handleClick(index, available)}
                            title={`${label} | ${price} ₽`}
                        >
                            <span className="font-bold">{index}</span>
                            <span className="text-[9px]">{label}</span>
                            <span className="text-[9px]">{price}₽</span>
                        </div>
                    )
                })}
            </div>
            <div className="font-bold mt-2">
                Выбрано мест: {selectedSeats.length} <br />
                Сумма: {total} ₽
            </div>
            <div className="flex gap-5 text-xs mt-2">
                <span className="w-5 h-5 rounded border border-gray-400 bg-white inline-block" /> — свободно
                <span className="w-5 h-5 rounded border-4 border-orange-500 inline-block" /> — выбрано
                <span className="w-5 h-5 rounded bg-gray-300 border border-gray-400 inline-block" /> — занято
                <span className="w-5 h-5 rounded border border-gray-400 bg-blue-50 inline-block" /> — боковое
            </div>
        </div>
    );
}
