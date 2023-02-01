import BgImage from '@src/assets/aptos_bg_motion.json';
import LottiePlayer from '@src/components/common/LottiePlayer';
import React from 'react';

function BackgroundLottie() {
  return (
    <div className="absolute w-full h-full -z-50">
      <LottiePlayer animationData={BgImage} />
    </div>
  );
}

export default BackgroundLottie;
