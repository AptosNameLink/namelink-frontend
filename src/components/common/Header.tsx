import Logo from '@src/assets/namelink_logo.svg';
import Image from 'next/image';

function Header() {
  return (
    <header className="w-[100%] flex justify-between pr-[70px] pl-[90px] pt-[56px]">
      <Logo />
      <button
        className="w-[180px] h-[56px] bg-[#D9D5C2] rounded-[60px] font-['Inconsolata']"
        id="connect"
      >
        CONNECT WALLET
      </button>
    </header>
  );
}

export default Header;
