import React from 'react'
import Title from '../Atoms/Title/Title'
import ImgCustomers from '../../assets/ImgCustomers.png'
import Right from '../../assets/Right.svg'
import ImgCustomers1 from '../../assets/ImgCustomers1.png'

const Customers = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center bg-[#F5F7FA] h-auto md:h-150 gap-5 md:gap-15 p-5">
        <div className="md:mt-10 flex justify-center">
            <img src={ImgCustomers} alt="ImgCustomers" className="max-w-full h-auto md:max-w-[500px]" />
        </div>
        <div className="md:mt-5 text-center md:text-left w-full md:w-auto">
            <div className="mt-2">
                <p className="font-inter font-normal text-[14px] leading-[24px] tracking-[0%] text-[#717171] max-w-[748px] mx-auto md:mx-0">
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
            </div>
            <div className="mt-5">
                <Title text="Tim Smith" fontSize="20px" color="#4CAF4F" align="left" />
            </div>
            <div>
                <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[0%] text-[#717171] max-w-[748px] mx-auto md:mx-0">
                    British Dragon Boat Racing Association
                </p>
            </div>
            <div className="md:mt-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                <img src={ImgCustomers1} alt="ImgCustomers1" className="max-w-full h-auto md:max-w-[500px]" />
                <div className="flex items-center gap-2">
                    <Title text="Meet all customers" fontSize="20px" color="#4CAF4F" align="left" />
                    <img src={Right} alt="Right" className="mt-0.5 max-w-[24px] md:max-w-[32px] h-auto" />
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Customers