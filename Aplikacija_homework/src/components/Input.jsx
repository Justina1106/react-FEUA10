import { useState } from "react";

const Input = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [favourite, setFavourite] = useState("");

  return (
  
    <div className="container">
      <h3 className="form">REGISTER</h3>
      <p className="text">It's completely free</p>
      <div>
        {name} {surname} mėgstamiausias gyvūnas yra {favourite}
      </div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Vardas..."
        style={{ marginBottom: 16 }}
      />
      <input
        type="text"
        value={surname}
        onChange={(event) => setSurname(event.target.value)}
        placeholder="Pavardė..."
        style={{ marginBottom: 16 }}
      />
      
      <select
        style={{ width: 200 }}
        value={favourite}
        onChange={(event) => setFavourite(event.target.value)}
      >
        <option value="">Nepasirinkta</option>
        <option value="šuo">Šuo</option>
        <option value="katė">Katė</option>
        <option value="žuvytės">Žuvytės</option>
      </select>
    </div>
    
  );
};

export default Input;