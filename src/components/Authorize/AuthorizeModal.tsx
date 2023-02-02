/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { getRandomValue, postSignature } from '@src/lib';
import { aptosWalletInfoAtom, ethWalletInfoAtom, ipfsHashAtom, toastMsgAtom } from '@src/state';
import { ModalType, WalletInfo } from '@src/types';
import { getPubKey } from '@src/utils/getPubKey';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import RandomNumberBar from './RandomNumberBar';
import SignBar from './SignBar';

/*
<RandomValue value={} /> -> 서버에서 데이터 가져옴
<SingBar chain={} signature={} setSignature={}/>
<SingBar chain={} isSigned={} setIsSigned={}/>
*/

interface AuthorizeModalProps {
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
}
function AuthorizeModal({ setModalType }: AuthorizeModalProps) {
  const [ethereumSignature, setEthereumSignature] = useState<string>();
  const [aptosSignature, setAptosSignature] = useState<string>();
  const [randomValue, setRandomValue] = useState('Hello World');
  const BACK = 'Back';
  const SUBMIT = 'SUBMIT';
  const [aptosWalletInfo, setAptosWalletInfo] = useRecoilState(aptosWalletInfoAtom);
  const [ethWalletInfo, setEthWalletInfo] = useRecoilState(ethWalletInfoAtom);
  const [ipfsHash, setIpfsHash] = useRecoilState(ipfsHashAtom);
  const [toastMsg, setToastMsg] = useRecoilState(toastMsgAtom);
  const labelRef = useRef(null);

  useEffect(() => {
    if (ethereumSignature || aptosSignature) {
      setToastMsg('Signed with your wallet private key successfully. (1/2)');
    }
    if (ethereumSignature && aptosSignature) {
      setToastMsg('Signed with your wallet private key successfully. (2/2)');
    }
  }, [ethereumSignature, aptosSignature]);
  const handleBackBtn = () => {
    setModalType('SIGN IN YOUR WALLET');
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('labelRef?.current?', labelRef?.current);
    labelRef?.current?.click();

    const ethPubKey = await getPubKey('ETHEREUM');
    const aptosPubKey = await getPubKey('APTOS');

    setToastMsg(undefined);

    aptosWalletInfo &&
      setAptosWalletInfo({
        ...aptosWalletInfo,
        pubKey: aptosPubKey,
      });

    ethWalletInfo &&
      setEthWalletInfo({
        ...ethWalletInfo,
        pubKey: ethPubKey,
      });

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

      postResult?.ipfs_hash && localStorage.setItem('ipfsHash', postResult?.ipfs_hash);
      setIpfsHash(postResult?.ipfs_hash);

      console.log('post result', postResult?.ipfs_hash);
    }
  };

  return (
    <section className="mt-[33px] relative">
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
        <label htmlFor="my-modal" ref={labelRef}>
          <button
            className="btn w-[444px] h-[78px] text-[26px] bg-gradient-to-b from-[#39CBA4] via-[#18DCAD] via-[#B2D2EF] to-[#D9D5C2] text-namelink-gray-8 rounded-[16px] border-none"
            onClick={handleSubmit}
            disabled={!ethereumSignature || !aptosSignature}
          >
            {SUBMIT}
          </button>
        </label>
        {/* <label
          htmlFor="my-modal"
          className="btn w-[444px] h-[78px] text-[26px] bg-gradient-to-b from-[#39CBA4] via-[#18DCAD] via-[#B2D2EF] to-[#D9D5C2] text-namelink-gray-8 rounded-[16px] border-none"
          onClick={handleSubmit}
          disabled={!ethereumSignature || !aptosSignature}
        >
          {SUBMIT}
        </label> */}
      </div>
    </section>
  );
}

export default AuthorizeModal;
