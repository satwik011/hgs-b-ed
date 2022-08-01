import React from 'react';
import user from './../assets/icons/user.svg';
import phone from './../assets/icons/phone.svg';
import email from './../assets/icons/email.svg';
import location from './../assets/icons/location.svg';
import grade from './../assets/icons/grade.svg';
import message from './../assets/icons/message.svg';
import sosChildrenVillage from './../assets/images/sos_logo 3.png';
import { useNavigate } from 'react-router-dom';
import teacher1 from './../assets/images/alumni-teacher (1).png'
import teacher2 from './../assets/images/alumni-teacher (2).png'
import teacher3 from './../assets/images/alumni-teacher (3).png'
import teacher4 from './../assets/images/alumni-teacher (4).png'

const Contact = ({ setShowNavbar, setOverview, setLidership, setProgramsOffered, setAlumni, setAdmission, setFacultiStaff, setContactUs }) => {
    const navigate = useNavigate();
    const handleOverView = () => {
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
    const handleLeadership = () => {
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
    const handleProgramsOffered = () => {
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
    const handleAlumni = () => {
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
    const handleAdmission = () => {
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
    const handleFaculty = () => {
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
    const handleContact = () => {
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

    return (
        <div>
            <div className='contact'>
            <h1 className='flex justify-center mt-20 mb-8 text-5xl font-bold love-to-hear'>We'd love to hear from you.</h1>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:ml-28'>
                        <div>
                            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div class="card-body">
                                    <div class="form-control">
                                        <div className='flex items-center justify-center mb-8 contact-input'>
                                            <img className='mx-4 for-opacity' src={user} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Username' ></input>
                                        </div>
                                    </div>
                                    <div class="form-control">
                                        <div className='flex items-center justify-center mb-8 contact-input'>
                                            <img className='mx-4 for-opacity' src={location} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='City' ></input>
                                        </div>
                                    </div>
                                    <div class="form-control">
                                        <div className='flex items-center justify-center mb-8 contact-input'>
                                            <img className='mx-4 for-opacity' src={email} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Email' ></input>
                                        </div>
                                    </div>
                                    <div class="form-control">
                                        <div className='flex items-center justify-center mb-8 contact-input'>
                                            <img className='mx-4 for-opacity' src={grade} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Grade' ></input>
                                        </div>
                                    </div>
                                    <div class="form-control">
                                        <div className='flex items-center justify-center mb-8 contact-input'>
                                            <img className='mx-4 for-opacity' src={phone} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Phone Number' ></input>
                                        </div>
                                    </div>
                                    <div class="form-control">
                                        <div className='flex items-center justify-center mb-8 contact-input'>
                                            <img className='mx-4 for-opacity' src={message} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Message' ></input>
                                        </div>
                                    </div>
                                    <div class="form-control">
                                        <button class="for-background">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:mr-28'>
                        <div className='mb-12'>
                            <h1 className='mb-2 text-2xl font-bold'>Address</h1>
                            <p className='text-xl'>J N Kaul Institute of Education Bhimtal  <br></br> SOS Complex, Tallital Bhimtal <br></br>
                                Nainital, Uttrakhand, India, 263136
                            </p>
                        </div>
                        <div className='mb-12'>
                            <h1 className='mb-2 text-2xl font-bold'>Mobile</h1>
                            <p className='text-xl'>05942-247999</p>
                        </div>
                        <div className='mb-12'>
                            <h1 className='mb-2 text-2xl font-bold'>Email</h1>
                            <p className='text-xl'>Principal.bhimtalbed@soscvindia.org </p>
                        </div>
                        <div className='mb-12'>
                            <h1 className='mb-2 text-2xl font-bold'>Socials</h1>
                            <div className='flex'>
                            {/* <i class="fa-brands mr-4 text-4xl fa-youtube"></i> */}
                            <a target='_blank' href="https://www.facebook.com/SOSJNKIE"><i class="fa-brands mr-4 text-4xl fa-facebook"></i></a>
                            {/* <i class="fa-brands mr-4 text-4xl fa-twitter"></i> */}
                            {/* <i class="fa-brands text-4xl fa-instagram"></i> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;