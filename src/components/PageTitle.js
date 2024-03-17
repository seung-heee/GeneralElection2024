import '../App.css';
import { images } from '../utils/images';

const PageTitle = ({ title, line }) => {
    const LineShort = title === '미디어소프트웨어학과' || title === '글로벌경영기술대학' || title === '도시디자인정보공학과' 

    return (
        <>
            {line ?
                <>
                    <div className={`${LineShort ? 'TitleLineShort' : 'TItleIMG2'} w-full h-20 flex items-center justify-center relative z-20`}>
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