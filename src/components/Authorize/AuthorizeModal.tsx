import { ModalType, WalletInfo } from '@src/types';
import React, { useState } from 'react';

import SignBar from './SignBar';

/*
<RandomValue value={} /> -> 서버에서 데이터 가져옴
<SingBar chain={} signature={} setSignature={}/>
<SingBar chain={} isSigned={} setIsSigned={}/>
*/

interface AuthorizeModalProps {
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
  aptosWalletInfo: WalletInfo | undefined;
  ethWalletInfo: WalletInfo | undefined;
}
function AuthorizeModal({ setModalType, aptosWalletInfo, ethWalletInfo }: AuthorizeModalProps) {
  const [ethereumSignature, setEthereumSignature] = useState<string>();
  const [aptosSignature, setAptosSignature] = useState<string>();
  const [randomValue, setRandomValue] = useState('');
  const BACK = 'Back';
  const SUBMIT = 'SUBMIT';

  const handleBackBtn = () => {
    setModalType('SIGN IN YOUR WALLET');
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // @TODO Server Post
  };

  return (
    <section className="mt-[33px]">
      <SignBar
        chain="ETHEREUM"
        signature={ethereumSignature}
        setSignature={setEthereumSignature}
        randomValue={randomValue}
        className="mb-[12px]"
      />
      <SignBar
        chain="APTOS"
        signature={aptosSignature}
        setSignature={setAptosSignature}
        randomValue={randomValue}
        className="mb-[33px]"
      />
      <div className="flex justify-between w-[698px] h-[78px] items-center">
        <button
          className="btn btn-outline rounded-[16px] border-namelink-gray-0 hover:border-namelink-gray-0 text-namelink-gray-0 w-[234px] h-[78px] text-[26px] font-semibold hover:bg-namelink-gray-7"
          onClick={handleBackBtn}
        >
          {BACK}
        </button>
        <button
          className="btn w-[444px] h-[78px] text-[26px] bg-gradient-to-b from-[#39CBA4] via-[#18DCAD] via-[#B2D2EF] to-[#D9D5C2] text-namelink-gray-8 rounded-[16px] border-none"
          onClick={handleSubmit}
          disabled={!ethereumSignature || !aptosSignature}
        >
          {SUBMIT}
        </button>
      </div>
    </section>
  );
}

export default AuthorizeModal;
