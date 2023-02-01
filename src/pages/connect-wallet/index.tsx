import ConnectWalletModal from '@src/components/ConnectWallet/ConnectWalletModal';
import React from 'react';

function ConnectWallet() {
  return (
    <div>
      <label htmlFor="my-modal" className="btn">
        open modal
      </label>
      <ConnectWalletModal />
    </div>
  );
}

export default ConnectWallet;
