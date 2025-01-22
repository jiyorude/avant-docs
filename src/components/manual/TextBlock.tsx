import React from 'react';

interface TextBlockProps {
    header: string;
    text_one?: string;
    text_two?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ header, text_one, text_two }) => {
    return (
        <section className='container mx-auto mxFlexCenter mb-12'>
            <article className='lg:max-w-[60%] px-12 lg:px-0 py-4'>
                <h3 className='font-avaBold text-[12px] md:text-[13px] lg:text-[14px] py-2 tracking-[0.5px] lg:text-left text-center'>{header}</h3>
                <p className='py-2 w-full leading-[20px] lg:leading-[25.5px] font-avaLight text-xs lg:text-sm text-left text-pretty lg:text-pretty'>
                    {text_one}
                </p>
                <p className='py-2 leading-[20px] lg:leading-[25.5px] font-avaLight text-xs lg:text-sm text-left text-pretty lg:text-balance'>
                    {text_two}
                </p>
            </article>
        </section>
    )
}

export default TextBlock;