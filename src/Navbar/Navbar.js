import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({setShowNavbar, setOverview, setLidership, setProgramsOffered, setAlumni, setAdmission, setFacultiStaff, setContactUs}) => {
    const navigate = useNavigate(); 
    const [navbar, setNavbar] = useState('');
    const handleOverview = () =>{
        setOverview[1]('setOverview')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setContactUs[1]('')
        setShowNavbar[1](false); 
        navigate('/')
    }
    const handleLeadership = () =>{
        setShowNavbar[1](true)
        setOverview[1]('')
        setLidership[1]('setLidership')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setContactUs[1]('')
        navigate('/leadership')
    }
    const handleProgramsOffered = () =>{
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('setProgramsOffered')
        setAlumni[1]('')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setShowNavbar[1](true); 
        setContactUs[1]('')
        navigate('/programesOffered')
    }
    const handleAlumni = () =>{
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('setAlumni')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setShowNavbar[1](true); 
        setContactUs[1]('')
        navigate('/alumni')
    }
    const handleAdmission = () =>{
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setAdmission[1]('setAdmission[1]')
        setShowNavbar[1](true); 
        setFacultiStaff[1]('')
        setContactUs[1]('')
        navigate('/admission')
    }
    const handleFacultiStaff = () =>{
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setShowNavbar[1](false); 
        setAdmission[1]('')
        setFacultiStaff[1]('setFacultiStaff[1]')
        setContactUs[1]('')
        navigate('/faculty')
    }
    const handleContactUs = () =>{
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setShowNavbar[1](false); 
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setContactUs[1]('setContactUs[1]')
        navigate('/contact')
    }

        const activeNavbar = () => {
            if (window.scrollY >= 200) {
                setNavbar(true);
            }
            else {
                setNavbar('');
            }
        }
        window.addEventListener('scroll', activeNavbar);

    return (
        <div className={`flex justify-center curve-navbar lg:mx-[80px] md:mx-12 mx-6 ${(navbar === true) ? 'block' : 'hidden'} ${setShowNavbar[0] === true ? 'hidden' : 'block'} bg-white for-making-sticky-navbar`}>
            <div class="navbar shadow-2xl flex justify-around">
            <div onClick={handleOverview} className={`items-center ${setOverview[0] ? 'for-background' : 'not-selected'} lg:px-4  py-4 navbar-topic`}>
                <h1 className='text-xl font-bold '>Overview</h1>
            </div>
            <div onClick={handleLeadership} className={`items-center ${setLidership[0] ? 'for-background' : 'not-selected'} lg:px-4  py-4 navbar-topic`}>
                <h1 className='text-xl font-bold '>Leadership</h1>
            </div>
            <div onClick={handleProgramsOffered} className={`items-center ${setProgramsOffered[0] ? 'for-background' : 'not-selected'} lg:px-4  py-4 navbar-topic`}>
                <h1 className='text-xl font-bold '>Programs Offered</h1>
            </div>
            <div onClick={handleAlumni} className={`items-center ${setAlumni[0] ? 'for-background' : 'not-selected'} lg:px-4  py-4 navbar-topic`}>
                <h1 className='text-xl font-bold '>Alumni</h1>
            </div>
            <div onClick={handleAdmission} className={`items-center ${setAdmission[0] ? 'for-background' : 'not-selected'} lg:px-4  py-4 navbar-topic`}>
                <h1 className='text-xl font-bold '>Admissions</h1>
            </div>
            <div onClick={handleFacultiStaff} className={`items-center ${setFacultiStaff[0] ? 'for-background' : 'not-selected'} lg:px-4  py-4 navbar-topic`}>
                <h1 className='text-xl font-bold '>Faculty & Staff</h1>
            </div>
            <div onClick={handleContactUs} className={`items-center ${setContactUs[0] ? 'for-background' : 'not-selected'} lg:px-4 py-4 navbar-topic`}>
                <h1 className='text-xl font-bold '>Contact Us</h1>
            </div>
            </div>
        </div>
    );
};

export default Navbar;