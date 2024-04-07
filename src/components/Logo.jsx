import React from 'react';
import logopng from '../assets/Mega_Blogs.png';

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={logopng} className='rounded-full' width={width} alt="" />
    </div>
  )
}

export default Logo