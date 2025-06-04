import { useState } from "react";

export default function PaymentInfoForm({ onChange }) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        patronymic: "",
        phone: "",
        email: "",
        payment_method: "cash",
    });

    const updateField = (field, value) => {
        const updated = { ...formData, [field]: value };
        setFormData(updated);
        if (onChange) onChange(updated);
    };

    return (
        <div className="space-y-6 bg-white border rounded p-6 shadow">
            <div>
                <h2 className="text-lg font-semibold mb-4">Персональные данные</h2>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <input
                        className="input"
                        placeholder="Фамилия"
                        value={formData.last_name}
                        onChange={(e) => updateField("last_name", e.target.value)}
                    />
                    <input
                        className="input"
                        placeholder="Имя"
                        value={formData.first_name}
                        onChange={(e) => updateField("first_name", e.target.value)}
                    />
                    <input
                        className="input"
                        placeholder="Отчество"
                        value={formData.patronymic}
                        onChange={(e) => updateField("patronymic", e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <input
                        className="input"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                    />
                    <input
                        className="input"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Способ оплаты</h2>
                <div className="flex flex-col gap-3 pl-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="payment_method"
                            value="online"
                            checked={formData.payment_method === "online"}
                            onChange={(e) => updateField("payment_method", e.target.value)}
                            className="accent-yellow-500"
                        />
                        <span className="text-sm font-medium">Онлайн</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="payment_method"
                            value="cash"
                            checked={formData.payment_method === "cash"}
                            onChange={(e) => updateField("payment_method", e.target.value)}
                            className="accent-yellow-500"
                        />
                        <span className="text-sm font-medium">Наличными</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
