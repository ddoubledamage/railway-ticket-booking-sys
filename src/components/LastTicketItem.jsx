import Icon from "./Icon.jsx";

function StationName({ name, className = 'text-gray-darker', ...props }) {
    const parts = name.split(' ');
    if (parts.length > 1) {
        const last = parts.pop();
        const rest = parts.join(' ');
        return (
            <p className={className} {...props}>
                {rest}<br />
                {last}
            </p>
        );
    }
    return <p className={className} {...props}>{name}</p>;
}

export default function LastTicketItem() {
    const item = {
        train: { number: '123А', name: 'Сапсан' },
        departure: {
            datetime: 1713763200,
            from: { city: { name: 'Санкт-Петербург' }, railway_station_name: 'Курский вокзал' }
        },
        duration: 24600,
        arrival: {
            datetime: 1713787800,
            to: { city: { name: 'Самара' }, railway_station_name: 'Московский вокзал' }
        },
        seats_info: { first_class: 5, second_class: 10, third_class: 20, fourth_class: 0 },
        price_info: { first_class: 5000, second_class: 3000, third_class: 2000, fourth_class: 1500 },
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
    };

    return (
        <div className="p-4 border border-gray-slider">
            <div className="flex flex-row justify-between">
                <div>
                    <p className="text-2xl">{item.departure.from.city.name}</p>
                    <StationName name={item.departure.from.railway_station_name}/>
                </div>

                <div>
                    <p className="text-2xl">{item.arrival.to.city.name}</p>
                    <StationName name={item.arrival.to.railway_station_name} />
                </div>
            </div>
            <div className="flex flex-row justify-between pt-9">
                <Icon  name="ticket-icons" className="w-24 h-5"/>
                <div>
                    <span className="text-gray-darker">от</span>
                    <span className="font-bold text-4xl text-yellow-chromatic">{item.price_info.fourth_class}</span>
                </div>
            </div>

        </div>
    );
}