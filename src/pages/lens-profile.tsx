import BackgroundLottie from '@src/components/Common/BackgroundLottie';
import Header from '@src/components/Common/Header';
import { getLensProfile } from '@src/utils/getLensProfile';
import React, { useEffect } from 'react';

function LensProfile() {
  const getData = async () => {
    await getLensProfile();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <main>
        <BackgroundLottie isMapped={true} />
        <Header />
      </main>
    </div>
  );
}

export default LensProfile;
