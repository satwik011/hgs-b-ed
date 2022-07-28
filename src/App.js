import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/ContactDetails/Contact';
import FacultyAndStaf from './Components/FacultyAndStaff/FacultyAndStaf';
import Home from './Components/Home/Home';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/faculty' element={<FacultyAndStaf></FacultyAndStaf>}></Route>
      </Routes>
    </div>
  );
}

export default App;
