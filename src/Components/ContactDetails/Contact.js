import React from 'react';
import user from './../assets/icons/user.svg';
import phone from './../assets/icons/phone.svg';
import email from './../assets/icons/email.svg';
import location from './../assets/icons/location.svg';
import grade from './../assets/icons/grade.svg';
import message from './../assets/icons/message.svg';
import ContactNavbar from './ContactNavbar';

const Contact = () => {
    return (
        <div>
            <ContactNavbar></ContactNavbar>
            <h1 className='flex justify-center mt-20 mb-8 text-5xl font-bold text-blue-600'>We'd love to hear from you.</h1>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:ml-28'>
                        <div>
                            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div class="card-body">
                                    <div class="form-control">
                                    <div className='flex items-center justify-center mb-8 contact-input'>
                                        <img className='mx-4' src={user} alt="" />
                                        <input className='pl-2 input-field' type="text" placeholder='Username' ></input>
                                    </div>
                                    </div>
                                    <div class="form-control">
                                    <div className='flex items-center justify-center mb-8 contact-input'>
                                        <img className='mx-4' src={location} alt="" />
                                        <input className='pl-2 input-field' type="text" placeholder='City' ></input>
                                    </div>
                                    </div>
                                    <div class="form-control">
                                    <div className='flex items-center justify-center mb-8 contact-input'>
                                        <img className='mx-4' src={email} alt="" />
                                        <input className='pl-2 input-field' type="text" placeholder='Email' ></input>
                                    </div>
                                    </div>
                                    <div class="form-control">
                                    <div className='flex items-center justify-center mb-8 contact-input'>
                                        <img className='mx-4' src={grade} alt="" />
                                        <input className='pl-2 input-field' type="text" placeholder='Grade' ></input>
                                    </div>
                                    </div>
                                    <div class="form-control">
                                    <div className='flex items-center justify-center mb-8 contact-input'>
                                        <img className='mx-4' src={phone} alt="" />
                                        <input className='pl-2 input-field' type="text" placeholder='Phone Number' ></input>
                                    </div>
                                    </div>
                                    <div class="form-control">
                                    <div className='flex items-center justify-center mb-8 contact-input'>
                                        <img className='mx-4' src={message} alt="" />
                                        <input className='pl-2 input-field' type="text" placeholder='Message' ></input>
                                    </div>
                                    </div>
                                    <div class="form-control mt-6">
                                        <button class="btn for-background">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:mr-28'>
                        <div className='mb-12'>
                            <h1 className='mb-2 text-2xl font-bold'>Address</h1>
                            <p className='text-xl'>Hermann Gmeiner School <br></br> SOS Enclave, Sector-29, Faridabad</p>
                        </div>
                        <div className='mb-12'>
                            <h1 className='mb-2 text-2xl font-bold'>Mobile</h1>
                            <p className='text-xl'>0129-4088574 / 75</p>
                        </div>
                        <div className='mb-12'>
                            <h1 className='mb-2 text-2xl font-bold'>Email</h1>
                            <p className='text-xl'>principal.faridabadhgs@soscvindia.org</p>
                        </div>
                        <div className='mb-12'>
                            <h1 className='mb-2 text-2xl font-bold'>Socials</h1>
                            <p className='text-xl'>youtube face twiter instagram</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;