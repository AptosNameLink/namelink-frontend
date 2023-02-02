import RightArrow from '@src/assets/Icon/arrow_right.svg';
import { AptosWallet, Chain, EthereumWallet, WalletInfo } from '@src/types';
import { connectWallet } from '@src/utils/connectWallet';
import { getWalletList } from '@src/utils/getWalletList';
import React, { useState } from 'react';
import { SetterOrUpdater } from 'recoil';

import WalletLogo from '../Common/WalletLogo';

interface SelectWalletProps {
  chain: Chain;
  setWalletInfo: SetterOrUpdater<WalletInfo | undefined>;
}

function SelectWallet({ chain, setWalletInfo }: SelectWalletProps) {
  const [walletList, setWalletList] = useState(getWalletList(chain));

  const handleConnectWallet = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { id: walletName } = e.currentTarget;

    const result = await connectWallet(walletName as EthereumWallet | AptosWallet);

    console.log(result);
    setWalletInfo({
      wallet: walletName as EthereumWallet | AptosWallet,
      address: result ? result : '',
      chain,
    });
    switch (chain) {
      case 'APTOS':
        localStorage.setItem(
          'aptosWalletInfo',
          JSON.stringify({
            wallet: walletName as EthereumWallet | AptosWallet,
            address: result ? result : '',
            chain,
          }),
        );
        break;
      case 'ETHEREUM':
        localStorage.setItem(
          'ethereumWalletInfo',
          JSON.stringify({
            wallet: walletName as EthereumWallet | AptosWallet,
            address: result ? result : '',
            chain,
          }),
        );
        break;
      default:
        throw new Error('Invalid chain');
    }
  };

  return (
    <ul className="flex flex-col justify-center items-center mb-[14px]">
      {walletList?.map((wallet) => {
        return (
          <li key={wallet} className="mb-[8px]">
            <button
              onClick={handleConnectWallet}
              id={wallet}
              className="flex w-[310px] h-[56px] justify-around bg-namelink-gray-4 items-center rounded-[60px] text-[20px] text-namelink-gray-0"
            >
              <WalletLogo walletName={wallet} />
              {wallet}
              <RightArrow />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default SelectWallet;
