import { useEffect, useRef } from "react";

export default function useOuterClick<T extends HTMLElement>(callback: Function) {
  const callbackRef = useRef<Function>();
  const innerRef = useRef<T>(null);
  useEffect(() => { callbackRef.current = callback; });

  useEffect(() => {
    document.addEventListener("click", _onClick);
    return () => document.removeEventListener("click", _onClick);
    function _onClick(e: any): void {
      const clickedOutside = !(innerRef.current?.contains(e.target));
      if (clickedOutside)
        callbackRef.current?.(e);
    }
  }, []);

  return innerRef;
}