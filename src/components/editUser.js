import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import API from "./api.js";

const EditUser = () => {
  const history = useHistory();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [profession, setProfession] = useState(user.profession);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    fetch(`${API}/api/users/${id}`)
      .then((data) => data.json())
      .then((res) => setUser(res))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setEmail(user.email);
    setPhone(user.phone);
    setProfession(user.profession);
  }, [user]);

  const updateUser = () => {
    fetch(`${API}/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        email: email,
        phone: phone,
        profession: profession,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        return history.push("/users");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
            Update your account details
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={(event) => {
                event.preventDefault();
                return updateUser();
              }}
            >
              <div className="mt-1">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="Email"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mt-1">
                <input
                  type="text"
                  required
                  placeholder="Phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mt-1">
                <input
                  type="text"
                  required
                  placeholder="Profession"
                  value={profession}
                  onChange={(event) => setProfession(event.target.value)}
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
