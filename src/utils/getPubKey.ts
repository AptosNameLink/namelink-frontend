import { Chain } from '@src/types';
import { providers } from 'ethers';

const getEthPubKey = async (): Promise<string> => {
  const { ethereum } = window;
  const provider = new providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const pubKey = await signer.getAddress();

  return pubKey;
};

const getAptosPubKey = async (): Promise<string> => {
  const { pontem } = window;
  const accounts = await pontem.connect();

  console.log('Connected pontem', accounts);

  return accounts.publicKey;
};

export const getPubKey = async (chain: Chain): Promise<string> => {
  switch (chain) {
    case 'ETHEREUM':
      return await getEthPubKey();
    case 'APTOS':
      return await getAptosPubKey();
    default:
      return '';
  }
};
