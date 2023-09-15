import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const abort = new AbortController()

    axios
      .get(url, { signal: abort.signal }, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data);
        setIsPending(false);        
      })
      .catch((err) => {
        if(err.message === "AbortError"){
          console.log("fetch aborted")
        }
        else{
          console.log(err)
        }
      });
  }, [url]);

  return{ data, isPending }
};

export default useFetch;
