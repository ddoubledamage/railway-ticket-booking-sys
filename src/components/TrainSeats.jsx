
import Icon from './Icon.jsx';
import Button from "./Button.jsx";

export default function TrainSeats({
                                       seatsInfo = {},
                                       priceInfo = {},
                                       haveWifi,
                                       haveAirCond,
                                       isExpress,
                                       onSelectSeats
                                   }) {
    const classLabels = {
        first: 'Люкс',
        second: 'Купе',
        third: 'Плацкарт',
        fourth: 'Сидячий'
    }
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="space-y-2">
                {Object.keys(seatsInfo).map((key) => {
                    const count = seatsInfo[key];
                    const price =
                        priceInfo[key]?.bottom_price ??
                        priceInfo[key]?.price ??
                        null;

                    if (!count || !price) return null;

                    return (
                        <div key={key} className="flex items-center">
                            <span className="text-gray-500 min-w-20">{classLabels[key] || key}</span>
                            <span className="text-yellow-600 font-bold min-w-10">{count}</span>
                            <span className="text-gray-500 p-2">от</span>
                            <span className="font-bold">{price}₽</span>
                        </div>
                    );
                })}
            </div>

            <div className="text-white flex flex-col items-center">
                <div className="mt-9 mb-4">
                    <Icon name="ticket-icons" className="w-24 h-5 flex" />
                </div>

                <p className="text-white text-sm mb-2">
                    {haveWifi && 'Wi-Fi · '}
                    {haveAirCond && 'Кондиционер · '}
                    {isExpress && 'Экспресс'}
                </p>

                <Button
                    variant="searchTickets"
                    text="Выбрать места"
                    size="mediumPlus"
                    onClick={onSelectSeats}
                />
            </div>
        </div>
    );
}
