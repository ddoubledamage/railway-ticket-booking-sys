import { useLocation } from "react-router-dom";
import Ticket from "../components/Ticket";
import AsideMenu from "../components/AsideMenu.jsx";
import LastTicketsBlock from "../components/LastTicketsBlock.jsx";
import { Pagination } from "../components/Pagination.jsx";
import { useState } from "react";
import SeatsSelection from "../components/SeatsSelection.jsx";

function SearchPage() {
    const [selectedTicket, setSelectedTicket] = useState(null);
    const location = useLocation();
    console.log("location.state:", location.state);
    const routes = location.state?.routes || [];

    return (
        <div className="flex flex-row gap-24">
            <div>
                <div className="flex flex-col gap-24">
                    <AsideMenu />
                    <LastTicketsBlock />
                </div>
            </div>

            <div className="flex flex-col gap-14">
                {selectedTicket === null ? (
                    <>
                        {routes.length > 0 ? (
                            routes.map((item) => (
                                <Ticket
                                    key={item.departure._id || item.departure.train._id}
                                    item={item}
                                    onSelectSeats={() => setSelectedTicket(item)}
                                />
                            ))
                        ) : (
                            <p className="text-xl text-gray-500">
                                Ничего не найдено. Попробуйте изменить параметры.
                            </p>
                        )}
                        <Pagination />
                    </>
                ) : (
                    <SeatsSelection item={selectedTicket} onBack={() => setSelectedTicket(null)} />
                )}
            </div>
        </div>
    );
}

export default SearchPage;
