import Icon from "./Icon.jsx";

function TrainInfo({trainNumber, route, trainName}) {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <Icon className="train"/>

            <div className="text-gray-stepper font-bold text-2xl">
                {trainNumber}
            </div>

            <div>
                {route.from} → <br/>
                {route.to} → <br/>
                {trainName && (<div className="font-normal">{trainName}</div>)}


            </div>
        </div>
    )
}

export default TrainInfo;