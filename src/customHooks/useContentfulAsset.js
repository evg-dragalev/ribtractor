import { useState, useEffect } from 'react';
import contentfulClient from '../contentfulClient';

function useContentfulAsset(entryId) {
  const [asset, setAsset] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [promise, setPromise] = useState(null);

  useEffect(() => {
    const promise = contentfulClient
      .getAsset(entryId)
      .then((assetData) => {
        console.log(assetData);
        setAsset(assetData);
        return assetData;
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    setPromise(promise);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { asset, isError, isLoading, promise };
}

export default useContentfulAsset;
