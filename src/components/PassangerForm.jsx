export default function PassengerForm({ index, data, onChange, onRemove }) {
    const update = (field, value) => {
        onChange({ ...data, [field]: value });
    };

    return (
        <div className="border rounded p-4 bg-white space-y-3">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold">Пассажир {index + 1}</h3>
                <button onClick={onRemove} className="text-red-500">✕</button>
            </div>

            <input className="input" placeholder="Фамилия" value={data.last_name} onChange={(e) => update("last_name", e.target.value)} />
            <input className="input" placeholder="Имя" value={data.first_name} onChange={(e) => update("first_name", e.target.value)} />
            <input className="input" placeholder="Отчество" value={data.patronymic} onChange={(e) => update("patronymic", e.target.value)} />

            <div className="flex gap-2">
                <button
                    type="button"
                    onClick={() => update("gender", true)}
                    className={`px-4 py-2 rounded ${data.gender ? "bg-yellow-500 text-white" : "bg-gray-200"}`}
                >
                    М
                </button>
                <button
                    type="button"
                    onClick={() => update("gender", false)}
                    className={`px-4 py-2 rounded ${!data.gender ? "bg-yellow-500 text-white" : "bg-gray-200"}`}
                >
                    Ж
                </button>
            </div>

            <input className="input" placeholder="Дата рождения" value={data.birthday} onChange={(e) => update("birthday", e.target.value)} />

            <select value={data.document_type} onChange={(e) => update("document_type", e.target.value)} className="input">
                <option value="passport">Паспорт РФ</option>
                <option value="birth">Свидетельство о рождении</option>
            </select>

            <input className="input" placeholder="Документ" value={data.document_data} onChange={(e) => update("document_data", e.target.value)} />
        </div>
    );
}
