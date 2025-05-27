import PassengersList from "../components/PassangersList.jsx";
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";

function PassengersInfoPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/payment");
    }

    return (
        <div className="flex flex-col">
            <PassengersList/>
            <Button variant="next" size="large" className="ml-auto" text="Далее" onClick={handleClick} />
        </div>
    )
}

export default PassengersInfoPage;