import React from 'react';
import LogoTextWhite from '../../assets/LogoTextWhite.svg';
import Instagram from '../../assets/Instagram.svg';
import Social2 from '../../assets/Social2.svg';
import RedSocialX from '../../assets/RedSocialX.svg';
import Youtube from '../../assets/Youtube.svg';
import Title from '../Atoms/Title/Title';

const Footer = () => {
    return (
        <>
            <div className="mt-5 h-auto w-full bg-[#263238] flex flex-wrap justify-center gap-50 p-5">
                {/* Sección Izquierda */}
                <div className="flex flex-col items-center md:items-start mt-10">
                    <div className="flex flex-col gap-5 w-[350px] h-auto text-center md:text-left">
                        <div>
                            <img src={LogoTextWhite} alt="LogoTextWhite" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <p className="text-[14px] text-[#F5F7FA]">
                                Copyright © 2020 Nexcent Ltd.
                            </p>
                            <p className="text-[14px] text-[#F5F7FA]">All rights reserved</p>
                        </div>
                        <div className="flex justify-center md:justify-start gap-2">
                            <img src={Instagram} alt="Instagram" />
                            <img src={Social2} alt="Social2" />
                            <img src={RedSocialX} alt="RedSocialX" />
                            <img src={Youtube} alt="Youtube" />
                        </div>
                    </div>
                </div>

                {/* Sección Derecha */}
                <div className="flex flex-wrap justify-center md:justify-start gap-10 w-full md:w-auto mt-10">
                    {/* Columna 1 */}
                    <div className="flex flex-col gap-5 w-[160px]">
                        <Title text="Company" fontSize="20px" color="#FFFFFF" align="left" />
                        <div className="flex flex-col gap-3 text-[#F5F7FA] text-[14px]">
                            <p>About us</p>
                            <p>Blog</p>
                            <p>Contact us</p>
                            <p>Pricing</p>
                            <p>Testimonials</p>
                        </div>
                    </div>

                    {/* Columna 2 */}
                    <div className="flex flex-col gap-5 w-[160px]">
                        <Title text="Support" fontSize="20px" color="#FFFFFF" align="left" />
                        <div className="flex flex-col gap-3 text-[#F5F7FA] text-[14px]">
                            <p>Help center</p>
                            <p>Terms of service</p>
                            <p>Legal</p>
                            <p>Privacy policy</p>
                            <p>Status</p>
                        </div>
                    </div>

                    {/* Columna 3 */}
                    <div className="flex flex-col gap-5 w-[255px]">
                        <Title
                            text="Stay up to date"
                            fontSize="20px"
                            color="#FFFFFF"
                            align="left"
                        />
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full h-[40px] bg-white/20 rounded-[8px] p-2 text-[#D9DBE1] 
                    placeholder:text-[#D9DBE1] placeholder:font-normal placeholder:text-[14px]"
                                placeholder="Your email address"
                            />
                            <i className="bi bi-send cursor-pointer text-white absolute right-3 top-1/2 transform -translate-y-1/2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
