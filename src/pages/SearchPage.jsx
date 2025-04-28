import Ticket from '../components/Ticket';
import AsideMenu from "../components/AsideMenu.jsx";

function SearchPage() {
    return (
        <div className="flex flex-row justify-center items-center">
            <div>
                <div className="">
                    <AsideMenu/>
                </div>
            </div>

            <div>
                {/*Сверху будет ticketListInfo*/}
            <Ticket/>
            </div>

        </div>
    )
}

export default SearchPage