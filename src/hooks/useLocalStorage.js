import { useEffect, useState } from "react"


//local storage of redux toolkit to store book details
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localvalue = window.localStorage.getItem(key);
      return localvalue ? JSON.parse(localvalue) : initialValue;
    } catch(err) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value])

  return [value, setValue];
}

export default useLocalStorage