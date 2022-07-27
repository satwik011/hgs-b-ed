import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [overView, setOverview] = useState('');
    const [leadership, setLeadership] = useState('');
    const [programsOffered, setProgramsOffered] = useState('');
    const [alumni, setAlumni] = useState('');
    const [admission, setAdmission] = useState('');
    const [facultiStaff, setFacultiStaff] = useState('');
    const [contactUs, setContactUs] = useState('');
    const [navbar, setNavbar] = useState(false);
    const handleOverview = () => {
        setOverview('setOverview')
        setLeadership('')
        setProgramsOffered('')
        
        setAlumni('')
        setAdmission('')
        setFacultiStaff('')
        setContactUs('')
        
    }
    const handleLeadership = () => {
        setOverview('')
        setLeadership('setProgramsOffered')
        setProgramsOffered('')
        
        setAlumni('')
        setAdmission('')
        setFacultiStaff('')
        setContactUs('')
        
    }
    const handleProgramsOffered = () => {
        setOverview('')
        setLeadership('')
        setProgramsOffered('setPlacement')
        
        setAlumni('')
        setAdmission('')
        setFacultiStaff('')
        setContactUs('')
        
    }
    const handleAlumni = () => {
        setOverview('')
        setLeadership('')
        setProgramsOffered('')
        
        setAlumni('setAdmissionRequirment')
        setAdmission('')
        setFacultiStaff('')
        setContactUs('')
        
    }
    const handleAdmission = () => {
        setOverview('')
        setLeadership('')
        setProgramsOffered('')
        
        setAlumni('')
        setAdmission('setKeyInfo')
        setFacultiStaff('')
        setContactUs('')
        
    }
    const handleFacultiStaff = () => {
        setOverview('')
        setLeadership('')
        setProgramsOffered('')
        
        setAlumni('')
        setAdmission('')
        setFacultiStaff('setLife')
        setContactUs('')
        
    }
    const handleContactUs = () => {
        setOverview('')
        setLeadership('')
        setProgramsOffered('')
        
        setAlumni('')
        setAdmission('')
        setFacultiStaff('')
        setContactUs('setAwards')
    }

    const activeNavbar = () =>{
        if(window.scrollY >= 200){
            setNavbar(true); 
        }
        else{
            setNavbar(false); 
        }
    }
    window.addEventListener('scroll', activeNavbar);  

    return (
        <div className={`flex justify-center ${navbar===true ? 'block' : 'hidden'} mx-[80px] bg-white for-making-sticky-navbar`}>
            <div onClick={handleOverview} className={`items-center ${overView ? 'for-background' : ''} px-8 mr-[46px] py-6 navbar-topic`}>
                <h1 className='text-xl font-bold '>Overview</h1>
            </div>
            <div onClick={handleLeadership} className={`items-center ${leadership ? 'for-background' : ''} px-8 mr-[46px] py-6 navbar-topic`}>
                <h1 className='text-xl font-bold '>Leadership</h1>
            </div>
            <div onClick={handleProgramsOffered} className={`items-center ${programsOffered ? 'for-background' : ''} px-8 mr-[46px] py-6 navbar-topic`}>
                <h1 className='text-xl font-bold '>Programs Offered</h1>
            </div>
            <div onClick={handleAlumni} className={`items-center ${alumni ? 'for-background' : ''} px-8 mr-[46px] py-6 navbar-topic`}>
                <h1 className='text-xl font-bold '>Alumni</h1>
            </div>
            <div onClick={handleAdmission} className={`items-center ${admission ? 'for-background' : ''} px-8 mr-[46px] py-6 navbar-topic`}>
                <h1 className='text-xl font-bold '>Admissions</h1>
            </div>
            <div onClick={handleFacultiStaff} className={`items-center ${facultiStaff ? 'for-background' : ''} px-8 mr-[46px] py-6 navbar-topic`}>
                <h1 className='text-xl font-bold '>Faculty & Staff</h1>
            </div>
            <div onClick={handleContactUs} className={`items-center ${contactUs ? 'for-background' : ''} px-8 mr-[46px] py-6 navbar-topic`}>
                <h1 className='text-xl font-bold '>Contact Us</h1>
            </div>
        </div>
    );
};

export default Navbar;