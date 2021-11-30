import { useEffect, useState } from "react";

const useServicess = () => {
  const [servicess, setServicess] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/mokter7082/getData/main/servicess.json"
    )
      .then((res) => res.json())
      .then((data) => setServicess(data));
  }, []);
  return { servicess, setServicess };
};
export default useServicess;
