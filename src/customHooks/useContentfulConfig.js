import { useState, useEffect } from 'react';
import contentfulClient from '../contentfulClient';

function useContentfulConfig(type) {
  const [entry, setEntry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    contentfulClient
      .getEntries({
        content_type: type,
        include: 4,
      })
      .then((data) => {
        setEntry(data.items[0]);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { entry, isError, isLoading };
}

export default useContentfulConfig;
