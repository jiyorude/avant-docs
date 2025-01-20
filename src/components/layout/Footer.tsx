import React from 'react';

const Footer: React.FC = () => {
    const now = new Date().getFullYear();
    
    return (
    <footer className="bg-avaBlack w-full mxFlexCenter">
        <p className='text-avaWhite font-avaLight text-xs py-2'>&copy; {now} - A Pixelated Point of View</p>
    </footer>
    )
};

export default Footer;