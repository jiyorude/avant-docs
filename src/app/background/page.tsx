import React from 'react';
import ManualHeader from '@/components/manual/ManualHeader';
import IntroBlock from '@/components/manual/IntroBlock';
import TextBlock from '@/components/manual/TextBlock';
import ImageBlock from '@/components/manual/ImageBlock';
import { SiBookstack } from "react-icons/si"; 

export default function Background() {
    return (
        <main className='container mx-auto'>
            <ManualHeader 
                header='BACKGROUND'
                mode='white-teal'
                ariaLabel="Page containing background information about the avant algorithm"
            />
            <IntroBlock
                title="Let's get started!"
                icon={<SiBookstack size={40} className='fill-avaTeal size-[40px] lg:size-[50px]'/>}
                subtext="This chapter in the documentation provides a comprehensive understanding of the Avant Algorithm. How does it work? Why was it created? What is its purpose? What are its features? How can it help streamline your production workflow? In addition to explaining the algorithm’s functionality, this chapter will also delve into the design choices and key aspects of my workflow that influenced its development. You’ll gain insight into the decisions that shaped its creation and how it fits into the broader context of experimental machinima production."
            ></IntroBlock>
            <TextBlock
                header='What is the Avant Algorithm?'
                text_one='lorem ipsum dolar sit amet all day'
                text_two='lorem ipsum dolar sit amet all night'
            />
            <ImageBlock
                src='/images/test.jpg'
                alt='Avant Algorithm'
                caption='Figure 1: The Avant Algorithm in action'
            />
        </main>
    )
}