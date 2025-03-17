import React from 'react'
import Title from '../Atoms/Title/Title'
import Cliente1 from '../../assets/Cliente1.svg'
import Cliente2 from '../../assets/Cliente2.svg'
import Cliente3 from '../../assets/Cliente3.svg'
import Cliente4 from '../../assets/Cliente4.svg'
import Cliente5 from '../../assets/Cliente5.svg'
import Cliente6 from '../../assets/Cliente6.svg'
import Cliente7 from '../../assets/Cliente7.svg'

const Clients = () => {
  return (
    <>
    <div className='mt-36' >
    <Title text="Our Clients" fontSize="36px" color="#4D4D4D" align="center" />
    <div>
        <p className="mt-5 font-normal text-[16px] leading-[24px] tracking-[0%] text-[#717171] text-center">We have been working with some Fortune 500+ clients</p>
    </div>
    <div className="mt-10 w-[1152px] h-[98px] flex justify-between items-center mx-auto">
      <div><img src={Cliente1} alt='Logo Cliente1' /></div>
      <div><img src={Cliente2} alt='Logo Cliente2' /></div>
      <div><img src={Cliente3} alt='Logo Cliente3' /></div>
      <div><img src={Cliente4} alt='Logo Cliente4' /></div>
      <div><img src={Cliente5} alt='Logo Cliente5' /></div>
      <div><img src={Cliente6} alt='Logo Cliente6' /></div>
      <div><img src={Cliente7} alt='Logo Cliente7' /></div>    
    </div>

    </div>
    </>
  )
}

export default Clients