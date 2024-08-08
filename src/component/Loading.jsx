import React from 'react'
import { Circles } from 'react-loader-spinner';
export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <Circles 
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="loading"
      />
    </div>
  );
};