import React from 'react';
import Link from 'next/link';

interface ManualHeaderProps {
    header: string;
    subtext: string;
    difficulty: [1, 2, 3, 4, 5];
    returnHome: string;
    nextPage: string;
};


const handleDifficulty = (difficulty: number) => {
    // Work in progress
    switch (difficulty) {
        case 1:
            return (
                <figure className='mxCircle mxFlexCenter bg-avaWhite text-avaBlack border-2 border-avaBlack'>
                    <p className='font-avaRegular text-sm'>Very Easy</p>
                </figure>
            )

    }
}

const ManualHeader: React.FC<ManualHeaderProps> = ({ header, subtext, difficulty, returnHome, nextPage }) => {
    // WORK IN PROGRESS
    return (
        <header className='container mx-auto mxFlexCenter p-12 border border-black'>
            <h1 className='text-avaTeal font-avaSemiBold'>{header}</h1>
        </header>
    ) 
};

export default ManualHeader;