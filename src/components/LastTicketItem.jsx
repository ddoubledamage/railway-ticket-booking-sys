import Icon from "./Icon.jsx";
import {getMinPrice} from "../utils/getMinPrice.js";
import { capitalizeCityName } from "../utils/capitalizeCityName.js";

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

export default function LastTicketItem({ item }) {



    return (
        <div className="p-4 border border-gray-slider">
            <div className="flex flex-row justify-between">
                <div>
                    <p className="text-2xl">{capitalizeCityName(item.departure.from.city.name)}</p>
                    <StationName name={item.departure.from.railway_station_name}/>
                </div>

                <div>
                    <p className="text-2xl">{capitalizeCityName(item.departure.to.city.name)}</p>
                    <StationName name={item.departure.to.railway_station_name} />
                </div>
            </div>
            <div className="flex flex-row justify-between pt-9">
                <Icon  name="ticket-icons" className="w-24 h-5"/>
                <div>
                    <span className="text-gray-darker pr-1">от</span>
                    <span className="font-bold text-4xl text-yellow-chromatic">{getMinPrice(item.departure.price_info)}</span>
                </div>
            </div>

        </div>
    );
}