import { ModalType } from '@src/types';
import React, { useState } from 'react';

import ModalContents from './ModalContents';

interface WalletModalProps {
  defaultModalType: ModalType;
}

function WalletModal({ defaultModalType = 'SIGN IN YOUR WALLET' }: WalletModalProps) {
  const [modalType, setModalType] = useState<ModalType>(defaultModalType);

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box border-[1px] border-namelink-gray-4 bg-namelink-gray-7 flex flex-col items-center px-[24px] pt-[48px] pb-[45px] rounded-[20px] min-h-[690px] min-w-[760px]">
          <h1 className="font-bold text-[48px] text-namelink-primary mt-[16px]">{modalType}</h1>
          <label
            htmlFor="my-modal"
            className="absolute right-[30px] top-[32px] text-[30px] text-namelink-gray-0 opacity-40 hover:cursor-pointer"
          >
            ✕
          </label>
          <ModalContents setModalType={setModalType} modalType={modalType} />
        </div>
      </div>
    </div>
  );
}

export default WalletModal;
