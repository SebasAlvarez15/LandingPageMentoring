import React from 'react'
import Title from '../Atoms/Title/Title'
import Button from '../Atoms/Button/Button'
const PreFooter = () => {
  return (
    <div className='mt-30 bg-[#F5F7FA]'>
        {/**Div contiene Titulo */}
        <div className="flex flex-col items-center justify-center text-center mx-auto max-w-[887px] max-h-[330px]">
            <Title text={"Pellentesque suscipit fringilla libero eu."} fontSize="64px" color="#263238" align="center" />
            <div className='mt-5 flex justify-center md:justify-start'>
            <Button
                backgroundColor="#4CAF4F"
                textColor="#FFFFFF"
                title="Get a Demo"
                width={178}
                height={52}
                onClick={() => console.log("Clicked!")}
                loading={false}
            />
        </div>
        </div>
        </div>
  )
}

export default PreFooter