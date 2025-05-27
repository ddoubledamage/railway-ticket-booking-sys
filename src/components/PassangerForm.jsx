import { useState } from "react";

export default function PassengerForm({ index, onRemove }) {
    const [gender, setGender] = useState("male");
    const [type, setType] = useState("adult");
    const [docType, setDocType] = useState("passport");

    return (
        <div className="border rounded-lg p-6 mb-6 shadow-sm bg-white">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Пассажир {index + 1}</h3>
                <button
                    className="text-gray-500 hover:text-red-500 text-xl"
                    onClick={onRemove}
                    title="Удалить пассажира"
                >
                    ✕
                </button>
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Тип пассажира</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="border px-3 py-2 min-w-72 rounded"
                >
                    <option value="adult">Взрослый</option>
                    <option value="child">Детский</option>
                </select>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
                <input className="input" placeholder="Фамилия"/>
                <input className="input" placeholder="Имя"/>
                <input className="input" placeholder="Отчество"/>
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Пол</label>
                <div className="flex gap-2">
                    <button
                        className={`w-12 h-10 rounded ${
                            gender === "male" ? "bg-yellow-500 text-white" : "bg-gray-200"
                        }`}
                        onClick={() => setGender("male")}
                    >
                        М
                    </button>
                    <button
                        className={`w-12 h-10 rounded ${
                            gender === "female" ? "bg-yellow-500 text-white" : "bg-gray-200"
                        }`}
                        onClick={() => setGender("female")}
                    >
                        Ж
                    </button>
                </div>
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Дата рождения</label>
                <input className="input w-full" placeholder="ДД/ММ/ГГ"/>
            </div>

            <div className="mb-4">
                <label className="inline-flex items-center gap-2 text-sm cursor-pointer">
                    <input
                        type="checkbox"
                        id={`mobility-${index}`}
                        className="w-5 h-5 accent-yellow-500"
                    />
                    ограниченная подвижность
                </label>
            </div>


            <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block mb-1 font-medium">Тип документа</label>
                    <select
                        value={docType}
                        onChange={(e) => setDocType(e.target.value)}
                        className="input w-full"
                    >
                        <option value="passport">Паспорт РФ</option>
                        <option value="birth">Свидетельство о рождении</option>
                    </select>
                </div>

                {docType === "passport" && (
                    <>
                        <input className="input" placeholder="Серия"/>
                        <input className="input" placeholder="Номер"/>
                    </>
                )}

                {docType === "birth" && (
                    <div className="col-span-2">
                        <input className="input w-full" placeholder="12 символов"/>
                    </div>
                )}
            </div>

            <div className="text-right">
                <button className="px-4 py-2 border rounded font-medium hover:bg-gray-100">
                    Следующий пассажир
                </button>
            </div>
        </div>
    );
}
