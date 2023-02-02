import BgImage from '@src/assets/aptos_bg_motion.json';
import LottiePlayer from '@src/components/Common/LottiePlayer';
import React from 'react';

interface BackgroundProps {
  isMapped: boolean;
}

function BackgroundLottie({ isMapped }: BackgroundProps) {
  return (
    <div className="absolute w-full h-full -z-50">
      {isMapped ? (
        <div className="w-full h-full bg-[url('/assets/social-graph-bg.png')] bg-cover" />
      ) : (
        <LottiePlayer animationData={BgImage} />
      )}
    </div>
  );
}

export default BackgroundLottie;
