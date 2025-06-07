import { useEffect, useState } from "react";

export default function PlatzkartScheme({ seats = [], coach, resetKey }) {
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

    const mainSeats = seats.filter(s => s.index <= 36);
    const mainGroups = [];
    for (let i = 0; i < mainSeats.length; i += 4) {
        mainGroups.push(mainSeats.slice(i, i + 4));
    }

    const sideSeats = seats.filter(s => s.index > 36);

    const splitRows = arr => ({
        top: arr.filter(s => s.index % 2 === 0),
        bottom: arr.filter(s => s.index % 2 !== 0),
    });

    return (
        <div>
            <div className="flex flex-row gap-4 justify-center mb-8">
                {mainGroups.map((group, idx) => {
                    const { top, bottom } = splitRows(group);
                    return (
                        <div key={idx} className="flex flex-col gap-1 items-center">
                            <div className="flex flex-row gap-2">
                                {top.map(({ index, available }) => {
                                    const price = coach.top_price;
                                    const isSelected = selectedSeats.includes(index);
                                    return (
                                        <div
                                            key={index}
                                            className={`w-10 h-10 flex flex-col items-center justify-center rounded border text-xs cursor-pointer
                                                ${!available ? 'bg-gray-300 cursor-not-allowed text-gray-500' : ''}
                                                ${isSelected ? 'border-orange-500 border-4 z-10' : 'border-gray-400 bg-white'}
                                                hover:shadow-lg transition`}
                                            onClick={() => handleClick(index, available)}
                                            title={`Верхнее | ${price} ₽`}
                                        >
                                            <span className="font-bold">{index}</span>
                                            <span className="text-[9px]">Верхнее</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex flex-row gap-2">
                                {bottom.map(({ index, available }) => {
                                    const price = coach.bottom_price;
                                    const isSelected = selectedSeats.includes(index);
                                    return (
                                        <div
                                            key={index}
                                            className={`w-10 h-10 flex flex-col items-center justify-center rounded border text-xs cursor-pointer
                                                ${!available ? 'bg-gray-300 cursor-not-allowed text-gray-500' : ''}
                                                ${isSelected ? 'border-orange-500 border-4 z-10' : 'border-gray-400 bg-white'}
                                                hover:shadow-lg transition`}
                                            onClick={() => handleClick(index, available)}
                                            title={`Нижнее | ${price} ₽`}
                                        >
                                            <span className="font-bold">{index}</span>
                                            <span className="text-[9px]">Нижнее</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="h-8" />

            <div className="flex flex-row gap-2 justify-center mb-8">
                {sideSeats.map(({ index, available }) => {
                    const price = coach.side_price;
                    const isSelected = selectedSeats.includes(index);
                    return (
                        <div
                            key={index}
                            className={`w-10 h-10 flex flex-col items-center justify-center rounded border text-xs cursor-pointer
                                ${!available ? 'bg-blue-200 bg-opacity-60 cursor-not-allowed text-gray-500' : 'bg-blue-50'}
                                ${isSelected ? 'border-orange-500 border-4 z-10' : 'border-gray-400'}
                                hover:shadow-lg transition`}
                            onClick={() => handleClick(index, available)}
                            title={`Боковое | ${price} ₽`}
                        >
                            <span className="font-bold">{index}</span>
                            <span className="text-[9px]">Боковое</span>
                        </div>
                    );
                })}
            </div>

            <div className="font-bold mt-2">
                Выбрано мест: {selectedSeats.length} <br />
                Сумма: {selectedSeats.reduce((sum, index) => {
                if (index > 36) return sum + (coach.side_price || 0);
                return sum + ((index % 2 === 0 ? coach.top_price : coach.bottom_price) || 0);
            }, 0)} ₽
            </div>
        </div>
    );
}
