import { useState, useEffect } from 'react';

function useFetch(url) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(`Can't fetch data via url [${url}]`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        console.log(data);
        setIsLoading(false);
      });
  }, []);
  return { data, isError, isLoading };
}

export default useFetch;
