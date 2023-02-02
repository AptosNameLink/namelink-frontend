import InfoCircle from '@src/assets/Icon/info.svg';
import copy from 'copy-to-clipboard';
import React from 'react';

interface HashProps {
  hash: string;
}

function HashValue({ hash }: HashProps) {
  return (
    <div className="flex items-center w-fit h-[48px] bg-namelink-gray-6 rounded-[12px] px-[20px]">
      <InfoCircle />
      <p className="text-namelink-primary text-[18px] ml-[8px]">hash value(IPFS)</p>
      <p className="text-namelink-gray-3 text-[14px] ml-[40px] mr-[20px]">{hash}</p>
      <button
        className="bg-[url('/assets/icon_copy.svg')] w-[18px] h-[18px]"
        onClick={() => copy(hash)}
      />
    </div>
  );
}

export default HashValue;
