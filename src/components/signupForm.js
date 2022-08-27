import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "./api.js";

const SignupForm = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [close, setClose] = useState(true);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const signup = () => {
    fetch(`${API}/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        phone: phone,
        profession: profession,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res.status);

        setMessage({ message: res.message, staus: res.status });
        if (res.status === 200) {
          return setTimeout(() => {
            history.push("/");
          }, 3000);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <p
        style={{
          color: "#8cff66",
        }}
        className="text-center rounded-lg"
      >
        {message.message}
      </p>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <span
              onClick={() => history.push("/")}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              sign in to your existing account
            </span>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={(event) => {
                event.preventDefault();

                return signup();
              }}
            >
              <div className="mt-1">
                <input
                  type="text"
                  onChange={(event) => setUsername(event.target.value)}
                  required
                  placeholder="Username"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mt-1">
                <input
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="Email"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mt-1">
                <input
                  type="password"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mt-1">
                <input
                  type="text"
                  required
                  placeholder="Phone"
                  onChange={(event) => setPhone(event.target.value)}
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mt-1">
                <input
                  type="text"
                  required
                  placeholder="Profession"
                  onChange={(event) => setProfession(event.target.value)}
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
