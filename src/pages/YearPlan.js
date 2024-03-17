import React from 'react';
import { useLocation } from 'react-router-dom';

const YearPlan = () => {
  const location = useLocation();
  const title = location.state.title;

  const YearPlanImg = process.env.PUBLIC_URL + `/assets/img/byImg/YearPlan/${title}.png`

  return (
    <div className='relative z-10'>
      <img src={YearPlanImg} alt="" />
    </div>
  );
};

export default YearPlan;