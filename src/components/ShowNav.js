import { Link } from "react-router-dom";
import Back from "./Back";

const ShowNav = () => {
    return (
        <div className="ShowNav relative">
            <Back />
            <ul className="min-h-screen flex flex-col items-center justify-center gap-y-6 text-3xl">
                <div className="NavTitle">총선거</div>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="/Election">총선거란</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="/Candidate">입후보자 정보</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="/Map">배치도</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="#">투표율</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="#">만든이들</Link></li>
            </ul>
        </div>
    )
}

export default ShowNav;