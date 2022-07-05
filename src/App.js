import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const { loading, data } = useFetch();
  //after paginate func added, data shows how many arrays in array we have so neeed to add state of page and followers we want to display
  console.log('loading', loading, 'data', data);
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  //want to use useEffect to show for ex. page 1 with followers in array 1 when the app loads
  //i want to paginate only when loading is false already

  useEffect(() => {
    if (loading) return;
    //data[0] - so it takes first array. when loading changes, rerun my callback function
    setFollowers(data[page]);
  }, [loading, page]);
  // /controls which page i am showing
  const handlePage = (index) => {
    console.log('click', index);
    setPage(index);
    // setFollowers(data[index]);
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      console.log(oldPage, 'old page value');
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? '..loading..' : 'pagination'}</h1>
      </div>
      <section className='followers'>
        <div className='container'>
          {/* {data.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })} */}
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {/* when loading i do not want to show those buttons, my data.length is my number of pages, so I care about index so change the page */}
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
