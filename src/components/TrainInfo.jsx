import Icon from './Icon.jsx'

function TrainInfo({trainNumber, route, trainName}) {
    return (
        <div className="flex flex-col items-center gap-4 bg-gray-card w-1/4 pt-14">
            <Icon name="train" className="w-[86px] h-[86px]"/>

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