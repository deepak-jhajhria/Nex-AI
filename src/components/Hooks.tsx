import { Dispatch, SetStateAction, useEffect, useState } from "react";

type UseOverflowHidden = [
  isOpen: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
];
export const useOverflowHidden = (
  initialIsOpen: boolean
): UseOverflowHidden => {
  const [isOpen, setOpen] = useState(initialIsOpen);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  return [isOpen, setOpen];
};


export const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    document.body.classList.add("overflow-hidden");
    setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove("overflow-hidden");
    }, 3500);
  }, []);
  return isLoading;
};
