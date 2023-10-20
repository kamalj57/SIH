import React, { useState } from 'react';
import Aa from './Mentorjs.module.css';
import logo1 from './mentor.png';
import { Link } from 'react-router-dom';

export default function Mentor() {
  const [role, setRole] = useState(''); // State to store the selected role

  // Function to handle role selection
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div className={Aa.main}>
      <div className={Aa.img}>
        <img src={logo1} className={Aa.img1} alt="Logo" />
      </div>
      <div className={Aa.main1}>
        <label className={Aa.lab}>Email:</label><br />
        <input type='email' required placeholder='Enter Email' /><br /><br />
        <label className={Aa.lab}>Password:</label><br />
        <input type='password' required placeholder='Enter Password' /><br /><br />
        <label className={Aa.lab}>Role:</label><br />
        <select
          required
          value={role}
          onChange={handleRoleChange}
          className={Aa.select}
        >
          <option value="" disabled>Select Your Role</option>
          <option value="Authenticator">Authenticator</option>
          <option value="Student">Student</option>
          <option value="Mentor">Mentor</option>
          <option value="Other">Other</option>
        </select>
        <br /><br /><br />
        <Link to='/Upload'  className={Aa.btn1} >Login</Link>
      </div>
    </div>
  )
}
