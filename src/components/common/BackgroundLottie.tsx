import BgImage from '@src/assets/aptos_bg_motion.json';
import LottiePlayer from '@src/components/common/LottiePlayer';
import React from 'react';

import SocialBgImage from '../../assets/social-graph-bg.png';

interface BackgroundProps {
  isMapped: boolean;
}

function BackgroundLottie({ isMapped }: BackgroundProps) {
  return (
    <div className="absolute w-full h-full -z-50">
      {isMapped ? (
        <div className="w-full h-full bg-[url('/src/assets/social-graph-bg.png')]" />
      ) : (
        <LottiePlayer animationData={BgImage} />
      )}
    </div>
  );
}

export default BackgroundLottie;
