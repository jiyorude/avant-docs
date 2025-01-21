import React from 'react';

interface ManualHeaderProps {
  header: string;
  ariaLabel: string;
  mode: 'white-teal' | 'grey-black' | 'black-white' | 'red-grey' | 'teal-red' | 'red-white';
};

  const handleMode = (mode: ManualHeaderProps['mode']) => {
    switch (mode) {
      case 'white-teal':
        return 'bg-gradient-to-l from-avaTeal to-avaWhite';
      case 'grey-black':
        return 'bg-gradient-to-r from-avaGrey to-avaBlack';
      case 'black-white':
        return 'bg-gradient-to-l from-avaBlack to-avaWhite';
      case 'red-grey':
        return 'bg-gradient-to-r from-avaGrey to-avaRed';
      case 'teal-red':
        return 'bg-gradient-to-l from-avaTeal to-avaRed';
      case 'red-white':
        return 'bg-gradient-to-r from-avaRed to-avaRed';
      default:
        return 'bg-gradient-to-l from-avaTeal to-avaWhite'; 
    }
  }

const ManualHeader: React.FC<ManualHeaderProps> = ({ header, mode, ariaLabel }) => {
  const gradient = handleMode(mode);

  return (
    <header className="mx-auto container mxFlexCenter py-10" aria-label={ariaLabel}>
      <h1 className={`py-4 px-12 tracking-[2px] lg:tracking-[5px] ${gradient} select-none text-3xl lg:text-4xl font-avaBold inline-block text-transparent bg-clip-text`}>
        {header}
      </h1>
    </header>
  );
};

export default ManualHeader;