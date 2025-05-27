import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentInfoForm from "../components/PaymentInfoForm";
import { useOrderStore } from "../store/orderStore";

export default function PaymentPage() {
    const navigate = useNavigate();
    const setUser = useOrderStore((state) => state.setUser);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        patronymic: "",
        phone: "",
        email: "",
        payment_method: "cash",
    });

    const handleSubmit = () => {
        setUser(formData);
        navigate("/confirmation");
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <PaymentInfoForm onChange={setFormData} />

            <div className="text-right mt-8">
                <button
                    onClick={handleSubmit}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded"
                >
                    Далее
                </button>
            </div>
        </div>
    );
}
