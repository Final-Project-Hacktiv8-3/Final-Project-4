import { useState } from "react";

export const useToogle = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const parseState = () => {
    setState(!state);
  };

  return {
    state,
    parseState,
  };
};
