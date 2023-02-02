import BackgroundLottie from '@src/components/Common/BackgroundLottie';
import Header from '@src/components/Common/Header';
import Search from '@src/components/Home/Search';
import Head from 'next/head';
import { useState } from 'react';

function Home() {
  const [isMapped, setIsMapped] = useState(false);

  return (
    <div>
      <Head>
        <title>namelink</title>
        <meta name="description" content="namelink" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundLottie isMapped={isMapped} />
      <Header />
      <div className="text-center mt-[15vh]">
        <h1 className="font-fonthome text-[92px] text-center text-namelink-gray-0 whitespace-pre-line">
          {isMapped
            ? 'Hi :) Check Your Address\nMapping on IPFS.'
            : 'BRING YOUR\nSOCIAL GRAPH TO APTOS'}
        </h1>
        <div className="mt-[50px]">
          <button className="font-fontdefault text-[22px] h-[81px] px-[42px] bg-gradient-to-b from-[#39CBA4] via-[#18DCAD] to-[#D9D5C2] rounded-[16px]">
            {isMapped ? 'Checking your address' : 'MAPPING ADDRESS'}
          </button>
          <button className="font-fontdefault text-[22px] w-[101px] h-[81px] border-solid border border-namelink-gray-0 rounded-[16px] ml-[30px] text-namelink-gray-0">
            API
          </button>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Home;
