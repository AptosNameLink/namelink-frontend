import { WalletInfo } from '@src/types';
import { atom } from 'recoil';

export const ethWalletInfoAtom = atom({
  key: 'ethWalletInfoAtom',
  default: {} as WalletInfo,
});

export const aptosWalletInfoAtom = atom({
  key: 'aptosWalletInfoAtom',
  default: {} as WalletInfo,
});
