import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavbar } from "../utils/navbar-context";
import { SlHome } from "react-icons/sl"
import ShowNav from "./ShowNav";
import '../css/Nav.css';

const MainNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Nav flex justify-center items-center text-lg p-3">
            <ul className='container flex justify-end items-center h-full '>
                <li className={`off-screen-menu ${isOpen ? 'open fixed slideInDown' : 'hidden'} flex justify-center items-center tracking-[1px]`}>
                    {isOpen && (
                        <ShowNav />
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