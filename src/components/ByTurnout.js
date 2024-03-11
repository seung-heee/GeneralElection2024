import { useState } from 'react';
import Candidates from '../json/Candidates.json';
import ByCandidates from '../json/ByCandidates.json';
import { APIClient } from '../utils/Auth';
import { GrDocumentUpdate } from 'react-icons/gr';
import { BsCheck2Circle } from 'react-icons/bs';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiClick } from 'react-icons/gi';
import BottomTextOnly from './BottomTextOnly';

const ByTurnout = () => {
    const navigate = useNavigate();

    const [updateDate, setUpdateDate] = useState("2023-11-20");
    const [updateTime, setUpdateTime] = useState("00:00:00");
    const [voteRates, setVoteRates] = useState({});

    // 업데이트 일시
    const refresh = async () => {
        try {
            const response = await APIClient().get('/refresh/');
            setUpdateDate(response.data.date);
            setUpdateTime(response.data.time);
        } catch (error) {
            console.error(error);
        }
    }

    // 투표율
    const rate = async () => {
        try {
            const response = await APIClient().get('/rate/');
            setVoteRates(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await rate();
            await refresh();
        };

        fetchData();
    }, [])

    return (
        <>
            <div>
                <div className='text-center italic mb-2 flex items-center justify-center text-sm'><GrDocumentUpdate className='mr-1' />업데이트 일시 : {updateDate} {updateTime}</div>
                <div className='grid grid-cols-3 w-11/12 mx-auto text-center grid-rows-2 border-2 border-black'>
                    <div className='text-center row-span-1 flex items-center justify-center bg-gray-100 text-lg'>단과대학</div>
                    {ByCandidates.map((candidate) => (
                        candidate.CandidateForDepartment === false && candidate.Manifesto !== "" ?
                            <div className="flex flex-col">
                                <p className="bg-gray-200 p-1 break-keep grow text-sm">{candidate.department}</p>
                                <p className="p-1 bg-white flex items-center justify-center">
                                    {voteRates[candidate.department] >= 50.0 ? <BsCheck2Circle color='green' className='mr-1' /> : ''}
                                    {voteRates[candidate.department]}%
                                </p>
                            </div> : null
                    ))}
                </div>

                <div className='grid grid-cols-3 w-11/12 mx-auto text-center mt-4 border-2 border-black'>
                    <div className='text-center row-span-1 flex items-center justify-center bg-gray-100 text-lg'>학부(과)</div>
                    {ByCandidates.map((candidate) => (
                        candidate.CandidateForDepartment === true ?
                            <div className="flex flex-col">
                                <p className={`bg-gray-200 p-1 break-keep grow flex items-center justify-center 
                                        ${candidate.department === '미디어소프트웨어학과' ? 'text-xs' : 'text-sm'}`}>
                                    {candidate.department}
                                </p>
                                <p className="p-1 bg-white flex items-center justify-center">
                                    {voteRates[candidate.department] >= 50.0 ? <BsCheck2Circle color='green' className='mr-1' /> : ''}
                                    {voteRates[candidate.department]}%
                                </p>
                            </div> : null
                    ))}
                </div>


                <button onClick={() => { navigate('/ByCandidate') }}
                    className='text-2xl w-8/12 py-3 mt-4 rounded-3xl mainbtn flex justify-center items-center mx-auto'>
                    <span>입후보자 바로보기</span>
                    <GiClick className='ml-2' />
                </button>

                <BottomTextOnly />
                <div className="last"></div>
            </div>
        </>
    )
}

export default ByTurnout;