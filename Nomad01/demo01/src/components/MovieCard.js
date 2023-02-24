import { Link } from "react-router-dom";

export default function MovieCard({
  url,
  background_image_original,
  title,
  rating,
  summary,
  id,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        textDecoration: "none",
        color: "black",
      }}
    >
      <img
        src={background_image_original}
        alt={title}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <h2>
        {/* Link는 새로고침을 막아준다. */}
        <Link to="/movie">{title}</Link>
      </h2>
      <h3>{rating} / 10</h3>
      <p style={{ height: "200px", overflow: "scroll" }}>
        {summary === "" ? "no details" : summary}
      </p>
    </div>
  );
}
