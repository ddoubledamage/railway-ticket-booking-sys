import Ticket from '../components/Ticket';
import AsideMenu from "../components/AsideMenu.jsx";
import LastTicketsBlock from "../components/LastTicketsBlock.jsx";
import {Pagination} from "../components/Pagination.jsx";
import {useState} from "react";
import SeatsSelection from "../components/SeatsSelection.jsx";


const ticketsData = [
    {
        train: { number: "123А", name: "Сапсан" },
        departure: {
            datetime: 1713763200,
            from: { city: { name: "Москва" }, railway_station_name: "Ленинградский вокзал" },
        },
        duration: 24600,
        arrival: {
            datetime: 1713787800,
            to: { city: { name: "С.-Петербург" }, railway_station_name: "Московский вокзал" },
        },
        seats_info: { first_class: 5, second_class: 10, third_class: 20, fourth_class: 0 },
        price_info: { first_class: 5000, second_class: 3000, third_class: 2000, fourth_class: 1500 },
        have_wifi: true,
        have_air_conditioning: true,
        is_express: false,
    },
];

function SearchPage() {
    const [selectedTicket,    setSelectedTicket]    = useState(null);
    return (
        <div className="flex flex-row gap-24">
            <div>
                <div className="flex flex-col gap-24">
                    <AsideMenu/>
                    <LastTicketsBlock/>
                </div>
            </div>

            <div className="flex flex-col gap-14">
                {selectedTicket === null ? (
                    <>
                        {ticketsData.map(item => (
                            <Ticket
                                key={item.train.number}
                                item={item}
                                onSelectSeats={() => setSelectedTicket(item)}
                            />
                        ))}
                        <Pagination/>
                    </>
                ) : (
                    <SeatsSelection
                        item={selectedTicket}
                        onBack={() => setSelectedTicket(null)}
                    />
                )}
            </div>

        </div>
    )
}

export default SearchPage