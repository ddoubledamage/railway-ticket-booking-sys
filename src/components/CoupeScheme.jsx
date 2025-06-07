import { useEffect, useState } from "react";


function getSeatInfoCoupe(index, coach) {
    if (!coach) return { price: 0, label: "" };
    if (index % 2 === 0) {
        return { price: coach.top_price, label: "Верхнее" };
    } else {
        return { price: coach.bottom_price, label: "Нижнее" };
    }
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

    const coupeGroups = [];
    for (let i = 0; i < seats.length; i += 4) {
        coupeGroups.push(seats.slice(i, i + 4));
    }

    const splitRows = arr => ({
        top: arr.filter(s => s.index % 2 === 0),
        bottom: arr.filter(s => s.index % 2 !== 0),
    });

    return (
        <div>
            <div className="flex flex-row gap-4 justify-center mb-8">
                {coupeGroups.map((coupe, coupeIdx) => {
                    const rows = splitRows(coupe);
                    return (
                        <div
                            key={coupeIdx}
                            className="flex flex-col gap-1 items-center"
                        >

                            <div className="flex flex-row gap-2 justify-center">
                                {rows.top.map(({ index, available }) => {
                                    const { price, label } = getSeatInfoCoupe(index, coach);
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

                            <div className="flex flex-row gap-2 justify-center">
                                {rows.bottom.map(({ index, available }) => {
                                    const { price, label } = getSeatInfoCoupe(index, coach);
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
                    );
                })}
            </div>
            <div className="font-bold mt-2">
                Выбрано мест: {selectedSeats.length} <br />
                Сумма: {selectedSeats.reduce((sum, index) => sum + getSeatInfoCoupe(index, coach).price, 0)} ₽
            </div>
        </div>
    );

}
