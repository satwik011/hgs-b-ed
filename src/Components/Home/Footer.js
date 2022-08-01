import React from 'react';
import phone from './../assets/icons/footer.png'; 
import email from './../assets/icons/email.png'; 
import location from './../assets/icons/location.png'; 

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 Footer text-base-content">
                <div className='margin'>
                    <span class="footer-heading mb-[20px]">About Us</span>
                    <a class="link link-hover contact-info mb-[40px]">Sed ut perspiciatis unde</a>
                    <a class="link link-hover contact-info mb-[40px]">omnis iste natus error</a>
                    <a class="link link-hover contact-info mb-[40px]">sit voluptatem accusantium doloremque</a>
                </div>


                <div className='margin'>
                    <span class="footer-heading mb-[20px]">Get In Touch</span>
                    <a class="link link-hover flex justify-center items-center mb-[40px]">
                        <img className='mr-[24px]' src={phone} alt="" />
                        <p className='contact-info'>+91 -  9876543210 , 1234567898</p>
                    </a>

                    <a class="link link-hover flex justify-center items-center mb-[40px]">
                        <img className='mr-[24px]' src={email} alt="" />
                        <p className='contact-info'>sosjk.kaul.@gmail.com</p>
                    </a>

                    <a class="link link-hover flex justify-center items-center">
                        <img className='mr-[24px]' src={location} alt="" />
                        <p className='contact-info'>Bhimtal, Nanital , India</p>
                    </a>
                    
                </div>


                <div className='margin'>
                    <span class="footer-heading mb-[20px]">Our Services</span>
                    <a class="link link-hover flex justify-center items-center mb-[40px]">
                        
                        <p className='contact-info'>Admission Provide</p>
                    </a>

                    <a class="link link-hover flex justify-center items-center mb-[40px]">
                        
                        <p className='contact-info'>Admission Provide</p>
                    </a>

                    <a class="link link-hover flex justify-center items-center">
                        
                        <p className='contact-info'>Admission Provide</p>
                    </a>
                </div>


                <div className='margin'>
                    <span class="footer-heading mb-[20px]">Quick Link</span>
                    <a class="link link-hover flex justify-center items-center mb-[40px]">
                        
                        <p className='contact-info'>J.K.kaulcollege.com</p>
                    </a>

                </div>

                
            </footer>
        </div>
    );
};

export default Footer; 