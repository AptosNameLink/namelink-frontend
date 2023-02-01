import BgImage from '@src/assets/aptos_bg_motion.json';
import Header from '@src/components/Header';
import LottiePlayer from '@src/components/LottiePlayer';
import Search from '@src/components/Search';
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
      <LottiePlayer animationData={BgImage} />
      <Header />
      <div className="text-center">
        <h1 className="font-fonthome text-[92px] text-center">
          BRING YOUR <br />
          SOCIAL GRAPH TO APTOS
        </h1>
        <div>
          <button className="font-fontdefault text-[22px] w-[249px] h-[81px] bg-gradient-to-b from-[#39CBA4] to-[#D9D5C2] rounded-[16px]">
            MAPPING ADDRESS
          </button>
          <button className="font-fontdefault text-[22px] w-[101px] h-[81px] border-solid border border-black rounded-[16px] ml-[30px]">
            API
          </button>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Home;
