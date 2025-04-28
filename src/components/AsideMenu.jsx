import Icon from "./Icon.jsx";


function AsideMenu() {
    return (
        <div className="flex flex-col relative bg-gray-stepper max-w-96">
            <div className="flex flex-col gap-6 px-9 py-10">
                <form action="">
                    <span className="text-white font-normal text-3xl">Дата поездки</span>
                    <input type="date"/>
                </form>

                <form action="">
                    <span className="text-white font-normal text-3xl">Дата возвращения</span>
                    <input type="date"/>
                </form>

            </div>

            <hr className="border w-full border-gray-light"/>

            <div>

            </div>
        </div>
    )
}

export default AsideMenu;