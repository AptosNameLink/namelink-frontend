import { Chain } from '@src/types';
import { providers, Signer, utils } from 'ethers';
import { sign } from 'tweetnacl';

import { getPubKey } from './getPubKey';

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
    // nonce: 744,
    nonce: Math.floor(Math.random() * 1000),
  });

  // verify
  console.log('result', result);
  const pubKey = await getPubKey('APTOS');
  const key = pubKey.slice(2, 66);

  // console.log('Buffer.from(result.signature,', Buffer.from(result.signature, 'hex'));
  const verified = sign.detached.verify(
    Buffer.from(result.fullMessage),
    Buffer.from(result.signature.replace('0x', ''), 'hex'),
    Buffer.from(key, 'hex'),
  );

  console.log('verified', verified);
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
