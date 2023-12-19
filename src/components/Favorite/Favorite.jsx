import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsTrashFill } from "react-icons/Bs";
import { removeFavorite } from "../../store/slices/favorite";
// import React from "react";
export default function Favorite() {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.favorite);
  const toggleFavorite = function (movie) {
    dispatch(removeFavorite(movie));
  };

  return (
    <>
      <div className="m-5">
        <Row xs={1} md={4} className="g-4">
          {favorite.map((movie) => (
            <Col key={movie.id}>
              {movie.total_pages}
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>
                    <Link to={`/details/${movie.id}`}>
                      {movie.original_title}
                    </Link>
                  </Card.Title>
                  <div
                    onClick={() => {
                      toggleFavorite(movie.id);
                    }}
                  >
                    <BsTrashFill />
                  </div>
                  <Card.Text>{movie.overview}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
