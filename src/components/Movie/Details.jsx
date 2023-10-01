import { useEffect, useState } from "react";
import axiosInstance from "../../axiosConfig/instance";
import { useParams } from "react-router-dom";

export default function Details() {
  const [movie, setMovie] = useState({});
  var { id } = useParams();
  useEffect(function () {
    const getDetails = async () => {
      try {
        var res = await axiosInstance.get(`/movie/${id}`);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDetails();
  }, []);
  return (
    <>
      <div className="m-5">
        <img
          className="img-thumbnail "
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} /> */}
        {/* <Card.Img variant="top" src={movie.backdrop_path} />
              <Card.Img variant="top" src={movie.poster_path} /> */}
        <h2>{movie.original_title}</h2>
        <p className="text-secondary">{movie.release_date}</p>
        <h5>{movie.overview}</h5>
        {/* release_date
              popularity
              original_language
              vote_average
              vote_count  */}
      </div>
    </>
  );
}
