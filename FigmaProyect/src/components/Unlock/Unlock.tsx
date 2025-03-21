import React from 'react'
import Title from '../Atoms/Title/Title'
import Button from '../Atoms/Button/Button'
import imgUnlock from '../../assets/imgUnlock.png'

const Unlock = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-center items-center h-auto md:h-150 gap-10 md:gap-30 p-5'>
    <div className='mt-10 md:mt-20 flex justify-center'>
        <img src={imgUnlock} alt='imgUnlock' className='max-w-full h-auto md:max-w-[500px]' />
    </div>
    <div className='mt-10 md:mt-40 text-center md:text-left'>
        <div>
            <Title text="The unseen of spending three" fontSize="36px" color="#4D4D4D" align="left" />
            <Title text="years at Pixelgrade" fontSize="36px" color="#4D4D4D" align="left" />
        </div>
        <div className='mt-2'>
            <p className='font-inter font-normal text-[14px] leading-[24px] tracking-[0%] text-[#717171] max-w-[601px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed 
                accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed 
                porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam 
                quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
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

export default Unlock