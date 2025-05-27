import { useState } from "react";
import PassengerForm from "./PassangerForm.jsx";

export default function PassengersList() {
    const [passengers, setPassengers] = useState([{ id: Date.now() }]);

    const addPassenger = () => {
        setPassengers((prev) => [...prev, { id: Date.now() + Math.random() }]);
    };

    const removePassenger = (id) => {
        setPassengers((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <div className="max-w-4xl mx-auto px-4">
            {passengers.map((p, idx) => (
                <PassengerForm
                    key={p.id}
                    index={idx}
                    onRemove={() => removePassenger(p.id)}
                />
            ))}

            <div className="text-center mt-6">
                <button
                    onClick={addPassenger}
                    className="px-6 py-3 bg-yellow-500 text-white rounded font-semibold hover:bg-yellow-600"
                >
                    + Добавить пассажира
                </button>
            </div>
        </div>
    );
}
