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
                    <a class="link link-hover contact-info">Sed ut perspiciatis unde</a>
                    <a class="link link-hover contact-info">omnis iste natus error</a>
                    <a class="link link-hover contact-info">sit voluptatem accusantium doloremque</a>
                    <a class="link link-hover contact-info">laudantium, totam rem aperiam</a>
                    <a class="link link-hover contact-info">eaque ipsa quae ab illo</a>
                    <a class="link link-hover contact-info">inventore veritatis et quasi architecto</a>
                    <a class="link link-hover contact-info">beatae vitae dicta sunt explicabo.</a>
                </div>


                <div>
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


                <div>
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


                <div>
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