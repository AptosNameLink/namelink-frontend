import { getRandomValue, postSignature } from '@src/lib';
import { ModalType, WalletInfo } from '@src/types';
import { getPubKey } from '@src/utils/getPubKey';
import React, { useEffect, useState } from 'react';

import RandomNumberBar from './RandomNumberBar';
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
  const [randomValue, setRandomValue] = useState('Hello World');
  const BACK = 'Back';
  const SUBMIT = 'SUBMIT';

  // const getData = async () => {
  //   const randomData = await getRandomValue();

  //   console.log('randomData', randomData);

  //   // setRandomValue(randomData);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const handleBackBtn = () => {
    setModalType('SIGN IN YOUR WALLET');
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const ethPubKey = await getPubKey('ETHEREUM');
    const aptosPubKey = await getPubKey('APTOS');

    console.log('ethPubKey', ethPubKey);
    console.log('aptosPubKey', aptosPubKey);
    // @TODO Server Post
    if (ethereumSignature && aptosSignature && ethWalletInfo?.address && aptosWalletInfo?.address) {
      const postResult = await postSignature({
        ethPubKey,
        aptosPubKey,
        ethAddress: ethWalletInfo?.address,
        aptosAddress: aptosWalletInfo?.address,
        ethSignature: ethereumSignature,
        aptosSignature,
        randomValue,
      });

      console.log('post result', postResult);
    }
  };

  return (
    <section className="mt-[33px]">
      <RandomNumberBar
        setRandomValue={setRandomValue}
        randomValue={randomValue}
        className="mb-[22px]"
      />
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
