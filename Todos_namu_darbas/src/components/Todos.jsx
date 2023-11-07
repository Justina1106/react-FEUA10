import { useState, useEffect } from "react";
import Todo from "./Todo";

const URL = "https://jsonplaceholder.typicode.com/todos";

const Todos = () => {
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
        <Todo key={item.id} todo={item} index={index} />
      ))}
    </div>
  );
};

export default Todos;