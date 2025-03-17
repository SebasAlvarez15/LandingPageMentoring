import React from 'react'
import Title from '../Atoms/Title/Title'
import Button from '../Atoms/Button/Button'
import ImgHeroSection from '../../assets/ImgHeroSection.png'
const HeroSection = () => {
  return (
    <>
    <div className='flex flex-row justify-center bg-[#F5F7FA] h-150 gap-40' >
        <div className='mt-30'>
            <div>
                <Title text="Lessons and insights" fontSize="64px" color="#4D4D4D" align="left" />
                <Title text="from 8 years" fontSize="64px" color="#4CAF4F" align="left" />
            </div>
            <div className='mt-5'>
            <p className='font-inter font-normal text-[16px] leading-[24px] tracking-[0%] text-[#717171]'>Where to grow your business as a photographer: site or social media?</p>
            </div>
            <div className='mt-8'>
            <Button
            backgroundColor="#4CAF4F"
            textColor="#FFFFFF"
            title="Register"
            width={128}
            height={52}
            onClick={() => console.log("Clicked!")}
            loading={false}
            />
            </div>
        </div>
        <div className='mt-20'>
            <img src={ImgHeroSection} alt='imgHeroSection' />

        </div>
    </div>
    </>
  )
}

export default HeroSection