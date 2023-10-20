import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Authunom from './Authunom';
import Auth from './Auth';
import Pstable from './Pstable';
import Mentor from './Mentorjs';
import Upload from './Upload';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/Authunom'element={<Authunom/>}></Route>
        <Route path='/Auth'element={<Auth/>}></Route>
        <Route path='/Pstable'element={<Pstable/>}></Route>
        <Route path='/Mentor'element={<Mentor/>}></Route>
        <Route path='/Upload'element={<Upload/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
