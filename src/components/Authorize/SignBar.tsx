import { Chain } from '@src/types';
import React from 'react';

import ChainLogo from '../Common/ChainLogo';

interface SignBarProps {
  chain: Chain;
  signature: string | undefined;
  setSignature: React.Dispatch<React.SetStateAction<string | undefined>>;
  randomValue: string;
  className?: string;
}

const chainInfo = {
  ETHEREUM: {
    shortName: 'ETH',
  },
  APTOS: {
    shortName: 'APT',
  },
};

function SignBar({ chain, signature, setSignature, randomValue, className }: SignBarProps) {
  const LOGGED_IN_INFO = `LOGGED IN ${chainInfo[chain].shortName}`;
  const SIGN_PRIVATE_KEY = 'SIGN PRIVATE KEY →';

  return (
    <div
      className={`w-[698px] h-[154px] rounded-[12px] bg-namelink-gray-5 flex flex-col justify-center px-[24px] ${className}`}
    >
      <div className="flex mb-[64px] items-center justify-between">
        <div className="flex h-[42px] items-center">
          <h3 className="mr-[15px] text-[34px] text-namelink-gray-0">{LOGGED_IN_INFO}</h3>
          <ChainLogo chain={chain} />
        </div>
        <button className="btn text-namelink-gray-0 bg-namelink-gray-7 rounded-[60px] outline-none border-none hover:bg-namelink-gray-7">
          {SIGN_PRIVATE_KEY}
        </button>
      </div>
      {signature ? (
        <div className="w-[654px] h-[6px] bg-namelink-primary rounded-[60px]" />
      ) : (
        <div className="w-[654px] h-[6px] bg-namelink-gray-4 rounded-[60px]" />
      )}
    </div>
  );
}

export default SignBar;
