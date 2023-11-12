import { useState } from "react";

const registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favourite, setFavourite] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");

  return (
  
    <div className="container">
      <h3 className="form">Registration</h3>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Vardas..."
        style={{ marginBottom: 16 }}
      />
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email..."
        style={{ marginBottom: 16 }}
      />
      
      <select
        style={{ width: 200 }}
        value={favourite}
        onChange={(event) => setFavourite(event.target.value)}
      >
        <option value="">Nepasirinkta</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>

      <input
        type="number"
        value={birthDate}
        onChange={(event) => setBirthDate(event.target.value)}
        placeholder="YY/MM/DD..."
        style={{ marginBottom: 16 }}
      />

      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Min 6 characyers..."
        style={{ marginBottom: 16 }}
      />
    </div>
    
  );
};

export default registration;