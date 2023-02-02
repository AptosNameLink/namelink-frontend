import React, { useEffect } from 'react';

interface RandomNumberBarProps {
  setRandomValue: React.Dispatch<React.SetStateAction<string>>;
  randomValue: string;
  className?: string;
}

function RandomNumberBar({ setRandomValue, randomValue, className }: RandomNumberBarProps) {
  const YOUR_RANDOM_NUMBER = 'YOUR RANDOM VALUE : ';

  useEffect(() => {
    setRandomValue('aptosgazua');
  }, [setRandomValue]);

  return (
    <div
      className={`w-[698px] h-[60px] rounded-[12px] bg-namelink-gray-5 flex  justify-between items-center px-[22px] ${className}`}
    >
      <p className="text-namelink-gray-1 text-[20px] font-semibold opacity-[0.25]">
        {YOUR_RANDOM_NUMBER}
      </p>
      <p className="text-namelink-gray-1 text-[20px] font-semibold">{randomValue}</p>
    </div>
  );
}

export default RandomNumberBar;
