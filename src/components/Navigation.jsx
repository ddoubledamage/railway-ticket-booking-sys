
function Navigation() {
    return (
        <div className="mb-64">
            <div className="bg-black/80">
        <p className="text-3xl text-white pl-64 ">Лого</p>
            </div>

    <nav className="bg-gray-800 w-screen h-[5.8rem] text-white font-thin flex">
        <ul className="h-full flex flex-row gap-4 text-3xl pl-64">
            <li className="nav-item"><a href="">О нас</a></li>
            <li className="nav-item"><a href="">Как это работает</a></li>
            <li className="nav-item"><a href="">Отзывы</a></li>
            <li className="nav-item"><a href="">Контакты</a></li>
        </ul>
    </nav>
</div>
)
}

export default Navigation;