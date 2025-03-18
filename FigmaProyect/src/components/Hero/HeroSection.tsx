import React from 'react'
import Title from '../Atoms/Title/Title'
import Button from '../Atoms/Button/Button'
import ImgHeroSection from '../../assets/ImgHeroSection.png'
const HeroSection = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-center items-center bg-[#F5F7FA] h-auto md:h-150 gap-10 md:gap-40 p-5'>
    <div className='mt-10 md:mt-30 text-center md:text-left'>
        <div>
            <Title text="Lessons and insights" fontSize="64px" color="#4D4D4D" align="left" />
            <Title text="from 8 years" fontSize="64px" color="#4CAF4F" align="left" />
        </div>
        <div className='mt-5'>
            <p className='font-inter font-normal text-[16px] leading-[24px] tracking-[0%] text-[#717171]'>
                Where to grow your business as a photographer: site or social media?
            </p>
        </div>
        <div className='mt-8 flex justify-center md:justify-start'>
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
    <div className='mt-10 md:mt-20 flex justify-center'>
        <img src={ImgHeroSection} alt='imgHeroSection' className='max-w-full h-auto md:max-w-[500px]' />
    </div>
</div>
    </>
  )
}

export default HeroSection