import React, { useState } from "react";
//form component
const Form = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
