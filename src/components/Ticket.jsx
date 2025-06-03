import TrainInfo from "./TrainInfo.jsx";
import TrainSchedule from "./TrainSchedule.jsx";
import TrainSeats from "./TrainSeats.jsx";
import {capitalizeCityName} from "../utils/capitalizeCityName.js";
import Icon from "./Icon.jsx";
import Button from "./Button.jsx";



function Ticket({item, onSelectSeats, variant = "default" }) {

    if (variant === 'compact') {
        return (
            <div>
            <div className="flex flex-row mx-5 my-8">
                <Icon name="arrow-right-but-icon-xl" className="w-20 h-16 mr-2.5"/>
                <Button variant={"anotherTrain"}
                        size={"big"}
                        type={"submit"}
                        text={"Выбрать другой поезд"}
                        className="text-2xl"
                />
            </div>
            <div className="flex flex-row bg-gray-background py-4 px-8">
                <TrainInfo
                    trainNumber={item.departure.train.number}
                    trainName={item.departure.train.name}
                    route={{from: item.departure.from.city.name, to: item.departure.to.city.name}}
                    variant="compact"
                />

                <TrainSchedule
                    departure={item.departure}
                    arrival={item.arrival}
                    duration={item.duration}
                    variant="compact"
                />
            </div>

            {/*<button onClick={onBack}>Назад</button>*/}
                </div>
            )
            }

            return (
            <div className="flex flex-row max-w-5xl border border-gray-border">
                <TrainInfo trainNumber={item.departure.train.number} route={{
                    from: capitalizeCityName(item.departure.from.city.name),
                    to: capitalizeCityName(item.departure.to.city.name),
                }}
                           trainName={item.departure.train.name}/>

                <TrainSchedule departure={item.departure}
                               arrival={item.arrival}
                               duration={item.duration}
                />
                <div className="w-1/4 p-5">
                    <TrainSeats
                        seatsInfo={item.departure.available_seats_info}
                        priceInfo={item.departure.price_info}
                        haveWifi={item.departure.have_wifi}
                        haveAirCond={item.departure.have_air_conditioning}
                        isExpress={item.departure.is_express}
                        onSelectSeats={onSelectSeats}
                    />
                </div>
            </div>
            )
            }

            export default Ticket