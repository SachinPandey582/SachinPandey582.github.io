import React, { useState } from "react";
import "./ContactStyle.css";
const ContactDetails = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="Container">
      <div className="LinkedImage">
        <div><img style={{width:"50px"}} src="1.png" alt="asda" />
            github</div>
            <div><img style={{width:"50px"}} src="1.png" alt="asda" />
            github</div><div><img style={{width:"50px"}} src="1.png" alt="asda" />
            github</div>
      </div>
      <div className="InsideContact">
        <form action="">
          <h1> Fill Your Details :-</h1>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleChange} />
          <label>Email:</label>{" "}
          <input type="text" value={name} onChange={handleChange} />
          <label>Contact:</label>
          <input type="text" value={name} onChange={handleChange} />
          <br />
          <br />
          <h3>message me </h3>
          <input type="text" />
          <br /><br /><br />
          <button className="btn ">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactDetails;
