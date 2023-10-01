import { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axiosInstance from "../../axiosConfig/instance";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/slices/favorite";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { MoviesAction } from "../../store/slices/movies";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const moviesList = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(MoviesAction());
  }, []);

  console.log(moviesList);

  useEffect(() => {
    pages(currentPage);
  }, [currentPage]);

  function pages(page) {
    axiosInstance
      .get(`/movie/popular?page=${page}`)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // const startIndex = currentPage * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const subset = data.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  // const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.favorite);
  const isFavorite = (favMovie) =>
    favorite.some((movie) => movie.id === favMovie);

  const toggleFavorite = (movie) => {
    if (isFavorite(movie.id)) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <>
      <div className="m-5">
        <Row xs={1} md={4} className="g-4">
          {movies.map((movie) => (
            <Col key={movie.id}>
              {movie.total_pages}
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                {/* <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                /> */}
                <Card.Body>
                  {/* release_date
              popularity
              original_language
              vote_average
              vote_count */}
                  <Card.Title>
                    <Link to={`/details/${movie.id}`}>
                      {movie.original_title}
                    </Link>
                  </Card.Title>
                  <div
                    onClick={() => {
                      toggleFavorite(movie);
                    }}
                  >
                    {isFavorite(movie.id) ? (
                      <AiFillHeart
                        size={"50px"}
                        style={{ border: "red", fill: "red" }}
                      />
                    ) : (
                      <AiOutlineHeart size={"50px"} style={{ fill: "red" }} />
                    )}
                  </div>
                  {/* <Card.Text>{movie.overview}</Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="pagination d-flex justify-content-evenly">
          <button
            onClick={() => {
              handlePageChange(currentPage - 1);
            }}
            disabled={currentPage === 1}
          >
            prev
          </button>
          <button
            onClick={() => {
              handlePageChange(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              handlePageChange(2);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              handlePageChange(3);
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              handlePageChange(4);
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              handlePageChange(5);
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              handlePageChange(6);
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              handlePageChange(currentPage + 1);
            }}
            disabled={currentPage >= 39752}
          >
            next
          </button>
        </div>

        {/* <ReactPaginate
          pageCount={39752}
          onPageChange={() => {
            handlePageChange(currentPage);
          }}
          breakLabel={"..."}
          forcePage={currentPage}
          previousLabel={"<<"}
          renderOnZeroPageCount={null}
          pageRangeDisplayed={2}
          nextLabel={">>"}
          containerClassName={"pagination-container"}
          activeClassName={"active-page"}
          // className="d-flex "
        /> */}
      </div>
    </>
  );
}
