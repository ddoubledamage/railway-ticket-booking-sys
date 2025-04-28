import {formatTime, formatDuration} from "../utils/format.js";
import Icon from "./Icon.jsx";

function TrainSchedule({departure, arrival, duration, isReturn = false}) {

    return (
            <div className="flex flex-row justify-center items-start p-14 gap-14 border-r-2 border-dashed border-gray-darker ">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold">
                        {formatTime(departure.datetime)}
                    </span>
                    <span className="font-normal text-secondary">
                        {departure.from.city.name}
                    </span>
                    <span className="font-normal text-gray-text">
                        {departure.from.railway_station_name}
                    </span>
                </div>

                <div className="text-xl font-normal text-gray-text">
                    {formatDuration(duration)}
                    <Icon name="arrow-orange" className={isReturn ? 'transform-scale-[-1] w-7 h-5' : 'w-8 h-5'}/>
                </div>

                <div className="flex flex-col">
                    <span className="text-2xl font-bold">
                        {formatTime(arrival.datetime)}
                    </span>
                    <span className="font-normal text-secondary">
                        {arrival.to.city.name}
                    </span>
                    <span className="font-normal text-gray-text">
                        {arrival.to.railway_station_name}
                    </span>
                </div>
            </div>
    )
}

export default TrainSchedule;