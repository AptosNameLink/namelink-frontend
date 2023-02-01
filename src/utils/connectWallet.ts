export const connectMetamask = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert('Get MetaMask!');

      return;
    }
    const accounts = (await ethereum.request({ method: 'eth_requestAccounts' })) as Array<string>;

    console.log('Connected', accounts[0]);

    return accounts[0];
  } catch (error) {
    console.log(error);
  }
};

export const connectWallet = async (walletName: string) => {
  switch (walletName) {
    case 'MetaMask':
      return await connectMetamask();
    default:
      throw new Error('Invalid wallet name');
  }
};
