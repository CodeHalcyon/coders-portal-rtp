import React from 'react'

const CommunityCard = () => {
  return (
    <>
      <div className='border-2 w-1/4'>
        <div>
            <img src="../../public/images/OMEN_PortalWP_04.jpg" alt="image here" />
        </div>
        <div className='border-2 '>
            <h1 className='text-xl font-bold'>AI Community</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores eaque, saepe laborum quidem impedit. Tempore optio earum aliquam dolorum doloremque dignissimos odit soluta quia eaque, inventore hic natus sapiente.</p>
            <a className='bg-green-400 p-4' href="#">Join community</a>
        </div>
      </div>
    </>
  )
}

export default CommunityCard
