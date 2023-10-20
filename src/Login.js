import React, { useState } from "react";
import axios from "axios";
import './signin.css'
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    university: "",
    college: "", // Add college, state, and department fields
    state: "",
    number: "",
    acit: "",
    department: "",
    email1: "",
    year: "",
  });

  const universitiesInTamilNadu = [
    "Anna University",
    "Madras University",
    "Bharathiar University",
    "Bharathidasan University",
    "Tamil Nadu Open University",
    "Tamil Nadu Agricultural University",
    "Tamil Nadu Dr. M.G.R. Medical University",
    "Tamil Nadu Dr. Ambedkar Law University",
    "Tamil Nadu Fisheries University",
    "Tamil Nadu Veterinary and Animal Sciences University",
  ];

  const tamilNaduColleges = [
    "College 1",
    "College 2",
    "College 3",
    "College 4",
    "College 5",
  ];

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const engineeringDepartments = [
    "Computer Science",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electronics and Communication",
  ];

  const bscDepartments = [
    "Physics",
    "Chemistry",
    "Biology",
    "Mathematics",
    "Environmental Science",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUniversityChange = (e) => {
    setFormData({
      ...formData,
      university: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/Login", formData);
      console.log(response.data.message);
      // Reset the form after successful submission
      setFormData({
        email: "",
        username: "",
        university: "",
        college: "",
        state: "",
        email1: "",
        department: "",
        year: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className="form" method="post" onSubmit={handleSubmit}>
        <div className="flex-column1">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <input
            required
            placeholder="Enter your Email"
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex-column">
          <label>Username</label>
        </div>
        <div className="inputForm">
          <input
            required
            placeholder="Enter your Username"
            className="input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="flex-column">
          <label>University</label>
        </div>
        <div className="inputForm">
          <select
            required
            className="input"
            name="university"
            value={formData.university}
            onChange={handleUniversityChange}
          >
            <option value="" disabled>Select University</option>
            {universitiesInTamilNadu.map((university, index) => (
              <option key={index} value={university}>
                {university}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-column">
          <label>College Name</label>
        </div>
        <div className="inputForm">
          <select
            required
            className="input"
            name="college"
            value={formData.college}
            onChange={handleChange}
          >
            <option value="" disabled>Select College</option>
            {tamilNaduColleges.map((college, index) => (
              <option key={index} value={college}>
                {college}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-column">
          <label>State</label>
        </div>
        <div className="inputForm">
          <select
            required
            className="input"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="" disabled>Select State</option>
            {indianStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-column">
          <label>Department</label>
        </div>
        <div className="inputForm">
          <select
            required
            className="input"
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="" disabled>Select Department</option>
            {engineeringDepartments.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
            {bscDepartments.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-column">
          <label>Year of Study</label>
        </div>
        <div className="inputForm">
          <input
            required
            placeholder="Year"
            className="input"
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="button-submit">
          Sign In to Upload
        </button>
        <Link to="/Upload" className="button-submit1"> Upload here </Link>
      </form>
    </div>
  );
}

export default Login;
