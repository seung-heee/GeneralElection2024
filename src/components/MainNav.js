import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import '../css/Nav.css';


const ShowNav = ({ setIsOpen }) => {
    const closeNav = () => {
        setIsOpen(false)
    }
    return (
        <div className="ShowNav relative w-full">
            <ul className="min-h-screen flex flex-col items-center justify-center gap-y-6 text-3xl">
                <div className="NavTitle mb-10">총선거</div>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="/Election" onClick={closeNav}>총선거란</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="/Candidate" onClick={closeNav}>입후보자 정보</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="/Map" onClick={closeNav}>배치도</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="/Voting" onClick={closeNav}>투표율</Link></li>
                <li className="hover:textShadow duration-500 hover:translate-y-[-5px] NavBtn"><Link to="/About" onClick={closeNav}>만든이들</Link></li>
            </ul>
        </div>
    )
}

const MainNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="Nav flex justify-center items-center text-lg p-3">
            <ul className='container flex justify-center items-center h-full '>

                {location.pathname !== '/' &&
                    <>
                        <li className="text-2xl w-10"></li>
                        <li className="text-2xl"><Link to='/'>총선거</Link></li>
                    </>}
                <li className={`off-screen-menu ${isOpen ? 'open fixed fade-in-top ' : 'hidden'} flex justify-center items-center tracking-[1px]`}>
                    {isOpen && (
                        <ShowNav setIsOpen={setIsOpen} />
                    )}
                </li>
            </ul >
            <div className={`hamburger-menu ${isOpen ? 'active' : ''} cursor-pointer z-40 navVersion`} onClick={() => setIsOpen(!isOpen)}>
                <div className="ham-bar bar-top menugreen"></div>
                <div className="ham-bar bar-mid menugreen"></div>
                <div className="ham-bar bar-bottom menugreen"></div>
            </div>

        </div >
    )
}

export default MainNav;