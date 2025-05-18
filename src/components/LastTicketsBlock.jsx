import LastTicketItem from "./LastTicketItem.jsx";
import {useEffect, useState} from "react";

function LastTicketsBlock () {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://students.netoservices.ru/fe-diplom/routes/last")
            .then(res => res.json())
            .then((data) => {
                setTickets(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log("Возникла проблема с загрузкой последних направлений", err);
                setError(err);
                setLoading(true);
            })
    },[])

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка загрузки</p>
    return (
        <div  className="flex flex-col gap-4">
            <h2 className="uppercase font-medium text-3xl">Последние билеты</h2>
            {tickets.slice(0,3).map((ticket, index) => (
                <LastTicketItem key={index}  item={ticket} />
            ))}
        </div>
    )
}

export default LastTicketsBlock;