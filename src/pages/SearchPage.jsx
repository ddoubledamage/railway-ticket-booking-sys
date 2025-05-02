import Ticket from '../components/Ticket';
import AsideMenu from "../components/AsideMenu.jsx";
import LastTicketsBlock from "../components/LastTicketsBlock.jsx";
import {Pagination} from "../components/Pagination.jsx";

function SearchPage() {
    return (
        <div className="flex flex-row gap-24">
            <div>
                <div className="flex flex-col gap-24">
                    <AsideMenu/>
                    <LastTicketsBlock/>
                </div>
            </div>

            <div className="flex flex-col gap-14">
            <Ticket/>
                <Ticket/>
                <Ticket/>
                <Ticket/>
                <Ticket/>
                <Pagination/>
            </div>

        </div>
    )
}

export default SearchPage