import React, { useState } from "react";

// FormComponent
const FormComponent = ({ onDisplay }) => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");

  const handleDisplay = () => {
    onDisplay({ name, place });
  };

  return (
    <div>
      <label>
        name :
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        place :
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleDisplay}>Display</button>
    </div>
  );
};

// PatientComponent
const PatientComponent = () => {
  const [patientName, setPatientName] = useState("");
  const [patientPlace, setPatientPlace] = useState("");

  const handleDisplay = ({ name, place }) => {
    setPatientName(name);
    setPatientPlace(place);
  };

  const handleClear = () => {
    setPatientName("");
    setPatientPlace("");
  };

  return (
    <div>
      <label>name : {patientName && <span>{patientName}</span>}</label>
      <br />
      <label>place : {patientPlace && <span>{patientPlace}</span>}</label>
      <br />
      <button onClick={handleClear}>Clear</button>
      <br />
      <FormComponent onDisplay={handleDisplay} />
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
      <PatientComponent />
    </div>
  );
};

export default App;
