import Icon from "./Icon.jsx";
import Button from "./Button.jsx";
import TrainInfo from "./TrainInfo.jsx";
import TrainSchedule from "./TrainSchedule.jsx";

function SeatsSelection({item,onBack}) {
    const {
        train,
        departure,
        arrival,
        duration,
        seats_info,
        price_info,
        have_wifi,
        have_air_conditioning,
        is_express,
    } = item;
    return (
        <div className="flex flex-col max-w-5xl border border-gray-border">
            <div className="flex flex-row">
                <Icon name="arrow-right-but-icon-xl" className="w-20 h-16"/>
                <Button variant={"anotherTrain"}
                        size={"big"}
                        type={"submit"}
                        text={"Выбрать другой поезд"}
                        className="text-2xl"
                />
            </div>
            <div className="flex flex-row bg-gray-background py-4 px-8">
                <TrainInfo
                    trainNumber={train.number}
                    trainName={train.name}
                    route={{ from: departure.from.city.name, to: arrival.to.city.name }}
                    variant="compact"
                />

                <TrainSchedule
                    departure={departure}
                    arrival={arrival}
                    duration={duration}
                    variant="compact"
                />
            </div>

            <button onClick={onBack}>Назад</button>
        </div>
    )
}

export default SeatsSelection;