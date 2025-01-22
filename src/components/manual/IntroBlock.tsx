import React, { ReactElement } from 'react';

interface IntroBlockProps {
    title: string;
    icon: ReactElement;
    subtext: string;
}

const IntroBlock: React.FC<IntroBlockProps> = ({ title, icon, subtext }) => {
    return (
        <>
        <section className='container mx-auto mxFlexCenter mb-12'>
            <section className='lg:max-w-[60%] bg-avaWhite mx-12 lg:mx-0 p-6 grid lg:grid-rows-1 lg:grid-cols-6 rounded-lg shadow-lg'>
                <figure className='lg:col-span-1 lg:pr-4 py-4 lg:py-0 mxFlexCenter'>
                    {icon}
                </figure>
                <article className='lg:col-span-5 *:pb-2'>
                    <h2 className='font-avaBold text-lg lg:text-xl py-2 tracking-[0.5px] lg:text-left text-center'>{title}</h2>
                    <p className='leading-[20px] lg:leading-[25.5px] font-avaLight text-xs lg:text-sm lg:text-left text-center lg:max-w-[90%] text-pretty lg:text-balance'>{subtext}</p>
                </article>
            </section>
        </section>
        </>
    )
}

export default IntroBlock;