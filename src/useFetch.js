import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios
      .get(url, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data);
        setIsPending(false);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return{ data, isPending }
};

export default useFetch;
