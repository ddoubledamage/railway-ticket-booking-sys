// src/components/TrainSeats.jsx
import Icon from './Icon.jsx';
import Button from "./Button.jsx";

export default function TrainSeats({
                                       seatsInfo,
                                       priceInfo,
                                       haveWifi,
                                       haveAirCond,
                                       isExpress,
                                   }) {
    // Описываем порядок и подписи классов
    const CLASSES = [
        { key: 'first_class',  label: 'Люкс'     },
        { key: 'second_class', label: 'Купе'     },
        { key: 'third_class',  label: 'Плацкарт' },
        { key: 'fourth_class', label: 'Сидяч.'   },
    ];

    return (
        <div className="flex flex-col justify-between h-full">
            {/* Секция с типами вагонов и ценами */}
            <div className="space-y-2">
                {CLASSES.map(({ key, label }) => {
                    const count = seatsInfo[key];
                    const price = priceInfo[key];
                    // Показываем только те классы, где есть данные
                    if (count == null || price == null) return null;
                    return (
                        <div key={key} className="flex items-center">
                            <span className="text-gray-500 min-w-20">{label}</span>
                            <span className="text-yellow-600 font-bold min-w-10">{count}</span>
                            <span className="text-gray-500 p-2">от</span>
                            <span className="font-bold">{price}₽</span>
                        </div>
                    );
                })}
            </div>

            {/* Иконки доп. Услуг и кнопка */}
            <div className="text-white">
                <div className="flex space-x-3">
                    <Icon name="ticket-icons"/>
                </div>
                <Button variant="searchTickets" text="Выбрать места" size="mediumPlus" />
            </div>
        </div>
    );
}
