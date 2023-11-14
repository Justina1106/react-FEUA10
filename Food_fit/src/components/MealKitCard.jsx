import PropTypes from "prop-types";
import "./MealKitCard.scss";

const MealKitCard = (props) => {
  const { url, mealCount, title, price } = props.mealKit;
  return (
    <div className="meal-kit-card">
      <div
        className="card-header"
        style={{
          backgroundImage: `url("${url}")`,
        }}
      ></div>
      <div className="card-footer">
        <div className="left-side">
          <span className="badge">
            {mealCount} {mealCount === 1 ? "patiekalas" : "patiekalai"}
          </span>
          <h3>{title}</h3>
        </div>
        <div className="price-block">
          <h3>Nuo</h3>
          <h2>${price}</h2>
          <h3>Dienai</h3>
        </div>
      </div>
    </div>
  );
};

MealKitCard.propTypes = {
  mealKit: PropTypes.shape({
    url: PropTypes.string.isRequired,
    mealCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default MealKitCard;