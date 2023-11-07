import React from 'react';
import Card from './components/Card'; // Assuming Card.jsx is in the same directory

const Apps = () => {
  return (
    <div className="Apps">
      <Card
        imageUrl="https://example.com/image1.jpg"
        title="Card 1"
        subtitle="Subtitle for Card 1"
      />
      <Card
        imageUrl="https://example.com/image2.jpg"
        title="Card 2"
        subtitle="Subtitle for Card 2"
      />
    </div>
  );
};

export default Apps;
