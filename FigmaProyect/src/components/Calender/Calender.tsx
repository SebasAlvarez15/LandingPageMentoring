import React from 'react'
import Title from '../Atoms/Title/Title'
import Button from '../Atoms/Button/Button'
import pana from '../../assets/pana.png'

const Calender = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-center items-center h-auto md:h-150 gap-10 md:gap-30 p-5'>
    <div className='mt-10 md:mt-20 flex justify-center'>
        <img src={pana} alt='pana' className='max-w-full h-auto md:max-w-[500px]' />
    </div>
    <div className='mt-10 md:mt-40 text-center md:text-left'>
        <div>
            <Title text="How to design your site footer like " fontSize="36px" color="#4D4D4D" align="left" />
            <Title text="we did" fontSize="36px" color="#4D4D4D" align="left" />
        </div>
        <div className='mt-2'>
            <p className='font-inter font-normal text-[14px] leading-[24px] tracking-[0%] text-[#717171] max-w-[601px]'>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
        </div>
        <div className='mt-5 flex justify-center md:justify-start'>
            <Button
                backgroundColor="#4CAF4F"
                textColor="#FFFFFF"
                title="Learn More"
                width={151}
                height={52}
                onClick={() => console.log("Clicked!")}
                loading={false}
            />
        </div>
    </div>
</div>
    </>
  )
}

export default Calender