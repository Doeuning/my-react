import { useEffect, useState } from "react";
function Movie(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = "c79521c72b6690785c671f45832e339b";
  const userId = "doeuning";
  const sessionId = "5cb7458b6a9c2bc68202d97a55537df2f004fce6";

  function isBottom(el) {
    return (
      Math.abs(el.getBoundingClientRect().top) + window.innerHeight >=
      el.clientHeight
    );
  }
  function trackingBottom() {
    if (isBottom(document.getElementById("App"))) {
      setPage((prev) => prev + 1);
      // window.removeEventListener("scroll", trackingBottom);
    }
  }
  function getData() {
    console.log("get data");
    fetch(
      `https://api.themoviedb.org/3//account/${userId}/rated/tv?api_key=${apiKey}&session_id=${sessionId}&page=${page}`
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (datas) {
        setData(data.concat(datas.results));
        console.log(
          "현재 페이지 -----",
          datas.page,
          "전체 페이지 -----",
          datas.total_pages
        );
        if (datas.page === datas.total_pages) {
          console.log("remove scroll event");
          window.removeEventListener("scroll", trackingBottom);
        }
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }
  useEffect(() => {
    window.addEventListener("scroll", trackingBottom);
    return () => {
      window.removeEventListener("scroll", trackingBottom);
    };
  }, []);
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <ul className="movie-list">
        {data ? (
          data.map((el) => (
            <li key={el.id} className={props.name}>
              <img
                src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
                alt={el.original_name}
              />
              <h4>{el.original_name}</h4>
              <h4>{el.rating}</h4>
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
