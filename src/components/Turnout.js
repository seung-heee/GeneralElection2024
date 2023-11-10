import { useState } from 'react';
import Candidates from '../json/Candidates.json';
import { APIClient } from '../utils/Auth';
import { GrDocumentUpdate } from 'react-icons/gr';
import { useEffect } from 'react';

const Turnout = () => {
    const [updateDate, setUpdateDate] = useState("2023-11-20");
    const [updateTime, setUpdateTime] = useState("00:00:00");
    const [voteRates, setVoteRates] = useState({});

    // 업데이트 일시
    const refresh = async () => {
        try {
            const response = await APIClient().get('/refresh');
            setUpdateDate(response.date);
            setUpdateTime(response.time)

        } catch (error) {
            console.error(error);
        }
    }

    // 투표율
    const rate = async () => {
        try {
            const response = await APIClient().get('/rate');
            setVoteRates(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await refresh();
            await rate();
        };

        fetchData();
    }, [])

    return (
        <>
            <div className="">
                <div className='text-center italic mb-2 flex items-center justify-center text-sm'><GrDocumentUpdate className='mr-1' />업데이트 일시 : {updateDate} {updateTime}</div>
                <div className='grid grid-cols-3 w-11/12 mx-auto text-center grid-rows-3 border-2 border-black'>
                    <div className='text-center row-span-1 flex items-center justify-center bg-gray-100 text-lg'>단과대학</div>
                    {Candidates.map((candidate) => (
                        candidate.CandidateForDepartment === false ?
                            <div className="flex flex-col">
                                <p className="bg-gray-200 p-1 break-keep grow text-sm">{candidate.department}</p>
                                <p className="p-1 bg-white border-gray-100">{voteRates[candidate.department]}%</p>
                            </div> : null
                    ))}
                </div>

                <div className='grid grid-cols-3 w-11/12 mx-auto text-center mt-4 border-2 border-black'>
                    <div className='text-center row-span-1 flex items-center justify-center bg-gray-100 text-lg'>학부(과)</div>
                    {Candidates.map((candidate) => (
                        candidate.CandidateForDepartment === true ?
                            <div className="flex flex-col">
                                <p className={`bg-gray-200 p-1 break-keep grow flex items-center justify-center
                                        ${candidate.department === '미디어소프트웨어학과' ? 'text-xs' : 'text-sm'}`}>
                                    {candidate.department}</p>
                                <p className="p-1 bg-white">{voteRates[candidate.department]}%</p>
                            </div> : null
                    ))}
                </div>
            </div>
        </>
    )
}

export default Turnout;