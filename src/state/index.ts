import { WalletInfo } from '@src/types';
import { atom } from 'recoil';

export const ethWalletInfoAtom = atom({
  key: 'ethWalletInfoAtom',
  default: {} as WalletInfo | undefined,
});

export const aptosWalletInfoAtom = atom({
  key: 'aptosWalletInfoAtom',
  default: {} as WalletInfo | undefined,
});

export const ipfsHashAtom = atom({
  key: 'ipfsHashAtom',
  default: '',
});

export const toastMsgAtom = atom({
  key: 'toastMsgAtom',
  default: undefined as string | undefined,
});
