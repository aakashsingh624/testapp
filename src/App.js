import React, { useState } from "react";

// FormComponent
const FormComponent = React.forwardRef(({ onDisplay }, ref) => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");

  const handleDisplay = () => {
    onDisplay({ name, place });
  };

  React.useImperativeHandle(ref, () => ({
    clearForm() {
      setName("");
      setPlace("");
    },
  }));

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <label style={{ display: "block", marginBottom: "10px" }}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <br />
      <label style={{ display: "block", marginBottom: "10px" }}>
        Place:
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          style={{ marginLeft: "5px" }}
        />
      </label>
      <br />
      <button
        onClick={handleDisplay}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Display
      </button>
    </div>
  );
});

// PatientComponent
const PatientComponent = () => {
  const [patientName, setPatientName] = useState("");
  const [patientPlace, setPatientPlace] = useState("");
  const formRef = React.useRef();
  const handleDisplay = ({ name, place }) => {
    setPatientName(name);
    setPatientPlace(place);
  };

  const handleClear = () => {
    setPatientName("");
    setPatientPlace("");
    formRef.current.clearForm();
  };

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid #ccc" }}>
      <label style={{ display: "block", marginBottom: "10px" }}>
        Name: {patientName && <span>{patientName}</span>}
      </label>
      <br />
      <label style={{ display: "block", marginBottom: "10px" }}>
        Place: {patientPlace && <span>{patientPlace}</span>}
      </label>
      <br />
      <button
        onClick={handleClear}
        style={{
          backgroundColor: "#f44336",
          color: "white",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Clear
      </button>
      <br />
      <FormComponent onDisplay={handleDisplay} ref={formRef} />
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Patient Information</h1>
      <PatientComponent />
    </div>
  );
};

export default App;
