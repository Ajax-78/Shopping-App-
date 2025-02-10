import React, { useState } from "react";
import OTP from "./OTP";

const user = {
  name: "Pawan Sharma",
  email: "sharma222790@gmail.com",
  password: "123",
};

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.name === formData.name &&
      user.email === formData.email &&
      user.password === formData.password
    ) {
      setIsLogin(true);
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="flex justify-center p-6">
      {!isLogin ? (
        <div className="w-[420px] h-[320px] shadow-2xl rounded-md">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-2 gap-2"
          >
            <h3 className="text-center font-bold">Login Form</h3>
            <label
              className="text-black after:text-red-500 after:content-['*']"
              htmlFor="name"
            >
              Name
            </label>
            <input
              placeholder="Name"
              className="border rounded-md"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="email"
              className="after:text-red-500 after:content-['*']"
            >
              Email
            </label>
            <input
              placeholder="Email"
              className="border rounded-md"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label
              className="after:text-red-500 after:content-['*']"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              placeholder="Password"
              type="password"
              className="border rounded-md"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 ring-2 ring-blue-500 rounded-xl font-bold h-8 hover:bg-blue-700 text-white mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <OTP />
      )}
    </div>
  );
}

export default Login;
