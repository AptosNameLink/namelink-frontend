import IconSearch from '@src/assets/icon_search.svg';
import BackgroundLottie from '@src/components/Common/BackgroundLottie';
import Header from '@src/components/Common/Header';
import { getEthAddress } from '@src/lib';
import { getLensProfile } from '@src/utils/getLensProfile';
import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';
import ClipLoader from 'react-spinners/ClipLoader';
function LensProfile() {
  const [jsonData, setJsonData] = useState<any>(null);
  const [aptosAddress, setAptosAddress] = useState<string>('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    const result = await getLensProfile();

    console.log('result', result?.data?.defaultProfile);
    setJsonData(result?.data?.defaultProfile);
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setIsSubmit(true);
    getData();
  };

  return (
    <div className="overflow-y-scroll">
      <main>
        <BackgroundLottie isMapped={true} />
        <Header />
        <section className="flex mt-[60px]" onSubmit={handleSubmit}>
          <div className="w-[49%]  ">
            <form className="flex justify-center">
              <input
                className="border border-black w-[70%] h-[56px] mt-[20px] pl-[30.5px] pr-[70px] bg-namelink-gray-7 border-namelink-gray-4 rounded-[12px] text-namelink-gray-0 text-[18px] placeholder-namelink-gray-3 focus:outline-none"
                placeholder="TYPE APTOPS ADDRESS!"
                value={aptosAddress}
                onChange={(e) => setAptosAddress(e.target.value)}
              />
              <IconSearch className="absolute top-[204px] left-[38.5%]" />
            </form>
            {isSubmit && (
              <div className="mt-[24px] flex flex-col items-center">
                <h2 className="text-namelink-gray-0 w-[70%] overflow-auto">
                  Aptos Address : {aptosAddress}
                </h2>
                <br />
                <h2 className="text-namelink-gray-0 w-[70%] overflow-auto">
                  Ethereum Address : 0xe6a762be9d3A9dF08aB441D99ad2D0a2183E5177
                </h2>
              </div>
            )}
          </div>
          <div className="w-[49%] h-[750px] overflow-y-scroll rounded-xl">
            {isLoading && (
              <section className="w-[100%] h-[750px] flex justify-center items-center">
                <ClipLoader
                  color="#FFE55C"
                  loading={isLoading}
                  size={50}
                  className="z-20 absolute"
                />
              </section>
            )}
            {jsonData && <ReactJson src={jsonData} theme="monokai" />}
          </div>
        </section>
      </main>
    </div>
  );
}

export default LensProfile;
