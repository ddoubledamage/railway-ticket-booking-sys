import Icon from "./Icon.jsx";

// разобраться с покраской блока со стрелочками

function Stepper({activeStep}) {
    const steps =[
        {number: 1, label: "Билеты"},
        {number:2, label: "Пассажиры"},
        {number:3, label: "Оплата"},
        {number:4, label: "Проверка"}
    ]

    return (
        <div className="flex w-full overflow-hidden">
            {steps.map((step, index) => {
                const isActive = activeStep === step.number;
                const isLast = index === steps.length - 1;
                return (
                    <div key={step.number} className={`relative flex flex-row w-full h-24 text-3xl font-bold text-white items-center justify-center ${
                        isActive ? "bg-stepper" : "bg-gray-stepper"
                    }`}>
                        <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 mr-5">
                            {step.number}
                        </div>
                        <span>
                            {step.label}
                        </span>

                        {!isLast && (
                            <Icon name="arrow"
                                  className={`absolute top-0 right-0 w-9 h-24 ${
                                      isActive ? "text-yellow-400" : "text-gray-300"
                                  }`} >
                            </Icon>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
export default Stepper