import VerifiedIcon from '@src/assets/verified.svg';
import { Chain, WalletInfo } from '@src/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { SetterOrUpdater } from 'recoil';

interface ConnectedAddressProps {
  // name: string;
  // LogoSvg: React.FC<React.SVGProps<SVGSVGElement>>;
  chain: Chain;
  imgUrl: string;
  address: string;
  setWalletInfo: SetterOrUpdater<WalletInfo>;
}

function ConnectedAddress({ chain, imgUrl, address, setWalletInfo }: ConnectedAddressProps) {
  const DISCONNECT = 'DISCONNECT';
  const [over, setOver] = useState(false);

  const handleMouseOver = () => {
    setOver(true);
  };
  const handleMouseLeave = () => {
    setOver(false);
  };

  const handleDisconnected = () => {
    setWalletInfo(undefined);

    switch (chain) {
      case 'APTOS':
        localStorage.removeItem('aptosWalletInfo');
        break;
      case 'ETHEREUM':
        localStorage.removeItem('ethereumWalletInfo');
        break;
      default:
        throw new Error('Invalid chain');
    }
  };

  return (
    <div className="w-[341px] bg-namelink-gray-5 rounded-[24px] flex flex-col">
      <div className="flex justify-center items-center">
        <Image src={imgUrl} alt={'wallet logo'} width={'108px'} height={'108px'} layout={'fixed'} />
      </div>
      <button
        className="flex justify-between items-center h-[64px] mx-[14px] mt-[70px] mb-[24px] border-[1px] rounded-full border-namelink-primary px-[24px] hover:justify-center hover:bg-namelink-gray-0 hover:text-namelink-gray-8"
        onMouseOver={handleMouseOver}
        onFocus={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={handleDisconnected}
      >
        {over ? (
          <p className="text-[20px] text-namelink-gray-8">{DISCONNECT}</p>
        ) : (
          <>
            <p className="text-[20px] text-namelink-gray-1">
              {address.slice(0, 6)}...{address.slice(-3)}
            </p>
            <VerifiedIcon />
          </>
        )}
      </button>
    </div>
  );
}

export default ConnectedAddress;
