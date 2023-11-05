import PageTitle from "../PageTitle";
import { useLocation } from "react-router-dom";

const Manifesto = () => {
    const location = useLocation();
    const title = location.state.title;

    return (
        <div>{title}</div>
    )
}

export default Manifesto;