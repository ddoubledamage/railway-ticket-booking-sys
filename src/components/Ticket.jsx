import TrainInfo from "./TrainInfo.jsx";
import TrainSchedule from "./TrainSchedule.jsx";
import TrainSeats from "./TrainSeats.jsx";
import {capitalizeCityName} from "../utils/capitalizeCityName.js";



function Ticket({item, onSelectSeats }) {
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