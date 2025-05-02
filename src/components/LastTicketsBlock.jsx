import LastTicketItem from "./LastTicketItem.jsx";

function LastTicketsBlock () {
    return (
        <div  className="flex flex-col gap-4">
            <h2 className="uppercase font-medium text-3xl">последние билеты</h2>
            <LastTicketItem/>
            <LastTicketItem/>
            <LastTicketItem/>
        </div>
    )
}

export default LastTicketsBlock;