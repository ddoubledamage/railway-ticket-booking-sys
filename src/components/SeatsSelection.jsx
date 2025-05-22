import Icon from "./Icon.jsx";
import Button from "./Button.jsx";
import TrainInfo from "./TrainInfo.jsx";
import TrainSchedule from "./TrainSchedule.jsx";
import Ticket from "./Ticket.jsx";
import SeatQuantity from "./SeatsQuantity.jsx";

function SeatsSelection({item,onBack}) {
    return (
        <div>
            <h2 className="uppercase font-medium text-3xl pb-9">Выбор мест</h2>
            <div className="flex flex-col max-w-5xl border border-gray-border">
                <Ticket item={item} onBack={onBack} variant="compact"/>
                <SeatQuantity/>
            </div>
        </div>

    )
}

export default SeatsSelection;