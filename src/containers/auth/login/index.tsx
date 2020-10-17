import axios from "axios";
import React, { useState } from "react";
import { useFetchData } from "hooks";
import { DataProfile } from "data-access";
import { useAuth } from "context/auth";
import { Redirect } from "react-router-dom";

type Props = any;

const Login: React.FC<Props> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { setAuthToken } = useAuth();
  const referer = props.location.state.referer || "/";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await DataProfile.Post("/user/login", {
        data: { email, password },
      });
      setAuthToken(`Bearer ${response.data.data.token}`);
      setLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <div className="w-full max-w-xs mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
