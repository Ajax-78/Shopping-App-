import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function OTP() {
  const arr = ["", "", "", ""];
  const inputRef = [useRef(), useRef(), useRef(), useRef()];
  const [input, setInput] = useState(arr);
  const [missing, setMissing] = useState(arr);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const Code = "1234";

  useEffect(() => {
    inputRef[0].current.focus();
  }, []);

  const handleChange = (e, index) => {
    const val = e.target.value;

    if (isNaN(val)) return; // Ensure input is a number

    if (index < input.length - 1) {
      inputRef[index + 1].current.focus();
    }
    const copyInput = [...input];
    copyInput[index] = val;
    setInput(copyInput);

    // Update missing state
    const copyMissing = [...missing];
    copyMissing[index] = val === "" ? index : "";
    setMissing(copyMissing);
  };

  const handleKeydown = (e, index) => {
    if (e.keyCode === 8) {
      const copyInputs = [...input];
      copyInputs[index] = "";
      setInput(copyInputs);
      if (index > 0) {
        inputRef[index - 1].current.focus();
      }

      // Update missing state
      const copyMissing = [...missing];
      copyMissing[index] = index;
      setMissing(copyMissing);
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");
    if (isNaN(data) || data.length !== input.length) return;

    const pastCode = data.split("");
    setInput(pastCode);
    inputRef[input.length - 1].current.focus();

    // Update missing state
    const copyMissing = pastCode.map((item, i) => (item === "" ? i : ""));
    setMissing(copyMissing);
  };

  const handleClick = () => {
    const missed = input
      .map((item, i) => (item === "" ? i : ""))
      .filter((item) => item !== "");

    if (missed.length > 0) {
      setMissing(missed);
      return;
    }

    const userInput = input.join("");
    if (userInput === Code) {
      alert("Login Successful");
      navigate("/"); // Redirect to the App component
    } else {
      alert("OTP is not valid");
      setInput(["", "", "", ""]);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[420px] h-[320px] flex justify-center items-center shadow-2xl rounded-md">
        <div>
          <div className="ml-20 mb-8">
            <label className="font-bold">OTP</label>
          </div>

          {arr.map((_, index) => (
            <input
              ref={inputRef[index]}
              value={input[index]}
              onChange={(e) => handleChange(e, index)}
              key={index}
              onPaste={handlePaste}
              maxLength="1"
              onKeyDown={(e) => handleKeydown(e, index)}
              type="text"
              className={`mr-1 w-12 h-12 text-center border border-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                missing.includes(index) ? "border-red-500" : ""
              }`}
            />
          ))}
          <div>
            <button
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTP;
