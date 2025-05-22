import {useState} from "react";

export default function TicketQuantityItem({ MAX_SEATS, label, description }) {
        const [seats, setSeats] = useState(0);
        const handleChange = (e) => {
            let value = e.target.value;
            value = value.replace(/^0+/, '');

            if (!isNaN(value)) {
                if (value <= MAX_SEATS && value >= 0) {
                    setSeats(value);
                } else if (value > MAX_SEATS) {
                    setSeats(MAX_SEATS);
                } else {
                    setSeats(0);
                }
            } else {
                setSeats(0);
            }
        }

        return (
            <div className="min-h-44 pt-5 px-9 flex flex-col border border-white hover:border hover:border-yellow-chromatic focus-within:bg-gray-light">
                <label className="flex flex-row items-center w-60 border rounded px-4 bg-white">
                    <span>{label}</span>
                    <input type="number"
                           min="0"
                           className="w-60 h-12"
                           value={seats}
                           max={MAX_SEATS}
                           onChange={handleChange}
                           onInput={(e) => {
                               if (e.target.value > MAX_SEATS) setSeats(0);
                           }}
                    />
                </label>
                    <p className="pt-3 text-base">{description(MAX_SEATS - seats)}</p>
            </div>
        )
}