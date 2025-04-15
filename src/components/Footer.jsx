import Icon from "./Icon.jsx";
import Button from "./Button.jsx";

function Footer() {
    return (
        <section id="contact-us" className="footer w-full pb-8 bg-black-light text-white text-2xl ">
            <div className="w-full flex gap-48 justify-center pt-12">
                <div className="">
                    <h2 className="text-3xl pb-7">Свяжитесь с нами</h2>
                    <ul className="flex flex-col gap-8">
                        <li className="flex items-center gap-9"><Icon name="phone-icon" className="w-7 h-7"/> 8 (800)
                            000 00 00
                        </li>
                        <li className="flex items-center gap-9"><Icon name="mail-icon"
                                                                      className="w-7 h-7"/> inbox@mail.ru
                        </li>
                        <li className="flex items-center gap-9"><Icon name="skype-icon"
                                                                      className="w-7 h-7"/> tu.train.tickets
                        </li>
                        <li className="flex items-center gap-9"><Icon name="ping-icon" className="w-7 h-7"/> г.
                            Москва <br/>
                            ул. Московская 27-35 <br/>
                            555 555
                        </li>
                    </ul>
                </div>

                <div className="">
                    <h2 className="text-3xl pb-7">Подписка</h2>
                    <p className="pb-1">Будьте в курсе событий</p>
                    <form action="" className="flex flex-row gap-8 pb-10">
                        <input type="email" placeholder="e-mail" className="placeholder-gray-light text-black"/>
                        <Button variant="subscribe" size="medium" type="submit" text={"отправить"}/>
                    </form>

                    <div className="flex flex-col gap-7">
                        <h2 className="text-3xl">Подписывайтесь на нас</h2>
                        <div className="flex gap-12">
                            <a href=""><Icon name="youtube-icon" className="w-8 h-8"/></a>
                            <a href=""><Icon name="linkedin-icon" className="w-8 h-8"/></a>
                            <a href=""><Icon name="google-plus-icon" className="w-8 h-8"/></a>
                            <a href=""><Icon name="facebook-icon" className="w-8 h-8"/></a>
                            <a href=""><Icon name="twitter-icon" className="w-8 h-8"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-t border-white my-4 "/>
            <div className="px-64 flex justify-between items-center">
                <p className="text-4xl font-black">Лого</p>
                <Icon name="scroll-to-top-icon" className="w-8 h-8"/>
                <p className="text-2xl font-light">2018 WEB</p>
            </div>
        </section>
    )
}

export default Footer

