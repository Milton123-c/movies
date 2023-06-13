import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, selectMovie }) => {
  const { name, image } = movie;

  const isLong = movie.synopsis.length > 120;

  const synopsis = !isLong
    ? movie.synopsis
    : movie.synopsis.slice(0, 120) + "...";

  const navigate = useNavigate();

  return (
    <Col>
      <Card
        style={styles.container}
        onClick={() => navigate(`/movies/${movie.id}`)}
      >
        <Card.Img
          variant="top"
          src={image}
          style={{ height: 300, objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title style={{ color: "#D89216" }}>{name}</Card.Title>
          <Card.Text>{synopsis}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const styles = {
  container: {
    height: "100%",
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 255, 0.473)",
    borderRadius: "0.5em",
    overflow: 'hidden'
  },

};

export default MovieCard;
