import React, { useState } from 'react';
import Au from './Authunom.module.css'; // Correct the import path

export default function Authunom() {
    const [aishecode, setAishecode] = useState('');
    const [collegename, setCollegename] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [iic, setIic] = useState('');
    const [letter, setLetter] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className={Au.headerAuth}>
                <h1><b>**New Users:</b> Need to enter all the data before uploading consent letter and submitting.**</h1>
            </div>
            <div className={Au.main}>
                <div className={Au.outerAuth}>
                    <form className={Au.formAuth} method="post" onSubmit={handleSubmit}>
                        <div className={Au.flexColumnAuth}>
                            <label className={Au.lbbAuth}>AISHE Code</label>
                        </div>
                        <div className={Au.inputFormAuth}>
                            <input
                                required
                                placeholder="AISHE CODE"
                                className={Au.inputAuth}
                                type="text"
                                value={aishecode}
                                onChange={(e) => setAishecode(e.target.value)}
                            />
                            <button type="submit" className={Au.buttonSubmitAuth}>
                                Check
                            </button>
                        </div>
                        <div className={Au.infoAuth}>
                            <p>ENTER YOUR COLLEGE AISHE CODE AND CLICK CHECK</p>
                            <ul type="bullet">
                                <li>To Know AISHE Current application Number, <a href="https://aishe.gov.in/aishe/aisheCode">click here</a></li>
                            </ul>
                        </div>
                        <div className={Au.flexColumnAuth}>
                            <label className={Au.lbbAuth}>College Name</label>
                        </div>
                        <div className={Au.inputFormAuth}>
                            <input
                                required
                                placeholder="Enter your Password"
                                className={Au.inputAuth}
                                type="text"
                                value={collegename}
                                onChange={(e) => setCollegename(e.target.value)}
                            />
                        </div>
                        <br></br>
                        <div className={Au.flexAuth}>
                            <div className={Au.flexColumnAuth}>
                                <label className={Au.lbbAuth}>State</label>
                            </div>
                            <div className={Au.inputFormAuth}>
                                <input
                                    required
                                    placeholder="Enter your Password"
                                    className={Au.inputAuth}
                                    type="text"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </div>
                            <div className={Au.flexColumnAuth}>
                                <label className={Au.lbbAuth}>District</label>
                            </div>
                            <div className={Au.inputFormAuth}>
                                <input
                                    required
                                    placeholder="Enter your Password"
                                    className={Au.inputAuth}
                                    type="text"
                                    value={district}
                                    onChange={(e) => setDistrict(e.target.value)}
                                />
                            </div>
                            <div className={Au.flexColumnAuth}>
                                <label className={Au.lbbAuth}>City</label>
                            </div>
                            <div className={Au.inputFormAuth}>
                                <input
                                    required
                                    placeholder="Enter your Password"
                                    className={Au.inputAuth}
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={Au.flexColumnAuth}>
                            <label className={Au.lbbAuth}>College Faculty First Name</label>
                        </div>
                        <div className={Au.inputFormAuth}>
                            <input
                                required
                                placeholder="Enter your first name"
                                className={Au.inputAuth}
                                type="text"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </div>
                        <div className={Au.flexColumnAuth}>
                            <label className={Au.lbbAuth}>College Faculty Last Name</label>
                        </div>
                        <div className={Au.inputFormAuth}>
                            <input
                                required
                                placeholder="Enter your last name"
                                className={Au.inputAuth}
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </div>
                        <div className={Au.flexColumnAuth}>
                            <label className={Au.lbbAuth}>Email</label>
                        </div>
                        <div className={Au.inputFormAuthemail}>
                            <input
                                required
                                placeholder="sample@gmail.com"
                                className={Au.inputAuth}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={Au.flexColumnAuth}>
                            <label className={Au.lbbAuth}>Mobile No</label>
                        </div>
                        <div className={Au.inputFormAuth}>
                            <input
                                required
                                placeholder="Valid mobile number"
                                className={Au.inputAuth}
                                type="number"
                                value={mobilenumber}
                                onChange={(e) => setMobilenumber(e.target.value)}
                            />
                        </div>
                        <div className={Au.flexColumnnnAuth}>
                            <label className={Au.lbbAuthNew}>IIC Institute Code (optional)</label>
                        </div>
                        <div className={Au.inputFormAuth}>
                            <input
                                required
                                placeholder="IIC Institute Code"
                                className={Au.inputAuth}
                                type="number"
                                value={iic}
                                onChange={(e) => setIic(e.target.value)}
                            />
                        </div>
                        <div className={Au.flexColumnnnAuth}>
                            <label className={Au.lbbAuthNew}>Upload Consent Letter(PDF,JPG,PNG max 2MB)</label>
                        </div>
                        <div className={Au.inputFormAuth}>
                            <input
                                required
                                placeholder=""
                                className={Au.inputAuth}
                                type="file"
                                value={letter}
                                onChange={(e) => setLetter(e.target.value)}
                            />
                        </div>
                        
                    </form>
                </div>
            </div>
            <div className={Au.info1outer}>
            <div className={Au.info1}>
                            <p>* Disclaimer: The college and school SPOC should be responsible to check each and every data before submitting. Do check the mobile number and email ID as they will be used for all future communication and verification.</p>
                        </div>
                        </div>
        </>
    );
}

