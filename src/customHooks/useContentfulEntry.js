import { useState, useEffect } from 'react';
import contentfulClient from './../contentfulClient';

function useContentfulEntry(type) {
  const [entry, setEntry] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
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
        setIsLoaded(true);
      });
  }, []);

  return { entry, isError, isLoaded };
}

export default useContentfulEntry;
