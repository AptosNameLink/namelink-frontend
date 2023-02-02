import Logo from '@src/assets/namelink_logo.svg';
import { ipfsHashAtom } from '@src/state';
import { useRecoilState } from 'recoil';

import HashValue from '../Home/HashValue';
import WalletModal from '../WalletModal/WalletModal';
import ConnectBtn from './ConnectBtn';
function Header() {
  const [ipfsHash, setIpfsHash] = useRecoilState(ipfsHashAtom);

  return (
    <>
      <header className="w-[100%] flex justify-between pr-[70px] pl-[90px] pt-[56px]">
        <Logo />
        {ipfsHash && <HashValue hash={ipfsHash} />}
        <ConnectBtn />
      </header>
      <WalletModal defaultModalType="SIGN IN YOUR WALLET" />
    </>
  );
}

export default Header;
