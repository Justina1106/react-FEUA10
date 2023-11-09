import { useState, useEffect } from "react";
import Product from "./Product";

const URL = "https://sophisticated-humane-dandelion.glitch.me";

const Products = () => {
  const [data, setData] = useState([]); // pradine reikšmė masyvas, jeigu duomenys bus masyve

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // tusčias masyvas indikuoja, kad suveiks tik vieną kartą, kai komponentas užsikraus

  return (
    <div>
      {data.map((item, index) => (
        <Product key={item.id} product={item} index={index} />
      ))}
    </div>
  );
};

export default Products;