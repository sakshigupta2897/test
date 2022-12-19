import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

const EmployForm = ({ setEmployData, employData }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    salary: "",
    image: "",
  });

  const { name, age, salary, image } = formData;
  const [search, setSearch] = useState('');
 
  const [uploadImg, setUploadImg] = useState([]);
  
  const handleImg = (e) => {
    setUploadImg([...e.target.value]);
  };
  const handleFormInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    employData?.filter((item)=>item.name.includes(search))
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("data")) {
      const praseData = JSON.parse(localStorage.getItem("data"));
      localStorage.setItem("data", JSON.stringify([...praseData, formData]));
    
    } else {
      localStorage.setItem("data", JSON.stringify([formData]));
    }
    setEmployData(JSON.parse(localStorage.getItem("data")));
  };

  

  return (
    <>
      <div className="search_bar">
        <input type="text" value={search} placeholder="search" onChange={(e)=>{setSearch(e.target.value)}} />
        <button className="submit_btn" onClick={handleSearch} >
          Search
        </button>
      </div>

      {employData
      ?.filter((item)=>item.includes(search))
      ?.map((item) =>{
          <div>{item}</div>
      })
      }
      <div className="form_input">
        <div className="input_box">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id={name} onChange={handleFormInput} />
        </div>

        <div className="input_box">
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id={age} onChange={handleFormInput} />
        </div>
        <div className="input_box">
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            name="salary"
            id={salary}
            onChange={handleFormInput}
          />
        </div>
        <div className="input_box">
          <label htmlFor="image">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            name="picture"
            id={image}
            onChange={handleImg}
          />
        </div>

        <button className="submit_btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default EmployForm;
