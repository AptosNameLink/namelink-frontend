import AptosLogoWhite from '@src/assets/aptos-logo-white.svg';
import EthLogoWhite from '@src/assets/eth-logo-white.svg';
import MartianLogo from '@src/assets/icon_,martian.png';
import MetamaskLogo from '@src/assets/Metamask.png';
import ConnectedAddress from '@src/components/ConnectWallet/ConnectedAddress';
import { ModalType, WalletInfo } from '@src/types';
import React, { useEffect, useState } from 'react';

import SelectWallet from './SelectWallet';
interface ConnectWalletModalProps {
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
  aptosWalletInfo: WalletInfo | undefined;
  ethWalletInfo: WalletInfo | undefined;
  setAptosWalletInfo: React.Dispatch<React.SetStateAction<WalletInfo | undefined>>;
  setEthWalletInfo: React.Dispatch<React.SetStateAction<WalletInfo | undefined>>;
}
function ConnectWalletModal({
  setModalType,
  aptosWalletInfo,
  setAptosWalletInfo,
  ethWalletInfo,
  setEthWalletInfo,
}: ConnectWalletModalProps) {
  const MAPPING_ADDRESS = 'MAPPING YOUR ADDRESS';
  const handleMapping = () => {
    setModalType('AUTHORIZE');
  };

  useEffect(() => {
    if (!ethWalletInfo?.address || !aptosWalletInfo?.address) {
      setModalType('SIGN IN YOUR WALLET');
    }
  }, [ethWalletInfo?.address, aptosWalletInfo?.address, setModalType]);

  return (
    <>
      <div className="flex gap-[15px] mt-[42px]">
        <div className="w-[341px] bg-namelink-gray-5 rounded-[24px] flex flex-col min-h-[378px] h-[378px]">
          <div className="flex justify-between items-center mx-[24px] mt-[24px] mb-[42px]">
            <h3 className="text-[34px] text-namelink-gray-0">APTOS</h3>
            <AptosLogoWhite />
          </div>
          {aptosWalletInfo?.address ? (
            <ConnectedAddress
              chain="APTOS"
              imgUrl={MartianLogo.src}
              address={aptosWalletInfo?.address}
              setWalletInfo={setAptosWalletInfo}
            />
          ) : (
            <SelectWallet chain="APTOS" setWalletInfo={setAptosWalletInfo} />
          )}
        </div>
        <div className="w-[341px] bg-namelink-gray-5 rounded-[24px] flex flex-col min-h-[378px] h-[378px]">
          <div className="flex justify-between items-center mx-[24px] mt-[24px] mb-[42px]">
            <h3 className="text-[34px] text-namelink-gray-0">ETHEREUM</h3>
            <EthLogoWhite />
          </div>
          {ethWalletInfo?.address ? (
            <ConnectedAddress
              chain="ETHEREUM"
              imgUrl={MetamaskLogo.src}
              address={ethWalletInfo?.address}
              setWalletInfo={setEthWalletInfo}
            />
          ) : (
            <SelectWallet chain="ETHEREUM" setWalletInfo={setEthWalletInfo} />
          )}
        </div>
      </div>
      <button
        className="btn mt-[39px] w-[698px] h-[78px] text-[26px] bg-gradient-to-b from-[#39CBA4] via-[#18DCAD] via-[#B2D2EF] to-[#D9D5C2] text-namelink-gray-8 rounded-[16px]"
        disabled={!ethWalletInfo?.address || !aptosWalletInfo?.address}
        onClick={handleMapping}
      >
        {MAPPING_ADDRESS}
      </button>
    </>
  );
}

export default ConnectWalletModal;
