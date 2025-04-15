import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import Reviews from "../components/Reviews.jsx";

function HomePage() {
    return (
        <div className="flex flex-col gap-24">
            <section id="about" className="w-full flex justify-center items-center">
                <div className="max-w-7xl w-full">
                    <h2 className="font-medium text-4xl pb-8 uppercase">О нас</h2>
                    <div className="flex">
                        <div className="w-2 bg-yellow-chromatic mr-4"></div>
                        <div className="space-y-4 font-normal text-2xl">
                            <p> Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым
                                днем
                                все больше людей заказывают жд билеты через интернет.</p>

                            <p>Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это
                                делать?
                                Мы расскажем о преимуществах заказа через интернет.</p>

                            <p className="font-bold">Покупать жд билеты дешево можно за 90 суток до отправления
                                поезда. <br/>
                                Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-it-works"
                className="px-64 pt-16 pb-24 text-white w-screen relative flex flex-col bg-[url('/rails.png')] bg-no-repeat bg-cover">
                {/*overflow пришлось делать других цветов в макете неверное opacity и bg-color*/}
                <div className="absolute inset-0 bg-yellow-chromatic opacity-60"></div>
                <div className="relative z-10">
                <div className="flex justify-between">
                    <h2 className="font-medium text-4xl uppercase">Как это работает</h2>
                    <Button variant="moreInfo" size="big" type="button" text="Узнать больше"/>
                </div>
                <div className="flex justify-center gap-48 mt-16">
                    <Icon name="computer-icon" className="w-40 h-40">
                        <p>Удобный заказ на сайте</p>
                    </Icon>
                    <Icon name="office-icon" className="w-40 h-40">
                        <p>Нет необходимости ехать в офис</p>
                    </Icon>
                    <Icon name="globe-icon" className="w-40 h-40">
                        <p>Огромный выбор направлений</p>
                    </Icon>
                </div>
                </div>
            </section>

            <section id="reviews" className="w-full px-4 md:px-10 lg:px-20 py-16 bg-white flex justify-center">
                <div className="max-w-6xl w-full flex flex-col gap-12">
                    <h2 className="text-4xl font-semibold text-left">Отзывы</h2>
                    <div className="flex justify-between gap-12">
                        <Reviews
                            photo="example-review-1.png"
                            name="Екатерина Вальнова"
                            text="Очень довольна поездкой! Заказ билета занял всего пару минут. Удобный интерфейс и понятные шаги оформления."
                        />
                        <Reviews
                            photo="example-review-2.png"
                            name="Евгений Стрыкало"
                            text="Сайт сопровождает до посадки в поезд! Очень удобно, больше не нужно ехать в кассу. Всё находится в одном месте."
                        />
                    </div>
                    <Icon name="scroll-bar" className="w-36 h-16 mt-24 flex justify-self-center"/>
                </div>
            </section>

        </div>
    )
}

export default HomePage;