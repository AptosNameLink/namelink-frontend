import ApiListModal from '@src/components/ApiList/ApiListModal';
import BackgroundLottie from '@src/components/Common/BackgroundLottie';
import Header from '@src/components/Common/Header';
import HashValue from '@src/components/Home/HashValue';
import Search from '@src/components/Home/Search';
import useModal from '@src/hooks/useModal';
import useMounted from '@src/hooks/useMounted';
import { ipfsHashAtom } from '@src/state';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

function Home() {
  // const [isMapped, setIsMapped] = useState(false);
  const [ipfsHash, setIpfsHash] = useRecoilState(ipfsHashAtom);
  const isMounted = useMounted();
  const { inputRef, handleClick } = useModal();

  useEffect(() => {
    if (isMounted) {
      const ipfsHash = localStorage.getItem('ipfsHash');

      ipfsHash && setIpfsHash(ipfsHash);
    }
  }, [isMounted]);

  return (
    <div>
      <Head>
        <title>namelink</title>
        <meta name="description" content="namelink" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundLottie isMapped={!!ipfsHash} />
      <Header />
      <main className="text-center mt-[15vh]">
        <h1 className="font-fonthome text-[92px] text-center text-namelink-gray-0 whitespace-pre-line">
          {ipfsHash
            ? 'Hi :) Check Your Address\nMapping on IPFS.'
            : 'BRING YOUR\nSOCIAL GRAPH TO APTOS'}
        </h1>
        <div className="mt-[50px]">
          {ipfsHash ? (
            <button
              className="font-fontdefault text-[22px] h-[81px] px-[42px] bg-gradient-to-b from-[#39CBA4] via-[#18DCAD] to-[#D9D5C2] rounded-[16px]"
              // onClick={handleMappingClick}
            >
              Checking your address
            </button>
          ) : (
            <label
              htmlFor="my-modal"
              className="btn font-fontdefault text-[22px] h-[81px] px-[42px] bg-gradient-to-b from-[#39CBA4] via-[#18DCAD] to-[#D9D5C2] rounded-[16px] text-namelink-gray-8"
            >
              MAPPING ADDRESS
            </label>
          )}
          <label
            htmlFor="my-modal-2"
            className="btn font-fontdefault text-[22px] w-[101px] h-[81px] border-solid border border-namelink-gray-0 hover:border-namelink-gray-0 rounded-[16px] ml-[30px] text-namelink-gray-0 bg-transparent hover:bg-transparent"
          >
            API
          </label>
        </div>
        <Search />
        <ApiListModal />
      </main>
    </div>
  );
}

export default Home;
