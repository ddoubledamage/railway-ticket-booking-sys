import { useEffect, useState } from "react";
import TicketPicker from "./TicketPicker.jsx";



function SeatsSelection({ item, onBack }) {
    // item — это выбранный билет (внутри него есть departure._id — id направления)
    const [coaches, setCoaches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSeats() {
            setLoading(true);
            const res = await fetch(
                `https://students.netoservices.ru/fe-diplom/routes/${item.departure._id}/seats`
            );
            const data = await res.json();
            setCoaches(data); // это массив, как ты показал выше
            setLoading(false);
        }
        if (item?.departure?._id) fetchSeats();
    }, [item]);

    if (loading) return <div>Загрузка схемы вагонов...</div>;

    return (
        <div>
            <button onClick={onBack} className="mb-5">← Назад</button>
            <TicketPicker coaches={coaches} />
        </div>
    );
}
export default SeatsSelection;
