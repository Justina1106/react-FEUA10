import PropTypes from "prop-types";
import "./PhotoCard.css";

const PhotoCard = (props) => {
  const { photo } = props;
  const { title, image, price } = photo;

  return (
    <div className="photo-card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p className="price">{price}</p>
    </div>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
 
};

export default PhotoCard;