import Icon from "./Icon.jsx";

function Reviews({photo, name, text,}) {
    return (
        <div>
            <div className="flex justify-center items-center gap-9">
                <img src={photo} alt={name} className="w-52 h-52"/>
                <div className="max-w-96 flex flex-col gap-3">
                    <p className="font-medium text-2xl">{name}</p>
                    {/*с кавычками пока не получилось*/}
                    {/*для самой прокрутки если она нужна можно взять либу Swiper.js*/}
                    <p className="font-light italic text-gray-darker">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews;