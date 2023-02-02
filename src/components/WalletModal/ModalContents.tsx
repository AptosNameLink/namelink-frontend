import { ModalType, WalletInfo } from '@src/types';
import React, { useState } from 'react';

import AuthorizeModal from '../Authorize/AuthorizeModal';
import ConnectWalletModal from '../ConnectWallet/ConnectWalletModal';

interface ModalContentsProps {
  modalType: ModalType;
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>;
}
function ModalContents({ modalType, setModalType }: ModalContentsProps) {
  const [aptosWalletInfo, setAptosWalletInfo] = useState<WalletInfo>();
  const [ethWalletInfo, setEthWalletInfo] = useState<WalletInfo>();

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
