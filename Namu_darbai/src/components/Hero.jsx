import React from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

const Hero = ({ title, subtitle, color }) => {
  return (
    <div className={`hero ${color}`}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['red', 'blue']).isRequired,
};

export default Hero;