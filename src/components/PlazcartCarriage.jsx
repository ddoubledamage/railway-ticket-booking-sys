import plazcart from '/icons/plazcartCarriageOverlay.png';
import SeatButtons from "./SeatButtons.jsx";

export default function PlazcartCarriage() {
    return (
        <div className="relative w-[920px] h-[145px]">
            <img
                src={plazcart}
                alt=""
                className="absolute top-0 left-0 w-[920px] h-[145px] object-contain pointer-events-none z-0"
            />
            <SeatButtons/>
        </div>

    )
}
