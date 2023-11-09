import PropTypes from "prop-types";
import "./Product.css";

const Product = (props) => {
  const { Product, index } = props;
  return (
    <div className="product-card">
      <h3>
        {index + 1}. {product.title}
      </h3>
      <p>{product.imageURL && <img src={imageURL} alt="Fetched Image" />}</p>
      <a href="#">Read more...</a>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  index: PropTypes.number.isRequired,
};

export default Product;