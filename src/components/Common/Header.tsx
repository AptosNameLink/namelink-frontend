import Logo from '@src/assets/namelink_logo.svg';
import Image from 'next/image';

import ConnectWalletModal from '../ConnectWallet/ConnectWalletModal';

function Header() {
  const CONNECT_WALLET = 'CONNECT WALLET';

  return (
    <>
      <header className="w-[100%] flex justify-between pr-[70px] pl-[90px] pt-[56px]">
        <Logo />
        <label
          htmlFor="my-modal"
          className="btn w-[180px] h-[56px] bg-[#D9D5C2] rounded-[60px] font-['Inconsolata'] text-namelink-gray-8"
          id="connect"
        >
          {CONNECT_WALLET}
        </label>
      </header>
      <ConnectWalletModal />
    </>
  );
}

export default Header;
