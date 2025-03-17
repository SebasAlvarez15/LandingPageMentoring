import React from 'react'
import Title from '../Atoms/Title/Title'
import Button from '../Atoms/Button/Button'
import imgUnlock from '../../assets/imgUnlock.png'

const Unlock = () => {
  return (
    <>
    <div className='flex flex-row justify-center h-150 gap-30' >
    <div className='mt-20'>
            <img src={imgUnlock} alt='imgUnlock' />

        </div>
        <div className='mt-40'>
            <div>
                <Title text="The unseen of spending three" fontSize="36px" color="#4D4D4D" align="left" />
                <Title text="years at Pixelgrade" fontSize="36px" color="#4D4D4D" align="left" />
            </div>
            <div className='mt-2'>
            <p className='font-inter font-normal text-[14px] leading-[24px] tracking-[0%] text-[#717171]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br /> accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br /> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br /> quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            </div>
            <div className='mt-5'>
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