export type Chain = 'APTOS' | 'ETHEREUM';
export type AptosWallet = 'Pontem' | 'Martian' | 'Petra' | 'Rise';
export type EthereumWallet = 'MetaMask' | 'Coinbase' | 'MyEtherWallet' | 'Atomic';

export interface WalletInfo {
  chain: Chain;
  address: string;
  wallet: EthereumWallet | AptosWallet;
}

export interface ConnectWallet {
  walletName: string;
  walletIcon: string;
  connectAddress?: () => void;
}
