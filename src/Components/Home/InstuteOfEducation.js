import React from 'react';
import sosChildrenVillage from './../assets/images/sos_logo 3.png';
import studyImage from './../assets/images/10088-removebg-preview 1.png';
import contactImage from './../assets/images/3969587 2.png'
import contactLine from './../assets/images/contact-line.png'
import user from './../assets/icons/user.svg';
import phone from './../assets/icons/phone.svg';
import email from './../assets/icons/email.svg';
import location from './../assets/icons/location.svg';
import grade from './../assets/icons/grade.svg';
import message from './../assets/icons/message.svg';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';
import InfrastructureCard from './InfrastructureCard';
import PhotoGallery from './PhotoGallery';
import AboutInstitution from './AboutInstitution';


const InstuteOfEducation = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    }
    return (
        <div>
            <div className=''>
                <div>
                    <div className='kept-top background-image pb-[10px]'>
                        <div className='flex items-center ml-[80px] mr-[80px] mb-[50px]'>
                            <img className='children-village' onClick={handleHome} src={sosChildrenVillage} alt="" />
                            <div className='block mx-auto'>
                                <div>
                                    <h1 className='instute'>INSTUTE OF EDUCATION</h1>
                                    <p className='bed-college'>B.ED.College, Bhimtal</p>
                                </div>
                            </div>
                        </div>


                        <div className='flex ml-[80px] mr-[80px] justify-center mb-[219px]'>
                            <div className='flex items-center'>
                                <div className=''>
                                    <p className='kaul-institute'>J.N KAUL INSTITUTE OF EDUCATION <br /> BHIMTAL NAINITAL, INDIA</p>
                                    <h1 className='education-is-power'>Education is the most powerful <br /> weapon which you can use to <br /> change the world</h1>
                                </div>

                                <div className='ml-[147px]'>
                                    <img src={studyImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <AboutInstitution></AboutInstitution>
                    <InfrastructureCard></InfrastructureCard>

                    <PhotoGallery></PhotoGallery>

                    {/* Photo gallery */}
                    {/* <div className='mt-16 ml-[80px] mr-[80px]'>
                        <div className='flex justify-center'>
                            <div>
                                <h1 className='welcome'>Photo Gallery</h1>
                                <img src={rectangle405little} alt="" />
                            </div>
                        </div>

                        <div className='flex justify-center mt-8'>
                            <div className='flex'>
                                <div className='gaping'>
                                    <img className='gallery-photo' src={rectangle407} alt="" />
                                </div>

                                <div className='gaping'>
                                    <img className='gallery-photo' src={rectangle408} alt="" />
                                </div>


                                <div className='gaping'>
                                    <img className='gallery-photo' src={rectangle409college} alt="" />
                                </div>
                            </div>
                        </div>

                    </div> */}


                    {/* Contact with us */}
                    <div className='mt-16 ml-[80px] mr-[80px]'>
                        <div className='flex justify-center'>
                            <div>
                                <h1 className='welcome'>Contact Us</h1>
                                <img src={contactLine} alt="" />
                            </div>
                        </div>

                        <div className='flex justify-around mt-8 mb-8'>
                            <div>
                                <h1 className='mb-12 drop-details'>Drop us your details for quick response.</h1>
                                <div>
                                    <div className='flex mb-12'>
                                        <div className='flex items-center justify-center mr-8 contact-input'>
                                            <img className='mx-4' src={user} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Username' ></input>
                                        </div>
                                        <div className='flex items-center justify-center contact-input'>
                                            <img className='mx-4' src={location} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='City' ></input>
                                        </div>
                                    </div>


                                    <div className='flex mb-12'>
                                        <div className='flex items-center justify-center mr-8 contact-input'>
                                            <img className='mx-4' src={email} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Email' ></input>
                                        </div>
                                        <div className='flex items-center justify-center contact-input'>
                                            <img className='mx-4' src={grade} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Grade' ></input>
                                        </div>
                                    </div>


                                    <div className='flex mb-12'>
                                        <div className='flex items-center justify-center mr-8 contact-input'>
                                            <img className='mx-4' src={phone} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Phone Number' ></input>
                                        </div>
                                        <div className='flex items-center justify-center mr-8 contact-input'>
                                            <img className='mx-4' src={message} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Message' ></input>
                                        </div>
                                    </div>


                                    <button class="btn submit-button block mx-auto mt-10"> <span className='submit'>Submit</span> </button>
                                </div>
                            </div>

                            <div>
                                <img className='container-fluid' src={contactImage} alt="" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default InstuteOfEducation;