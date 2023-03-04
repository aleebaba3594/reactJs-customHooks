// for naming converntion start file name  with use ex: useTitle.jsx

import { useEffect } from "react";

//TODO:custom hooks are like js functions starts with use keyword,other hooks can be used in them as well
// make a function which will be called anywhere in app
// receive the parameter to use in this hook
//TODO:reuseable logic will be written in custom hooks,not UI, (reusable UI will be HOC)
const useEffectTitle = (title) => {
  return (
    //returning the useEfect imported from react
    useEffect(() => {
      if (title > 0) {
        document.title = `chat notifications (${title})`;
      } else {
        document.title = `chat notification`;
      }
    }, [title])
  );
};

export default useEffectTitle;
