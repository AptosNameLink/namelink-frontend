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

const signAptosMsg = async (msg: string) => {
  const { pontem } = window;

  const { result } = await pontem.signMessage({
    address: true,
    application: true,
    chainId: true,
    message: msg,
    nonce: Math.floor(Math.random() * 1000),
  });
  // const { result } = await pontem.signMessage(msg);

  console.log('aptos result', result);

  return result.signature;
};

export const signMsg = async (chain: Chain, msg: string): Promise<string> => {
  switch (chain) {
    case 'ETHEREUM':
      return await signEthMsg(msg);
    case 'APTOS':
      return await signAptosMsg(msg);
    default:
      return '';
  }
};
