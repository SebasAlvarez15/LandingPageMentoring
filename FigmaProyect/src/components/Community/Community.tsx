import React from 'react'
import Title from '../Atoms/Title/Title'
import Community1 from '../../assets/Community1.svg'
import Community2 from '../../assets/Community2.svg'
import Community3 from '../../assets/Community3.svg'

const Community = () => {
  return (
    <>
    {/**Div contiene todo */}
<div className='mt-10 h-auto'>
    {/**Div contiene Titulo */}
    <div className="text-center">
        <Title text={"Manage your entire community"} fontSize="36px" color="#4D4D4D" align="center" />
        <Title text={"in a single system"} fontSize="36px" color="#4D4D4D" align="center" />
        <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-center text-[#717171] mt-4">
            Who is Nextcent suitable for?
        </p>
    </div>

    {/**Div contiene Cards */}
    <div className='mt-15 w-full max-w-[1152px] flex flex-wrap justify-center md:justify-between items-center mx-auto gap-10 md:gap-0'>
        <div className='flex flex-col items-center max-w-[350px]'>
            <img src={Community1} alt='Logo Community1' className="h-auto max-h-[98px]" />
            <Title text={"Membership"} fontSize="28px" color="#4D4D4D" align="center" />
            <Title text={"Organisations"} fontSize="28px" color="#4D4D4D" align="center" />
            <p className="font-normal text-[14px] leading-[24px] tracking-[0%] text-center text-[#717171]">
                Our membership management <br />software provides full automation of <br />membership renewals and payments
            </p>
        </div>
        <div className='flex flex-col items-center max-w-[350px]'>
            <img src={Community2} alt='Logo Community2' className="h-auto max-h-[98px]" />
            <Title text={"National"} fontSize="28px" color="#4D4D4D" align="center" />
            <Title text={"Associations"} fontSize="28px" color="#4D4D4D" align="center" />
            <p className="font-normal text-[14px] leading-[24px] tracking-[0%] text-center text-[#717171]">
                Our membership management <br />software provides full automation of <br />membership renewals and payments
            </p>
        </div>
        <div className='flex flex-col items-center max-w-[350px]'>
            <img src={Community3} alt='Logo Community3' className="h-auto max-h-[98px]" />
            <Title text={"Clubs And "} fontSize="28px" color="#4D4D4D" align="center" />
            <Title text={"Groups"} fontSize="28px" color="#4D4D4D" align="center" />
            <p className="font-normal text-[14px] leading-[24px] tracking-[0%] text-center text-[#717171]">
                Our membership management <br />software provides full automation of <br />membership renewals and payments
            </p>
        </div>
    </div>
</div>
    </>
  )
}

export default Community