import { useEffect, useState } from "react";
function Movie(props) {
  const [data, setData] = useState(null);
  const apiKey = "c79521c72b6690785c671f45832e339b";
  const userId = "doeuning";
  const sessionId = "5cb7458b6a9c2bc68202d97a55537df2f004fce6";
  const [page, setPage] = useState(1);

  function isBottom(el) {
    return (
      Math.abs(el.getBoundingClientRect().top) + window.innerHeight >=
      el.clientHeight
    );
  }
  function trackingBottom() {
    if (isBottom(document.querySelector(".movie-list"))) {
      setPage((num) => (num += num));
      getData();
    }
  }
  function getData() {
    document.removeEventListener("scroll", trackingBottom);
    fetch(
      `https://api.themoviedb.org/3//account/${userId}/rated/tv?api_key=${apiKey}&session_id=${sessionId}&page=${page}`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (datas) {
        setData(datas.results);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
    window.addEventListener("scroll", trackingBottom);
  }
  useEffect(() => {
    window.addEventListener("scroll", trackingBottom);
    getData();
  }, []);

  return (
    <>
      <ul className="movie-list">
        {data ? (
          data.map((el) => (
            <li key={el.id} className={props.name}>
              <img
                src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
                alt={el.original_title}
              />
              <h4>{el.original_title}</h4>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
}

export default Movie;
