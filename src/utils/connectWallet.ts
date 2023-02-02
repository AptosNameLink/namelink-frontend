import { AptosWallet, EthereumWallet } from '@src/types';

export const connectMetamask = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert('Get MetaMask!');

      return;
    }
    const accounts = (await ethereum.request({ method: 'eth_requestAccounts' })) as Array<string>;

    console.log('Connected metamask', accounts[0]);

    return accounts[0];
  } catch (error) {
    console.log(error);
  }
};

export const connectPontem = async () => {
  try {
    const { pontem } = window;

    if (!pontem) {
      alert('Get pontem!');

      return;
    }
    const accounts = await pontem.connect();

    console.log('Connected pontem', accounts);

    return accounts.address;
  } catch (error) {
    console.log(error);
  }
};

export const connectWallet = async (walletName: EthereumWallet | AptosWallet) => {
  switch (walletName) {
    case 'MetaMask':
      return await connectMetamask();
    case 'Pontem':
      return await connectPontem();
    default:
      throw new Error('Invalid wallet name');
  }
};
