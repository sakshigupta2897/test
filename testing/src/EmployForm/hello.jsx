import React, { useEffect, useState } from "react";
import "./style.css";
const UserForm = () => {
  const [userData, setUserData] = useState({
    employee_name: "",
    employee_age: "",
    employee_salary: "",
    employee_file: [],
  });
  const [search, setSearch] = useState("");
  const [employData, setEmployData] = useState([]);
  const [getUser, setGetUser] = useState([]);
  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handlefile = (e) => {
    setUserData({ ...userData, file: e.target.files[0].name });
    console.log(userData.file);
  };
  console.log(userData.file)
  console.log(employData);
  const handleClick = (e) => {
    e.preventDefault();
    setEmployData([...employData, userData]);
    localStorage.setItem("userData", JSON.stringify(employData));
    setUserData({
      employee_age: "",
      employee_file: "",
      employee_salary: "",
      employee_name: "",
    });
    const localData = window.localStorage.getItem("userData");
    const dataD = JSON.parse(localData);
    setGetUser(dataD);
  };
  const handleSearch = (e) => {
    const ss = getUser.filter((elem) => elem.includes(search));
    console.log(ss);
  };
  console.log(search);
  useEffect(() => {
    const localData = window.localStorage.getItem("userData");
    const dataD = JSON.parse(localData);
    setGetUser(dataD);
  }, []);
  return (
    <div className="user-form" onSubmit={handleClick}>
      <form>
        <div>
          <label>
            Employee Name
            <input
              type="text"
              value={userData.employee_name}
              onChange={handleInput}
              name="employee_name"
            />
          </label>
        </div>
        <div>
          <label>
            Employee Age
            <input
              type="text"
              value={userData.employee_age}
              onChange={handleInput}
              name="employee_age"
            />
          </label>
        </div>
        <div>
          <label>
            Employee Salary
            <input
              type="text"
              value={userData.employee_salary}
              onChange={handleInput}
              name="employee_salary"
            />
          </label>
        </div>
        <label>
          upload Image
          <input type="file" onChange={handlefile} />
        </label>
        <button onClick={handleClick}>Add User</button>
      </form>
      <div>
        <div>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button onClick={handleSearch}>search</button>
        </div>
        <table>
          <tr>
            <th>Sno</th>
            <th>Employee Name</th>
            <th>Employee Age</th>
            <th>Employee Salary</th>
            <th>Employee Image</th>
          </tr>
          {getUser
            .filter((elem) => elem.employee_name.includes(search))
            .map((users,index) => (
              <tr>
                <th>{index}</th>
                <th>{users.employee_name}</th>
                <th>{users.employee_age}</th>
                <th>{users.employee_salary}</th>
                <th>{users.file}</th>
                <th></th>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};
export default UserForm;