import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../customHooks/useFetch';

function MarkupsList() {
  const {
    data: markups,
    isError,
    isLoading,
  } = useFetch('http://localhost:8000/markups');

  useEffect(() => {
    console.log(markups);
  }, [markups]);

  return (
    <div className='container mt-3'>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Oops... Unable to load markups</div>}
      {!isError && !isLoading && markups && <ItemsList items={markups} />}
    </div>
  );
}

function ItemsList({ items }) {
  return (
    <>
      <div className='text-end'>total: {items.length} saved markups</div>
      <div className='list-group list-group-flush'>
        {items.map((item) => {
          return (
            <Link to={`/markups/${item.id}`}>
              <div key={item.id} className='list-group-item'>
                {item.schoolName}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default MarkupsList;
