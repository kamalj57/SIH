import Ho from './Home.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './mainimg.png';
import logo1 from './nextsvg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

function Home() {

  return (
    <div className={Ho.App}>  
    <div className={Ho.nav}>
      <h1>InfoTube!</h1>
     <nav>
       <Link to="/Authunom" className={Ho.ln}>About Us</Link>
       <Link to="/Auth" className={Ho.ln}>Authenticator</Link>
       <Link to="/Authunom" className={Ho.ln}>Authenicator Nomination</Link>
       <Link to="/Mentor " className={Ho.ln}>Mentor Upload</Link>
       <Link to="/Pstable " className={Ho.ln}>Students Analytics</Link>
     </nav>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00ED64" fill-opacity="1" d="M0,288L80,277.3C160,267,320,245,480,250.7C640,256,800,288,960,293.3C1120,299,1280,277,1360,266.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    <img src={logo} className={Ho.img1}/>
    <div className={Ho.main}>
    <h1>
      Let Lose<span>your</span> mad <br />
          <span>Software</span>/Hardware <br/>skills <span>here.</span>
        </h1>
        <p>
          --A platform where ideas and projects taken
          up by the students of various universities/colleges<br/>can be found and
          can upload here!!..--
        </p>
    </div>
    <div className={Ho.btn2}>
      <Link to='/Pstable' className={Ho.btn21}>View Submitted Projects</Link>
    </div>
    <div className={Ho.mncard}>
    <div className={Ho.hd}>
        <h1>InfoTube! Stats.</h1>
      </div>
    <div className={Ho.card}>
       <div className={Ho.card1}><FontAwesomeIcon icon={faFile} className={Ho.icn}/>
        <h3>Total:<h1>3000+</h1>project details submitted across Indian universities</h3>
       </div>
        <div className={Ho.card1}><FontAwesomeIcon icon={faGears} className={Ho.icn}/>
        <h3>Total:<h1>3000+</h1>project details submitted across Indian universities</h3>
        </div>
       <div className={Ho.card1}><FontAwesomeIcon icon={faGraduationCap} className={Ho.icn}/>
       <h3>Total:<h1>3000+</h1>project details submitted across Indian universities</h3>
       </div>
       <div className={Ho.card1}><FontAwesomeIcon icon={faBuildingColumns} className={Ho.icn}/>
       <h3>Total:<h1>3000+</h1>project details submitted across Indian universities</h3>
       </div>
    </div>
    </div>
    <div className={Ho.sec}>
    <svg xmlns="http://www.w3.org/2000/svg" className={Ho.svg1} viewBox="0 0 1440 320"><path fill="#00ED64" fill-opacity="1" d="M0,224L80,202.7C160,181,320,139,480,117.3C640,96,800,96,960,122.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <div className={Ho.sec1}>
    <h1><span>Are you a  </span>Student??..</h1>
    <p>Steps to Upload your <span>Project Details</span></p>
    <div className={Ho.crd}>
    <div className={Ho.crd1}><FontAwesomeIcon icon={faPersonChalkboard} className={Ho.icn1}/>
    <p><b>Step1:</b><br/><span>Visit your project mentor and get the acknowledgment of your project.</span></p>
    </div>
    <div className={Ho.crd1}><FontAwesomeIcon icon={faUpload} className={Ho.icn1}/>
    <p><b>Step2:</b><br/><span>Submit your projct details  abstract and report to your mentor after document verification</span></p>
    </div>
    <div className={Ho.crd1}><FontAwesomeIcon icon={faCheckDouble} className={Ho.icn1}/>
    <p><b>Step3:</b><br/><span>Once verification is done your mentor will upload the project here with your team details</span></p>
    </div>
    </div>
    </div>
    </div>
    <div className={Ho.main2}>
      <img src={logo1} className={Ho.img2} alt="loading" />
      <div className={Ho.main21}>
        <h1>Why InfoTube!..?</h1>
        <p>Welcome to our innovative platform for showcasing final year and hackathon-level projects, bridging the gap between aspiring students and industry professionals. Our website serves as a hub for the exchange of cutting-edge ideas, encompassing both hardware and software projects, alongside a robust plagiarism-checking and AI detection system.
           The uniqueness of our platform lies in its inclusivity - students, academics, and industry experts can explore an array of remarkable projects without requiring a login or signup. To maintain the highest quality standards, each college nominates an authenticator, who is then empowered to create a mentor account. These mentors play a pivotal role in ensuring that every project adheres to the highest standards before it gets showcased on our platform.
           Before a project is uploaded, it undergoes rigorous scrutiny by the mentor, ensuring that only the most exceptional projects are featured. Moreover, our plagiarism-checking system guarantees the originality of each submission. To further enhance the diversity of projects on display, our system prevents the same project from being uploaded more than once, promoting a wide variety of innovations.
           </p>
      </div>
    </div>
    <div className={Ho.foot}>
      <div className={Ho.foot1}>
        <div className={Ho.footer}>
      <h1 className={Ho.clr}><span>Info</span>Tube<span>!</span></h1>
      <div className={Ho.fot}>
      <div className={Ho.foot11}>
         <h3 className={Ho.hh3}><span>Navigation Links</span></h3>
         <p><span>Home</span></p>
         <p><span>About Us</span></p>
         <p><span>Contact Us</span></p>
         <p><span>Privacy Policy</span></p>
         <p><span>Terms of Service</span></p>
      </div>
      <div className={Ho.foot12}>
      <h3 className={Ho.hh3}><span>Contact Information:</span></h3>
        <p><span>Email Address: contact@infotube.com</span></p>
        <p><span>Phone Number: +1 (123) 456-7890</span></p>
        <p><span>Physical Address: [Your Office Address]</span></p>
      </div>
      <div className={Ho.foot13}>
      <h3 className={Ho.hh3}><span>Quick Links:</span></h3>
       <p><span>FAQs</span></p>
       <p><span>Help Center</span></p>
       <p><span>Site Map</span></p>
      </div>
      <div className={Ho.foot13}>
      <h3 className={Ho.hh3} ><span>Navigation Links</span></h3>
         <p><span>Home</span></p>
         <p><span>About Us</span></p>
         <p><span>Contact Us</span></p>
         <p><span>Privacy Policy</span></p>
         <p><span>Terms of Service</span></p>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Home;
