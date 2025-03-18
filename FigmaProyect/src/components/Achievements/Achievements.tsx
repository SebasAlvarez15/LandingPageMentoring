import React from 'react'
import Title from '../Atoms/Title/Title'
import ImgAchievement1 from '../../assets/ImgAchievement1.png'
import ImgAchievement2 from '../../assets/ImgAchievement2.png'
import ImgAchievement3 from '../../assets/ImgAchievement3.svg'
import ImgAchievement4 from '../../assets/ImgAchievement4.svg'
const Achievements = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-center bg-[#F5F7FA] h-auto md:h-100 gap-10 md:gap-40 p-6' >
        <div className='mt-10 md:mt-30 text-center md:text-left'>
            <div>
                <Title text="Helping a local" fontSize="36px" color="#4D4D4D" align="left" />
                <Title text="business reinvent itself" fontSize="36px" color="#4CAF4F" align="left" />
            </div>
            <div className='mt-1'>
            <p className='font-inter font-normal text-[16px] leading-[24px] tracking-[0%] text-[#717171]'>We reached here with our hard work and dedication</p>
            </div>
            
        </div>
        <div className='mt-10 flex flex-wrap justify-center md:justify-start'>
            <div className="w-1/2 sm:w-1/3 md:w-1/2 flex items-center gap-2">
            <img src={ImgAchievement1} alt='ImgAchievement1' />
                <div className='flex flex-col'>
                <Title text="2,245,341" fontSize="28px" color="#4D4D4D" align="left" />
                <p className='font-inter font-normal text-[16px] leading-[24px] tracking-[0%] text-[#717171]'>Members</p>
                </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/2 flex items-center gap-2">
            <img src={ImgAchievement2} alt='ImgAchievement2' />
                <div className='flex flex-col'>
                <Title text="46,328" fontSize="28px" color="#4D4D4D" align="left" />
                <p className='font-inter font-normal text-[16px] leading-[24px] tracking-[0%] text-[#717171]'>Clubs</p>
                </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/2 flex items-center gap-2">
            <img src={ImgAchievement3} alt='ImgAchievement3' />
                <div className='flex flex-col'>
                <Title text="828,867" fontSize="28px" color="#4D4D4D" align="left" />
                <p className='font-inter font-normal text-[16px] leading-[24px] tracking-[0%] text-[#717171]'>Event Bookings</p>
                </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/2 flex items-center gap-2">
            <img src={ImgAchievement4} alt='ImgAchievement4' />
            <div className='flex flex-col'>
            <Title text="1,926,436" fontSize="28px" color="#4D4D4D" align="left" />
            <p className='font-inter font-normal text-[16px] leading-[24px] tracking-[0%] text-[#717171]'>Payments</p>
            </div>
            </div>  
        </div>
    </div>
    </>
  )
}

export default Achievements