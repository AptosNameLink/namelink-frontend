import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
}
function ApiButton({ title, ...props }: ButtonProps) {
  return (
    <button
      className="btn w-[423px] h-[114px] bg-namelink-gray-5 rounded-[12px] px-[20px] py-[24px] flex justify-between items-start border-[1px] hover:border-namelink-primary/30 hover:bg-namelink-gray-5 group"
      {...props}
    >
      <p className="text-[26px] text-namelink-gray-0">{title}</p>
      <div className="w-[20px] h-[20px] bg-[url('/assets/Icon/namelink-icon-black.svg')] group-hover:bg-[url('/assets/Icon/namelink-icon-color.svg')]" />
    </button>
  );
}

export default ApiButton;
