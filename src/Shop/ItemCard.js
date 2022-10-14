import { Link } from "react-router-dom";

const ItemCard = ({ name, image, id }) => {
  return (
    <Link to={`./${id}`}>
      <div className="card-item">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div className="card-name">{name}</div>
      </div>
    </Link>
  );
};

export default ItemCard;
