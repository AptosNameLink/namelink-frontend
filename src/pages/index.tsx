import BackgroundLottie from '@src/components/common/BackgroundLottie';
import Header from '@src/components/common/Header';
import Search from '@src/components/Home/Search';
import Head from 'next/head';

interface AnimationType {
  animation: any;
}

function Home() {
  return (
    <div>
      <Head>
        <title>namelink</title>
        <meta name="description" content="namelink" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundLottie />
      <Header />
      <div className="text-center mt-[15vh]">
        <h1 className="font-fonthome text-[92px] text-center text-namelink-gray-0">
          BRING YOUR <br />
          SOCIAL GRAPH TO APTOS
        </h1>
        <div className="mt-[50px]">
          <button className="font-fontdefault text-[22px] w-[249px] h-[81px] bg-gradient-to-b from-[#39CBA4] via-[#18DCAD] to-[#D9D5C2] rounded-[16px]">
            MAPPING ADDRESS
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
