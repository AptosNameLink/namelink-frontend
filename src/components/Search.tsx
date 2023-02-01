import IconSearch from '@src/assets/icon_search.svg';
import React, { useState } from 'react';

function Search() {
  const [input, setInput] = useState(false);
  const onChange = () => {
    setInput(true);
  };

  return (
    <form className="relative flex-col justify-center items-center">
      <input
        onChange={onChange}
        className="border border-black w-[70%] h-[56px] mt-[20px]"
        placeholder="TYPE ADDRESS YOU WANT TO SEARCH"
      />
      <IconSearch className="absolute top-[40px] left-[81%]" />
      {input ? (
        <div className="text-left border border-black w-[70%] h-[56px] ml-[15%]">
          kihunphusis.eth
        </div>
      ) : null}
    </form>
  );
}

export default Search;
