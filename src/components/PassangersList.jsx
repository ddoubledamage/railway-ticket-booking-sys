import PassengerForm from "./PassangerForm.jsx";

export default function PassengersList({ passengers, setPassengers }) {
    const addPassenger = () => {
        setPassengers((prev) => [
            ...prev,
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
    };

    const updatePassenger = (index, updatedData) => {
        const newList = [...passengers];
        newList[index] = updatedData;
        setPassengers(newList);
    };

    const removePassenger = (index) => {
        setPassengers((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-6">
            {passengers.map((p, i) => (
                <PassengerForm
                    key={i}
                    index={i}
                    data={p}
                    onChange={(updated) => updatePassenger(i, updated)}
                    onRemove={() => removePassenger(i)}
                />
            ))}

            <div className="text-center">
                <button
                    onClick={addPassenger}
                    className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded font-semibold hover:bg-yellow-600"
                >
                    + Добавить пассажира
                </button>
            </div>
        </div>
    );
}
