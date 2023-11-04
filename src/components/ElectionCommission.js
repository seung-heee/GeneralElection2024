import { Link } from "react-router-dom";
import { images } from '../utils/images';
import Person from "./Person";
import { AiOutlineInstagram } from 'react-icons/ai';

const ElectionCommission = () => {
    return (
        <div>
            <div className="my-3">
                <div className="text-center"><img src={images.LikelionLogo} alt='likelionLogo' className="w-14 mx-auto mb-1" /></div>
                <p className="text-sm">제 40대 선거관리위원회</p>
                <p className="text-sm"><Link to='#' className="flex items-center justify-center"><AiOutlineInstagram className="mr-1" /><span>Likelion_sku</span></Link></p>
            </div>

            <div className="grid grid-cols-2">
                <Person id={5} />
                <Person id={6} />
                <Person id={7} />
                <Person id={8} />
            </div>
        </div>
    )
}

export default ElectionCommission;