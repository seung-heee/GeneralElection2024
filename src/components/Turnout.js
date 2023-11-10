import Candidates from '../json/Candidates.json';

const Turnout = () => {
    return (
        <>
            <div className="">
                <div className='grid grid-cols-3 w-11/12 mx-auto text-center grid-rows-3 border-2 border-black'>
                    <div className='text-center row-span-1 flex items-center justify-center bg-gray-100 text-lg'>단과대학</div>
                    {Candidates.map((candidate) => {
                        return (
                            <>
                                {candidate.CandidateForDepartment === false ?
                                    <><div className="flex flex-col">
                                        <p className="bg-gray-200 p-1 break-keep grow text-sm">{candidate.department}</p>
                                        <p className="p-1 bg-white border-gray-100">52.4%</p>
                                    </div></> : ''}
                            </>
                        )
                    })}
                </div>

                <div className='grid grid-cols-3 w-11/12 mx-auto text-center mt-4 border-2 border-black'>
                    <div className='text-center row-span-1 flex items-center justify-center bg-gray-100 text-lg'>학부(과)</div>
                    {Candidates.map((candidate) => {
                        return (
                            <>
                                {candidate.CandidateForDepartment === true ?
                                    <><div className="flex flex-col">
                                        <p className={`bg-gray-200 p-1 break-keep grow flex items-center justify-center
                                        ${candidate.department === '미디어소프트웨어학과' ? 'text-xs' : 'text-sm'}`}>
                                            {candidate.department}</p>
                                        <p className="p-1 bg-white">52.4%</p>
                                    </div></> : ''}
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Turnout;