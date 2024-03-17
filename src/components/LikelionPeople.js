import { Link } from "react-router-dom";
import { images } from '../utils/images';
import Person from "./Person";
import { AiOutlineInstagram } from 'react-icons/ai';


const LikelionPeople = () => {
    return (
        <div>
            <div className="my-3">
                <div className="text-center"><img src={images.LikelionLogo} alt='likelionLogo' className="w-14 mx-auto mb-1" /></div>
                <p className="text-sm">성결대학교 멋쟁이사자처럼 12기</p>
                <p className="text-sm"><Link to='https://www.instagram.com/likelion_sku/' target="_blank" className="flex items-center justify-center"><AiOutlineInstagram className="mr-1" /><span>Likelion_sku</span></Link></p>
            </div>

            <div className="grid grid-cols-3">
                <Person id={2} />
                <Person id={1} />
                <Person id={3} />
            </div>
        </div>
    )
}

export default LikelionPeople;