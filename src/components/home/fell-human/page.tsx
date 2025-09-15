import React from 'react';

const FellHuman = () => {
  return (
    <div
      className="w-full h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center relative"
      style={{ backgroundImage: `url('/assets/gallery2/gallery7.png')` }}
    >
      <div className='py-[170px] md:py-[330px] lg:py-[300px] px-4  sm:px-6 md:px-12'>
        <div className="bg-white max-w-[90%] sm:max-w-[400px] md:max-w-[500px] rounded-3xl p-6 sm:p-9 md:p-12 text-center">
          <button className="py-2 px-6 rounded-full bg-[#1313130f] mb-4">Personal Growth</button>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-bold'>Feel more human every day</h3>
        </div>
      </div>
    </div>
  );
};

export default FellHuman;
