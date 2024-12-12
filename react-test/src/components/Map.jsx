import "./Map.css";

export default function Map({ id, image, title, language, cost }) {
  return (
    <div className="container">
      <div className="cards">
        <h1 className="key">{id}</h1>
        <img className="image" src={image} alt={title} />
        <h2 className="title">Title: {title}</h2>
        <h3 className="language">Language: {language}</h3>
        <h4 className="cost">Cost: {cost}</h4>
      </div>
    </div>
  );
}
