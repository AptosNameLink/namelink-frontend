import Logo from '@src/assets/namelink_logo.svg';
import { ipfsHashAtom, toastMsgAtom } from '@src/state';
import { useRecoilState } from 'recoil';

import HashValue from '../Home/HashValue';
import WalletModal from '../WalletModal/WalletModal';
import ConnectBtn from './ConnectBtn';
import MessageBar from './MessageBar';
function Header() {
  const [ipfsHash, setIpfsHash] = useRecoilState(ipfsHashAtom);
  const [toastMsg, setToastMsg] = useRecoilState(toastMsgAtom);

  return (
    <>
      <header className="w-[100%] flex justify-between pr-[70px] pl-[90px] pt-[56px]">
        <Logo />
        {ipfsHash && <HashValue hash={ipfsHash} />}
        <ConnectBtn />
      </header>
      <WalletModal defaultModalType="SIGN IN YOUR WALLET" />
      <section className="flex justify-center items-center ">
        {toastMsg && (
          <MessageBar
            status={'normal'}
            message={toastMsg}
            className="absolute z-[1000] top-[869px]"
          />
        )}
      </section>
    </>
  );
}

export default Header;
