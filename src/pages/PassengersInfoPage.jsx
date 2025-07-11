import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PassengersList from "../components/PassangersList.jsx";
import { useOrderStore } from "../store/orderStore";

export default function PassengersInfoPage() {
    const navigate = useNavigate();
    const setPassengers = useOrderStore((state) => state.setPassengers);

    const [passengers, setLocalPassengers] = useState([
        {
            first_name: "",
            last_name: "",
            patronymic: "",
            birthday: "",
            gender: true,
            document_type: "passport",
            document_data: "",
            is_adult: true,
        },
    ]);

    const handleSubmit = () => {
        setPassengers(passengers); // сохраняем в Zustand
        navigate("/payment");
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <PassengersList passengers={passengers} setPassengers={setLocalPassengers} />

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
