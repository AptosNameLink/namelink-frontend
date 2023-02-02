import { Chain } from '@src/types';
import { providers, Signer, utils } from 'ethers';

const signEthMsg = async (msg: string) => {
  const message = utils.toUtf8Bytes(msg);

  const { ethereum } = window;

  const provider = new providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const signature = await signer.signMessage(message);

  return signature;
};

export const signMsg = async (chain: Chain, msg: string): Promise<string> => {
  switch (chain) {
    case 'ETHEREUM':
      return await signEthMsg(msg);
    case 'APTOS':
      return '';
    default:
      return '';
  }
};
