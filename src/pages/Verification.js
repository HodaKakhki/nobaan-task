import React, { useEffect, useRef } from "react";

function Verification() {
  const formRef = useRef(null);
  const firstInput = useRef(null);

  useEffect(() => {
    firstInput.current.focus();
  }, []);

  // Dynamic input focus handling
  const handleChange = (idx) => {
    formRef.current[idx].focus();
  };

  // The CLEAR button resets the component
  const reset = () => {
    const inputLength = formRef.current.length;
    for (let i = 0; i < inputLength; i++) {
      formRef.current[i].value = "";
    }
    formRef.current[0].focus();
  };

  return (
    <div className="wrapper">
      <h3>Enter Your 4 digits verification code</h3>
      <form ref={formRef}>
        <input
          ref={firstInput}
          type="number"
          className="focused"
          onChange={() => handleChange(1)}
        />
        <input
          type="number"
          className="focused"
          onChange={() => handleChange(2)}
        />
        <input
          type="number"
          className="focused"
          onChange={() => handleChange(3)}
        />
        <input type="number" className="focused" />
      </form>

      <div className="wrap-btn">
        <button type="button" className="bg-blue">
          VERIFY CODE
        </button>
        <button type="button" onClick={reset}>
          <span className="close">&times;</span>CLEAR
        </button>
      </div>
      <h5 className="bg-blue">correct phone number</h5>
    </div>
  );
}

export default Verification;
