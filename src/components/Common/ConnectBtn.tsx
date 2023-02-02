import AllConnected from '@src/assets/Icon/AllConnected.svg';
import AllMaped from '@src/assets/Icon/AllMaped.svg';
import Logged_In_APT from '@src/assets/Icon/Logged_In(APT).svg';
import Logged_In_ETH from '@src/assets/Icon/Logged_In(ETH).svg';
import useMounted from '@src/hooks/useMounted';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import ChainLogo from './ChainLogo';

/*
1. 이더 0 / 앱토스 X
2. 이더 X / 앱토스 0
3. 이더 0 / 앱토스 0
4. 이더 0 / 앱토스 0 / 맵핑 0
*/

function ConnectBtn() {
  const isMounted = useMounted();
  const CONNECT_WALLET = 'CONNECT WALLET';
  const LOGGED_IN = 'LOGGED IN';
  const [ethAddress, setEthAddress] = useState<string | null>(null);
  const [aptosAddress, setAptosAddress] = useState<string | null>(null);

  useEffect(() => {
    if (isMounted) {
      const ethWalletInfo = localStorage.getItem('ethereumWalletInfo');
      const aptosWalletInfo = localStorage.getItem('aptosWalletInfo');

      setEthAddress(ethWalletInfo ? JSON.parse(ethWalletInfo).address : null);
      setAptosAddress(aptosWalletInfo ? JSON.parse(aptosWalletInfo).address : null);
    }
  }, [isMounted]);
  if (ethAddress && !aptosAddress)
    return (
      <label
        htmlFor="my-modal"
        className="btn rounded-[60px]  border-namelink-primary hover:border-namelink-primary border-[1px] text-namelink-primary bg-namelink-gray-5 hover:bg-namelink-gray-6"
      >
        <ChainLogo chain="ETHEREUM" />
        {LOGGED_IN}
      </label>
    );
  if (!ethAddress && aptosAddress)
    return (
      <label
        htmlFor="my-modal"
        className="btn rounded-[60px]  border-namelink-primary hover:border-namelink-primary border-[1px] text-namelink-primary bg-namelink-gray-5 hover:bg-namelink-gray-6"
      >
        <ChainLogo chain="APTOS" />
        {LOGGED_IN}
      </label>
    );
  if (ethAddress && aptosAddress)
    return (
      <label
        htmlFor="my-modal"
        className="btn relative w-fit bg-transparent outline-none hover:outline-none border-none hover:bg-transparent"
      >
        <div className="btn rounded-[60px] max-h-[46px] w-[130px] border-namelink-primary hover:border-namelink-primary border-[1px] text-namelink-primary bg-namelink-gray-5 hover:bg-namelink-gray-5 absolute flex justify-start ">
          <ChainLogo chain="APTOS" />
        </div>
        <div className="btn rounded-[60px]  border-namelink-primary hover:border-namelink-primary border-[1px] text-namelink-primary bg-namelink-gray-5 hover:bg-namelink-gray-5 z-10 left-[55px] relative">
          <ChainLogo chain="ETHEREUM" />
          {LOGGED_IN}
        </div>
      </label>
    );

  return (
    <label
      htmlFor="my-modal"
      className="btn w-[180px] h-[56px] bg-[#D9D5C2] rounded-[60px] font-['Inconsolata'] text-namelink-gray-8"
      id="connect"
    >
      {CONNECT_WALLET}
    </label>
  );
}

export default ConnectBtn;
