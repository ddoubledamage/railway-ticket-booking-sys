import { useOrderStore } from "../store/orderStore";
import { useNavigate } from "react-router-dom";

export default function ConfirmationPage() {
    const { user, passengers, departure, arrival } = useOrderStore();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const payload = {
            user,
            departure,
            arrival,
        };

        try {
            const res = await fetch("https://students.netoservices.ru/fe-diplom/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Ошибка при оформлении заказа");

            const result = await res.json();
            navigate("/success", { state: result });
        } catch (err) {
            console.error(err);
            alert("Не удалось отправить заказ. Попробуйте позже.");
        }
    };

    const formatPrice = (price) => new Intl.NumberFormat("ru-RU").format(price || 0) + " ₽";
    const totalPrice = [...(departure?.seats || []), ...(arrival?.seats || [])].reduce((sum, seat) => sum + (seat.price || 0), 0);
    console.log("user from Zustand", user);

    return (
        <div className="max-w-5xl mx-auto px-6 py-10 space-y-6">
            {/* Блок: Поезд */}
            <section className="bg-white border rounded shadow-sm">
                <div className="border-b px-6 py-4 font-semibold text-lg">Поезд</div>
                <div className="flex flex-col md:flex-row justify-between px-6 py-4 gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-600">
                            🚆
                        </div>
                        <div>
                            <p className="font-semibold text-sm text-gray-600">{departure?.route_direction_id || "Маршрут"}</p>
                            <p className="text-sm">Москва → Санкт-Петербург</p>
                        </div>
                    </div>
                    <button className="border border-gray-400 rounded px-4 py-2 hover:bg-gray-50 self-start">Изменить</button>
                </div>
            </section>

            {/* Блок: Пассажиры */}
            <section className="bg-white border rounded shadow-sm">
                <div className="border-b px-6 py-4 font-semibold text-lg flex justify-between">
                    <span>Пассажиры</span>
                    <span className="text-right font-bold">{formatPrice(totalPrice)}</span>
                </div>
                <div className="px-6 py-4 space-y-4">
                    {passengers.map((p, idx) => (
                        <div key={idx} className="flex items-start gap-4 border-b pb-4 last:border-b-0">
                            <div className="w-12 h-12 bg-yellow-400 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                👤
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold">{p.last_name} {p.first_name} {p.patronymic}</p>
                                <p className="text-sm text-gray-700">{p.is_adult ? "Взрослый" : "Детский"}</p>
                                <p className="text-sm text-gray-700">Пол: {p.gender ? "мужской" : "женский"}</p>
                                <p className="text-sm text-gray-700">Дата рождения: {p.birthday}</p>
                                <p className="text-sm text-gray-700">{p.document_type}: {p.document_data}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border-t px-6 py-4 flex justify-end">
                    <button className="border border-gray-400 rounded px-4 py-2 hover:bg-gray-50">Изменить</button>
                </div>
            </section>

            {/* Блок: Способ оплаты */}
            <section className="bg-white border rounded shadow-sm">
                <div className="border-b px-6 py-4 font-semibold text-lg">Способ оплаты</div>
                <div className="px-6 py-4 flex justify-between items-center">
                    <p className="text-sm">{user.payment_method === "cash" ? "Наличными" : "Онлайн"}</p>
                    <button className="border border-gray-400 rounded px-4 py-2 hover:bg-gray-50">Изменить</button>
                </div>
            </section>

            {/* Кнопка подтверждения */}
            <div className="text-center pt-6">
                <button
                    onClick={handleSubmit}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-10 py-3 rounded text-lg"
                >
                    ПОДТВЕРДИТЬ
                </button>
            </div>
        </div>
    );
}
