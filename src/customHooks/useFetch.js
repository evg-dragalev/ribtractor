import { useState, useEffect } from 'react';

function useFetch(url) {
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(`Can't fetch data via url [${url}]`);
        }
        setData(response.data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  });
  return { data, isError, isLoaded };
}

export default useFetch;
