import React, { useRef } from "react";

const Uncontrolled = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(mobileRef.current.value);
  };

  return (
    <div>
      <form action="">
        <input type="text" placeholder="Enter your name" ref={nameRef} />
        <input type="text" placeholder="Enter your email" ref={emailRef} />
        <input type="text" placeholder="Enter your mobile" ref={mobileRef} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Uncontrolled;
