import { useState, useEffect } from "react";

function getSeatInfo(index, coach) {
    if (!coach) return { price: 0, label: "" };
    return { price: coach.top_price, label: "Сидячее" };
}

export default function SittingScheme({ seats = [], coach, resetKey }) {
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

    const firstPart = seats.filter(s => s.index <= 32);
    const secondPart = seats.filter(s => s.index > 32);

    const splitRows = arr => ({
        top: arr.filter(s => s.index % 2 === 0),
        bottom: arr.filter(s => s.index % 2 !== 0),
    });

    const firstRows = splitRows(firstPart);
    const secondRows = splitRows(secondPart);

    const renderRow = arr => (
        <div className="flex flex-row gap-2 justify-center mb-1">
            {arr.map(({ index, available }) => {
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
    );

    return (
        <div>
            {renderRow(firstRows.top)}
            {renderRow(firstRows.bottom)}
            <div className="h-6" />
            {renderRow(secondRows.top)}
            {renderRow(secondRows.bottom)}

            <div className="font-bold mt-2">
                Выбрано мест: {selectedSeats.length} <br />
                Сумма: {selectedSeats.reduce((sum, index) => sum + getSeatInfo(index, coach).price, 0)} ₽
            </div>
        </div>
    );
}
