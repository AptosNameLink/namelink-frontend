import InfoRed from '@src/assets/Icon/icon_info.svg';
import InfoGreen from '@src/assets/Icon/info.svg';
import React from 'react';

interface MessageProps {
  status: 'normal' | 'error';
  message: string;
  className?: string;
}

function MessageBar({ status, message, className }: MessageProps) {
  return (
    <div
      className={`flex justify-center items-center bg-namelink-gray-7 rounded-[12px] border-namelink-gray-4 py-[16px] w-[756px] ${className}`}
    >
      {status == 'normal' ? <InfoGreen stroke="red" /> : <InfoRed />}
      <p
        className={`ml-[11px] ${
          status == 'normal' ? 'text-namelink-primary' : 'text-namelink-alert'
        } text-[20px]`}
      >
        {message}
      </p>
    </div>
  );
}

export default MessageBar;
