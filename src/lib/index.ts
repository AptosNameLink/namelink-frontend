import axios from 'axios';

const BASE_URL = 'https://dev.telegram.mentat-analysis.sigridjin.com';

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const getRandomValue = async () => {
  const { data } = await client.get('/aptos/random');

  return { data };
};

interface postSignatureProps {
  ethPubKey: string;
  ethAddress: string;
  aptosPubKey: string;
  aptosAddress: string;
  randomValue: string;
  ethSignature: string;
  aptosSignature: string;
}

export const postSignature = async ({
  ethPubKey,
  ethAddress,
  aptosPubKey,
  aptosAddress,
  randomValue,
  ethSignature,
  aptosSignature,
}: postSignatureProps) => {
  const { data } = await client.post('/aptos/signature?chain_name=ethereum', {
    ethereum_public_key: ethPubKey,
    ethereum_address: ethAddress,
    aptos_public_key: aptosPubKey,
    aptos_address: aptosAddress,
    message: randomValue,
    ethereum_signature: ethSignature,
    aptos_signature: aptosSignature,
  });

  return data;
};

export const getEthAddress = async (aptosAddress: string) => {
  const { data } = await client.get(`/aptos/signature?chain_name=aptos?address=${aptosAddress}`);

  console.log('&&&&&&&&&&&&&', data);

  return data;
};
