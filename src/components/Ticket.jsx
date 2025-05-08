import TrainInfo from "./TrainInfo.jsx";
import TrainSchedule from "./TrainSchedule.jsx";
import TrainSeats from "./TrainSeats.jsx";

function Ticket({item, onSelectSeats }) {
    return (
        <div className="flex flex-row max-w-5xl border border-gray-border">
            <TrainInfo trainNumber={item.train.number} route={{
                from: item.departure.from.city.name,
                to: item.arrival.to.city.name,
            }}
                       trainName={item.train.name}/>

            <TrainSchedule departure={item.departure}
                           arrival={item.arrival}
                           duration={item.duration}
            />
            <div className="w-1/4 p-5">
                <TrainSeats
                    seatsInfo={item.seats_info}
                    priceInfo={item.price_info}
                    haveWifi={item.have_wifi}
                    haveAirCond={item.have_air_conditioning}
                    isExpress={item.is_express}
                    onSelectSeats={onSelectSeats}
                />
            </div>
            </div>
            )
            }

            export default Ticket