import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src="../assets/Mega Blogs.png" className='rounded-full' width={width} alt="" />
    </div>
  )
}

export default Logo