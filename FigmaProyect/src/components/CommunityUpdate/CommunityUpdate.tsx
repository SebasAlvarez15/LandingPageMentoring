import React from 'react';
import Title from '../Atoms/Title/Title';
import CommunityUpdate1 from '../../assets/CommunityUpdate1.png';
import CommunityUpdate2 from '../../assets/CommunityUpdate2.png';
import CommunityUpdate3 from '../../assets/CommunityUpdate3.png';
import Right from '../../assets/Right.svg';

const CommunityUpdate = () => {
    return (
        <>
            {/**Div contiene todo */}
            <div className="mt-10 h-auto">
                {/**Div contiene Titulo */}
                <div className="flex flex-col items-center justify-center text-center mx-auto w-full">
                    <Title
                        text={'Caring is the new marketing'}
                        fontSize="36px"
                        color="#4D4D4D"
                        align="center"
                    />
                    <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-center text-[#717171] mt-4 max-w-[628px]">
                        The Nexcent blog is the best place to read about the latest membership
                        insights, trends and more. See who's joining the community, read about how
                        our community are increasing their membership income and lot's more.​
                    </p>
                </div>

                {/**Div contiene Cards */}
                <div className="mt-15 w-full max-w-[1152px] flex flex-wrap justify-center md:justify-between items-center mx-auto gap-10 md:gap-0">
                    <div className="relative flex flex-col items-center max-w-[285px]">
                        <img
                            src={CommunityUpdate1}
                            alt="Logo CommunityUpdate1"
                            className="h-auto max-h-[286px] max-w-[368px]"
                        />
                        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-[#F5F7FA] rounded-lg p-5 shadow-lg w-[110%] h-auto text-center">
                            <Title
                                text={'Creating Streamlined Safeguarding Processes with OneRen'}
                                fontSize="20px"
                                color="#4D4D4D"
                                align="center"
                            />
                            <div className="flex justify-center gap-2">
                                <Title
                                    text={'Readmore'}
                                    fontSize="20px"
                                    color="#4CAF4F"
                                    align="center"
                                />
                                <img
                                    src={Right}
                                    alt="Right"
                                    className="mt-0.5 max-w-[24px] md:max-w-[32px] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center max-w-[285px]">
                        <img
                            src={CommunityUpdate2}
                            alt="Logo CommunityUpdate2"
                            className="h-auto max-h-[286px] max-w-[368px]"
                        />
                        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-[#F5F7FA] rounded-lg p-5 shadow-lg w-[110%] h-auto text-center">
                            <Title
                                text={
                                    'What are your safeguarding responsibilities and how can you manage them?'
                                }
                                fontSize="20px"
                                color="#4D4D4D"
                                align="center"
                            />
                            <div className="flex justify-center gap-2">
                                <Title
                                    text={'Readmore'}
                                    fontSize="20px"
                                    color="#4CAF4F"
                                    align="center"
                                />
                                <img
                                    src={Right}
                                    alt="Right"
                                    className="mt-0.5 max-w-[24px] md:max-w-[32px] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center max-w-[285px]">
                        <img
                            src={CommunityUpdate3}
                            alt="Logo CommunityUpdate3"
                            className="h-auto max-h-[286px] max-w-[368px]"
                        />
                        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-[#F5F7FA] rounded-lg p-5 shadow-lg w-[110%] h-auto text-center ">
                            <Title
                                text={'Revamping the Membership Model with Triathlon Australia'}
                                fontSize="20px"
                                color="#4D4D4D"
                                align="center"
                            />
                            <div className="flex justify-center gap-2">
                                <Title
                                    text={'Readmore'}
                                    fontSize="20px"
                                    color="#4CAF4F"
                                    align="center"
                                />
                                <img
                                    src={Right}
                                    alt="Right"
                                    className="mt-0.5 max-w-[24px] md:max-w-[32px] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommunityUpdate;
