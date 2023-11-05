import { Link } from "react-router-dom";
import { useState } from "react";
import ShowNav from "./ShowNav";
import '../css/Nav.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Nav flex justify-center items-center text-lg p-3">
            <div className='w-10'></div>
            <ul className='container flex justify-center items-center h-full'>
                {/* <li className='w-10'><FiChevronLeft className='cursor-pointer' size={30} onClick={() => { navigate(-1) }} /></li> */}
                <li className='text-2xl'><Link to="/">총선거</Link></li>
                <li className={`off-screen-menu ${isOpen ? 'open fixed slideInDown' : 'hidden'} flex justify-center items-center w-full tracking-[1px]`}>
                    {isOpen && (
                        <ShowNav setIsOpen={setIsOpen} />
                    )}
                </li>
            </ul>
            <div className={`hamburger-menu ${isOpen ? 'active' : ''} cursor-pointer z-40 navVersion`} onClick={() => setIsOpen(!isOpen)}>
                <div className="ham-bar bar-top menugreen"></div>
                <div className="ham-bar bar-mid menugreen"></div>
                <div className="ham-bar bar-bottom menugreen"></div>
            </div>

        </div >
    )
}

export default Navbar;