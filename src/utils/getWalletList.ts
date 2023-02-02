//
import { AptosWallet, Chain, EthereumWallet } from '@src/types';
export const getWalletList = (chain: Chain): Array<AptosWallet | EthereumWallet> => {
  switch (chain) {
    case 'APTOS':
      return ['Pontem', 'Martian', 'Petra', 'Rise'];
    case 'ETHEREUM':
      return ['MetaMask', 'Coinbase', 'MyEtherWallet', 'Atomic'];

    default:
      throw new Error('Invalid chain');
  }
};
