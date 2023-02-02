import useMounted from '@src/hooks/useMounted';
import { aptosWalletInfoAtom, ethWalletInfoAtom } from '@src/state';
import { ModalType, WalletInfo } from '@src/types';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import AuthorizeModal from '../Authorize/AuthorizeModal';
import ConnectWalletModal from '../ConnectWallet/ConnectWalletModal';

interface ModalContentsProps {
  modalType: ModalType;
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
}
function ModalContents({ modalType, setModalType }: ModalContentsProps) {
  const setAptosWalletInfo = useSetRecoilState(aptosWalletInfoAtom);
  const setEthWalletInfo = useSetRecoilState(ethWalletInfoAtom);
  const isMounted = useMounted();

  useEffect(() => {
    if (isMounted) {
      const ethWalletInfo = localStorage.getItem('ethereumWalletInfo');
      const aptosWalletInfo = localStorage.getItem('aptosWalletInfo');

      setEthWalletInfo(ethWalletInfo && JSON.parse(ethWalletInfo));
      setAptosWalletInfo(aptosWalletInfo && JSON.parse(aptosWalletInfo));
    }
  }, [isMounted]);

  switch (modalType) {
    case 'SIGN IN YOUR WALLET':
      return <ConnectWalletModal setModalType={setModalType} />;
    case 'AUTHORIZE':
      return <AuthorizeModal setModalType={setModalType} />;
    default:
      return <ConnectWalletModal setModalType={setModalType} />;
  }
}

export default ModalContents;
