import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavbar } from "../utils/navbar-context";
import { SlHome } from "react-icons/sl"
import ShowNav from "./ShowNav";
import '../css/Nav.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Nav flex justify-center items-center text-lg p-3">
            <ul className='container flex justify-between items-center h-full '>
                <li className='w-10'></li>
                <li className='text-2xl'><Link to="/">총선거</Link></li>
                <li className={`off-screen-menu ${isOpen ? 'open fixed slideInDown' : 'hidden'} w-full tracking-[1px]`}>
                    {isOpen && (
                        <ShowNav setIsOpen={setIsOpen} />
                    )}
                </li>
                <li className={`hamburger-menu ${isOpen ? 'active' : ''} cursor-pointer z-20 navVersion`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="ham-bar bar-top menugreen"></div>
                    <div className="ham-bar bar-mid menugreen"></div>
                    <div className="ham-bar bar-bottom menugreen"></div>
                </li>
            </ul >
        </div >
    )
}

export default Navbar;