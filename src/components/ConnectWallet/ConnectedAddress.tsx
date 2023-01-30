import VerifiedIcon from '@src/assets/verified.svg';
import Image from 'next/image';
import React from 'react';

interface Props {
  name: string;
  LogoSvg: React.FC<React.SVGProps<SVGSVGElement>>;
  imgUrl: string;
  address: string;
}

function ConnectedAddress({ name, LogoSvg, imgUrl, address }: Props) {
  return (
    <div className="w-[341px] bg-namelink-gray-5 rounded-[24px] flex flex-col">
      <div className="flex justify-between items-center mx-[24px] mt-[24px] mb-[48px]">
        <h3 className="text-[34px] text-namelink-gray-0">{name}</h3>
        <LogoSvg />
      </div>
      <div className="flex justify-center items-center">
        <Image src={imgUrl} alt={'wallet logo'} width={'108px'} height={'108px'} layout={'fixed'} />
      </div>
      <div className="flex justify-between items-center h-[64px] mx-[14px] mt-[70px] mb-[24px] border-[1px] rounded-full border-namelink-primary px-[24px]">
        <p className="text-[20px] text-namelink-gray-1">{address}</p>
        <VerifiedIcon />
      </div>
    </div>
  );
}

export default ConnectedAddress;
