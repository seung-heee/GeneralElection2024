import '../App.css';
import Back from '../components/Back';
import MainNav from '../components/MainNav';

const Main = () => {
    return (
        <div className='min-h-screen relative'>
            <Back />
            <MainNav />

            <div className='flex flex-col text-center justify-center items-center h-screen'>
                <p className='text-xl'>2024</p>
                <p className='text-5xl Maintitle text-center my-10'>총선거</p>
                <p className='text-2xl mb-3'>학생자치기구의 새로운 도약</p>
                <div className='Font_gmarket mb-48'>
                    <p>2023.11.20-11.22</p>
                    <p>학생회관 4층 체육관</p>
                </div>
            </div>
        </div>
    )
}
export default Main;