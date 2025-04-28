import TrainInfo from "./TrainInfo.jsx";
import TrainSchedule from "./TrainSchedule.jsx";
import TrainSeats from "./TrainSeats.jsx";

function Ticket() {

    const item = {
        train: { number: '123А', name: 'Сапсан' },
        departure: {
            datetime: 1713763200,
            from: { city: { name: 'Москва' }, railway_station_name: 'Ленинградский вокзал' }
        },
        duration: 24600,
        arrival: {
            datetime: 1713787800,
            to: { city: { name: 'С.-Петербург' }, railway_station_name: 'Московский вокзал' }
        },
        seats_info: { first_class: 5, second_class: 10, third_class: 20, fourth_class: 0 },
        price_info: { first_class: 5000, second_class: 3000, third_class: 2000, fourth_class: 1500 },
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
    };

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
                />
            </div>
            </div>
            )
            }

            export default Ticket