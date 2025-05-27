import React from 'react';

const SeatButtons = ({ onClick }) => {
    const evenSeats = Array.from({ length: 16 }, (_, i) => (i + 1) * 2);
    const oddSeats = Array.from({ length: 16 }, (_, i) => (i + 1) * 2 - 1);
    const windowSeats = Array.from({ length: 16 }, (_, i) => (i + 33));

    return (
        <div className="absolute w-[920px] h-[145px]">
            {/* Верхний ряд (чётные места) */}
            {evenSeats.map((number, index) => {
                const baseLeft = 133;
                const buttonSpacing = 30;
                const extraGap = 29.4;

                const left =
                    baseLeft +
                    index * buttonSpacing +
                    Math.floor((index + 1) / 2) * extraGap;

                return (
                    <button
                        key={`top-${number}`}
                        onClick={() => onClick(number)}
                        className="absolute w-[27px] h-[33px] bg-green-500 text-white hover:bg-green-600"
                        style={{
                            left: `${left}px`,
                            top: `28px`, // верхний ряд
                        }}
                    >
                        {number}
                    </button>
                );
            })}

            {/* Нижний ряд (нечётные места) */}
            {oddSeats.map((number, index) => {
                const baseLeft = 133;
                const buttonSpacing = 30;
                const extraGap = 29.4;

                const left =
                    baseLeft +
                    index * buttonSpacing +
                    Math.floor((index + 1) / 2) * extraGap;

                return (
                    <button
                        key={`bottom-${number}`}
                        onClick={() => onClick(number)}
                        className="absolute w-[27px] h-[29px] bg-blue-500 text-white hover:bg-blue-600"
                        style={{
                            left: `${left}px`,
                            top: `61px`, // нижний ряд, +43px ниже верхнего
                        }}
                    >
                        {number}
                    </button>
                );
            })}

            {/* Нижний ряд (нечётные места) */}
            {windowSeats.map((number, index) => {
                const baseLeft = 134;
                const buttonSpacing = 45;

                const left =
                    baseLeft +
                    index * buttonSpacing

                return (
                    <button
                        key={`bottom-${number}`}
                        onClick={() => onClick(number)}
                        className="absolute w-[40px] h-[24px] bg-orange-500 text-white hover:bg-blue-600"
                        style={{
                            left: `${left}px`,
                            top: `113px`, // нижний ряд, +43px ниже верхнего
                        }}
                    >
                        {number}
                    </button>
                );
            })}

        </div>
    );
};

export default SeatButtons;
