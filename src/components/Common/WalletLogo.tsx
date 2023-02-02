import Atomic from '@src/assets/Icon/Atomic.svg';
import Coinbase from '@src/assets/Icon/Coinbase.svg';
import Martian from '@src/assets/Icon/Martian.svg';
import Metamask from '@src/assets/Icon/Metamask.svg';
import MyEtherwallet from '@src/assets/Icon/myEtherwallet.svg';
import Petra from '@src/assets/Icon/Petra.svg';
import Pontem from '@src/assets/Icon/Pontem.svg';
import Rise from '@src/assets/Icon/Rise.svg';

interface WalletLogoProps {
  walletName: string;
}
function WalletLogo({ walletName }: WalletLogoProps) {
  switch (walletName) {
    case 'Pontem':
      return <Pontem />;
    case 'Martian':
      return <Martian />;
    case 'Petra':
      return <Petra />;
    case 'Rise':
      return <Rise />;
    case 'MetaMask':
      return <Metamask />;
    case 'Coinbase':
      return <Coinbase />;
    case 'MyEtherWallet':
      return <MyEtherwallet />;
    case 'Atomic':
      return <Atomic />;
    default:
      throw new Error('Invalid wallet name');
  }
}

export default WalletLogo;
