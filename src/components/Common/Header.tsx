import Logo from '@src/assets/namelink_logo.svg';

import WalletModal from '../WalletModal/WalletModal';
import ConnectBtn from './ConnectBtn';
function Header() {
  return (
    <>
      <header className="w-[100%] flex justify-between pr-[70px] pl-[90px] pt-[56px]">
        <Logo />
        <ConnectBtn />
      </header>
      <WalletModal defaultModalType="SIGN IN YOUR WALLET" />
    </>
  );
}

export default Header;
