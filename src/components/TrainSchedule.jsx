import {formatTime, formatDuration} from "../utils/format.js";
import Icon from "./Icon.jsx";
import {capitalizeCityName} from "../utils/capitalizeCityName.js";


function TrainSchedule({ departure, arrival, duration, isReturn = false, variant = "default" }) {
    const hasArrival = !!arrival;

    if (variant === "compact") {
        return (
            <div className="flex flex-row items-center">
                {/* Откуда */}
                <div className="flex flex-col">
          <span className="text-2xl font-bold">
            {formatTime(departure.from.datetime)}
          </span>
                    <span className="font-normal text-secondary">
            {capitalizeCityName(departure.from.city.name)}
          </span>
                    <span className="font-normal text-gray-text">
            {departure.from.railway_station_name}
          </span>
                </div>

                <Icon name="arrow-orange" className={isReturn ? 'transform-scale-[-1] w-8 h-5' : 'w-8 h-5 mr-6'} />

                {/* Куда */}
                <div className="flex flex-col">
          <span className="text-2xl font-bold">
            {formatTime(hasArrival ? arrival.datetime : departure.to.datetime)}
          </span>
                    <span className="font-normal text-secondary">
            {(hasArrival ? capitalizeCityName(arrival.to.city.name): capitalizeCityName(departure.to.city.name))}
          </span>
                    <span className="font-normal text-gray-text">
            {(hasArrival ? arrival.to.railway_station_name : departure.to.railway_station_name)}
          </span>
                </div>

                <div className="flex flex-row">
                    <Icon name="clock-xs" className="w-[30px] h-[30px]" />
                    <div className="pl-1">
                        {formatDuration(departure.duration, 'secondary')}
                    </div>
                </div>
            </div>
        );
    }

    // Full variant
    return (
        <div className="flex flex-row justify-center items-start p-14 gap-14 border-r-2 border-dashed border-gray-darker">
            {/* Откуда */}
            <div className="flex flex-col">
        <span className="text-2xl font-bold">
          {formatTime(departure.from.datetime)}
        </span>
                <span className="font-normal text-secondary">
          {departure.from.city.name}
        </span>
                <span className="font-normal text-gray-text">
          {departure.from.railway_station_name}
        </span>
            </div>

            <div className="text-xl font-normal text-gray-text">
                {formatDuration(departure.duration)}
                <Icon name="arrow-orange" className={isReturn ? 'transform-scale-[-1] w-7 h-5' : 'w-8 h-5'} />
            </div>

            {/* Куда */}
            <div className="flex flex-col">
        <span className="text-2xl font-bold">
          {formatTime(hasArrival ? arrival.datetime : departure.to.datetime)}
        </span>
                <span className="font-normal text-secondary">
          {(hasArrival ? arrival.to.city.name : departure.to.city.name)}
        </span>
                <span className="font-normal text-gray-text">
          {(hasArrival ? arrival.to.railway_station_name : departure.to.railway_station_name)}
        </span>
            </div>
        </div>
    );
}


export default TrainSchedule;