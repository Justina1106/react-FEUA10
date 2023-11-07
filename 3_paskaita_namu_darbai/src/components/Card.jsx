import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Card;
