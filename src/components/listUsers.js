import React, { useEffect, useState } from "react";
import API from "./api.js";
import { useHistory } from "react-router-dom";

const ListUsers = () => {
  const [users, setUsers] = useState("");
  const [update, setUpdate] = useState("");

  useEffect(() => {
    fetch(`${API}/api/users/`)
      .then((data) => data.json())
      .then((res) => setUsers(res))
      .catch((error) => console.log(error));
  }, [users, update]);

  return (
    <div>
      <div className="container mx-auto">
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Profession
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {users === "" ? (
                      <h1 className="absolute top-1/3 left-1/2">
                        Loading Please wait....
                      </h1>
                    ) : (
                      users.map((user) => (
                        <Usertable
                          update={update}
                          setUpdate={setUpdate}
                          id={user._id}
                          username={user.username}
                          email={user.email}
                          phone={user.phone}
                          profession={user.profession}
                        />
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUsers;

const Usertable = ({
  update,
  setUpdate,
  id,
  username,
  email,
  phone,
  profession,
}) => {
  const history = useHistory();

  const deleteUser = (id) => {
    fetch(`${API}/api/users/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.status == 200) {
          return setUpdate("changed");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <tr key={id}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {username}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {email}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {phone}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {profession}
      </td>
      <td className="flex justify-start relative whitespace-nowrap py-4 pl-3 pr-4 text-start text-sm font-medium sm:pr-6">
        <svg
          onClick={() => history.push(`/user/edit/${id}`)}
          className="mr-5"
          style={{ width: "20px", display: "inline", fill: "#66e0ff" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z" />
        </svg>

        <svg
          onClick={() => deleteUser(id)}
          style={{ width: "20px", display: "inline", fill: "#ff5c33" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
        </svg>
      </td>
    </tr>
  );
};
