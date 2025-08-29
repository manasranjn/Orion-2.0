import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      mobile,
    };
    if (name && email && mobile) {
      console.log(data);
      setName("");
      setEmail("");
      setMobile("");
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div>
      <h1>Controlled</h1>
      <form action="">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Controlled;
