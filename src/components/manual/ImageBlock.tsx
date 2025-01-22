import React from 'react'
import Image from 'next/image';

interface ImageBlockProps {
    src: string;
    alt: string;
    caption: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ src, alt, caption }) => {
    return (
        <figure className='container mx-auto mxFlexCenter flex-col mb-12'>
            <Image
                src={src}
                alt={alt}
                width={16}
                height={9}
                layout='responsive'
                priority={true}
                className='rounded-lg border-3 border-avaBlack max-w-[80%] lg:max-w-[60%] shadow-md'
            />
            <figcaption className='mt-3 text-center italic text-[8px] lg:text-[10px] tracking-[0.5px] font-avaLight'>{caption}</figcaption>
        </figure>
    )
}

export default ImageBlock;