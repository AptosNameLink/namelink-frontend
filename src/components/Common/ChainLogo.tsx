import AptosLogoWhite from '@src/assets/aptos-logo-white.svg';
import EthLogoWhite from '@src/assets/eth-logo-white.svg';
import { Chain } from '@src/types';
import React from 'react';

interface ChainLogoProps {
  chain: Chain;
  [key: string]: any;
}

function ChainLogo({ chain, ...props }: ChainLogoProps) {
  switch (chain) {
    case 'APTOS':
      return <AptosLogoWhite {...props} />;
    case 'ETHEREUM':
      return <EthLogoWhite {...props} />;
    default:
      return <EthLogoWhite {...props} />;
  }
}

export default ChainLogo;
