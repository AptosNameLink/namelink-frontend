import AptosLogoWhite from '@src/assets/aptos-logo-white.svg';
import EthLogoWhite from '@src/assets/eth-logo-white.svg';
import MartianLogo from '@src/assets/icon_,martian.png';
import MetamaskLogo from '@src/assets/Metamask.png';
import ConnectedAddress from '@src/components/ConnectWallet/ConnectedAddress';
import React from 'react';

function ConnectWalletModal() {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box min-w-fit border-[1px] border-namelink-gray-4 bg-namelink-gray-7 flex flex-col items-center p-[32px] rounded-[20px]">
          <h1 className="font-bold text-[48px] text-namelink-primary mt-[16px]">
            Sign in your Wallet
          </h1>
          <label
            htmlFor="my-modal"
            className="absolute right-[30px] top-[32px] text-[30px] text-namelink-gray-0 opacity-40"
          >
            ✕
          </label>
          <div className="flex gap-[15px] mt-[42px]">
            <ConnectedAddress
              name={'aptos'}
              LogoSvg={AptosLogoWhite}
              imgUrl={MartianLogo.src}
              address={'0x2599 ...e6ac'}
            />
            <ConnectedAddress
              name={'ethureum'}
              LogoSvg={EthLogoWhite}
              imgUrl={MetamaskLogo.src}
              address={'0x2599 ...e6ac'}
            />
          </div>
          <button className="btn mt-[39px] w-[698px] h-[78px] text-[26px] bg-gradient-to-b from-[#39CBA4] via-[#18DCAD] via-[#B2D2EF] to-[#D9D5C2] text-namelink-gray-8 rounded-[16px]">
            MAPPING YOUR ADDRESS
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConnectWalletModal;
