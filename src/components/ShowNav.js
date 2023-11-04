import { Link } from "react-router-dom";
import BottomTextOnly from "./BottomTextOnly";

const ShowNav = ({ setIsOpen }) => {
    const closeNav = () => {
        setIsOpen(false)
    }

    return (
        <div className="ShowNav relative">
            <ul className="min-h-screen flex flex-col items-center justify-center gap-y-6 text-3xl">
                <div className="NavTitle">총선거</div>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="/Election" onClick={closeNav}>총선거란</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="/Candidate" onClick={closeNav}>입후보자 정보</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="/Map" onClick={closeNav}>배치도</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="#" onClick={closeNav}>투표율</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="/About" onClick={closeNav}>만든이들</Link></li>
            </ul>
            <BottomTextOnly />
        </div>
    )
}

export default ShowNav;