import { useRef, useState } from 'react';

function useModal() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.checked = true;
  };

  return { inputRef, handleClick };
}

export default useModal;
