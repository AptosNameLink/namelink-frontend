import useMounted from '@src/hooks/useMounted';
import { ModalType, WalletInfo } from '@src/types';
import React, { useEffect, useState } from 'react';

import AuthorizeModal from '../Authorize/AuthorizeModal';
import ConnectWalletModal from '../ConnectWallet/ConnectWalletModal';

interface ModalContentsProps {
  modalType: ModalType;
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
}
function ModalContents({ modalType, setModalType }: ModalContentsProps) {
  const [aptosWalletInfo, setAptosWalletInfo] = useState<WalletInfo>();
  const [ethWalletInfo, setEthWalletInfo] = useState<WalletInfo>();
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
      return (
        <ConnectWalletModal
          setModalType={setModalType}
          aptosWalletInfo={aptosWalletInfo}
          ethWalletInfo={ethWalletInfo}
          setAptosWalletInfo={setAptosWalletInfo}
          setEthWalletInfo={setEthWalletInfo}
        />
      );
    case 'AUTHORIZE':
      return (
        <AuthorizeModal
          setModalType={setModalType}
          aptosWalletInfo={aptosWalletInfo}
          ethWalletInfo={ethWalletInfo}
        />
      );
    default:
      return (
        <ConnectWalletModal
          setModalType={setModalType}
          aptosWalletInfo={aptosWalletInfo}
          ethWalletInfo={ethWalletInfo}
          setAptosWalletInfo={setAptosWalletInfo}
          setEthWalletInfo={setEthWalletInfo}
        />
      );
  }
}

export default ModalContents;
