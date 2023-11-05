import PageTitle from "../PageTitle";
import { useLocation } from "react-router-dom";

const PledgeBook = () => {
    const location = useLocation();
    const title = location.state.title;

    return (
        <div>{title}</div>
    )
}

export default PledgeBook;