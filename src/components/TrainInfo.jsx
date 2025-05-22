import Icon from './Icon.jsx'

function TrainInfo({trainNumber, route, trainName, variant="default"}) {
    if (variant === "compact") {
        return (
            <div className="flex flex-row items-center gap-7 pr-8 relative h-full">
                <Icon name="train-xs" className="w-[30px] h-[30px]"/>

                <div className="flex flex-col">
                    <div className="text-2xl font-bold">
                        {trainNumber}
                    </div>

                    <div>
                        {route.from} → <br/>
                        {route.to} → <br/>
                        {trainName && (<div className="font-normal">{trainName}</div>)}
                    </div>
                </div>
                <div className="absolute top-[-15px] bottom-[-15px] right-6 w-px bg-white"></div>
            </div>
        )
    }
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