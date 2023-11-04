import '../App.css';
import { images } from '../utils/images';

const PageTitle = ({ title, line }) => {
    return (
        <>
            {line ?
                <>
                    <div className='TItleIMG2 w-full h-20 flex items-center justify-center relative z-20'>
                        <div className="text-4xl text-center">
                            {title}
                        </div>
                    </div>
                </> :
                <>
                    <div className='TItleIMG w-full h-20 flex items-center justify-center relative z-20'>
                        <div className="text-4xl text-center mt-7">
                            {title}
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default PageTitle;