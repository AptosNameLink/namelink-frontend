import BorderLine from '@src/assets/border-line.svg';
import ApiButton from '@src/components/ApiList/ApiButton';
import React from 'react';

function ApiListModal() {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box min-w-fit border-[1px] border-namelink-gray-4 bg-namelink-gray-7 flex flex-col items-center p-[32px] rounded-[20px]">
          <h1 className="font-bold text-[48px] text-namelink-primary mt-[16px] mb-[50px]">
            API LIST
          </h1>
          <label
            htmlFor="my-modal"
            className="absolute right-[30px] top-[32px] text-[30px] text-namelink-gray-0 opacity-40 hover:cursor-pointer"
          >
            ✕
          </label>
          <p className="text-namelink-primary absolute right-[32px] top-[136px]">
            More APIs will come out!
          </p>
          <BorderLine />
          <div className="grid grid-cols-2 grid-rows-2 gap-[16px] mt-[26.5px]">
            <ApiButton title="LENS PROFILE" />
            <ApiButton title="LENS FOLLOWING" />
            <ApiButton title="FARCASTER PROFILE" />
            <ApiButton title="ENS" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ApiListModal;
