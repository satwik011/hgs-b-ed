import React from 'react';
import sosChildrenVillage from './../assets/images/sos_logo 3.png';
import studyImage from './../assets/images/10088-removebg-preview 1.png';
import studentTeacher from './../assets/images/image 12.png';
import studentTeacher2 from './../assets/images/image 13.png';
import rectangle405 from './../assets/images/Rectangle 405.png';
import rectangle from './../assets/images/Rectangle 404.png';
import rectangle409 from './../assets/images/Rectangle 409.png'
import rectangle411 from './../assets/images/Rectangle 411.png'
import rectangle412 from './../assets/images/Rectangle 412.png'
import rectangle416 from './../assets/images/Rectangle 416.png'
import rectangle417 from './../assets/images/Rectangle 417.png'
import rectangle405little from './../assets/images/Rectangle 405 (1).png'
import rectangle407 from './../assets/images/Rectangle 407.png'
import rectangle408 from './../assets/images/Rectangle 408.png'
import rectangle409college from './../assets/images/Rectangle 409 (1).png'
import contactImage from './../assets/images/3969587 2.png'
import contactLine from './../assets/images/contact-line.png'
import user from './../assets/icons/user.svg';
import phone from './../assets/icons/phone.svg';
import email from './../assets/icons/email.svg';
import location from './../assets/icons/location.svg';
import grade from './../assets/icons/grade.svg';
import message from './../assets/icons/message.svg';
import './Home.css';
import Footer from './Footer';


const InstuteOfEducation = () => {
    return (
        <div>
            <div className=''>
                <div>
                    <div className='kept-top background-image pb-[10px]'>
                        <div className='flex items-center ml-[80px] mr-[80px] mb-[50px]'>
                            <img src={sosChildrenVillage} alt="" />
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

                    <div className='margin-for-institute ml-[80px] mr-[80px]'>
                        <div>
                            <div className='mt-8 mb-8'>
                                <h1 className='welcome'>Welcome to J.N Kaul Institute of Education</h1>
                                <img src={rectangle} alt="" />
                            </div>






                            <div class="mb-[50px]">
                                <div class="flex justify-center items-center flexProp flex-col lg:flex-row">
                                    <img src={studentTeacher} class="max-w-lg rounded-lg shadow-2xl" alt='' />
                                    <div className='ml-6'>
                                    <h1 className='about-sos'>About SOS</h1>
                                    <p className='sos-para'>
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        
                                    </p>
                                    </div>
                                </div>
                            </div>


                            <div class="">
                                <div class="flex justify-center items-center flexProp flex-col lg:flex-row">
                                    <img src={studentTeacher2} class="max-w-lg rounded-lg shadow-2xl" alt='' />
                                    <div className='ml-6'>
                                    <h1 className='about-sos'>About J.N. Kaul Institute of Education</h1>
                                    <p className='sos-para'>
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                                        
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-16 pl-[80px] pr-[80px] pt-[50px] pb-[50px] middle-background'>
                        <div className='flex justify-center'>
                            <div>
                                <h1 className='welcome'>Infrastructure and Facilities</h1>
                                <img src={rectangle405} alt="" />
                            </div>
                        </div>

                        <div className='flex justify-center mt-8'>

                            <div class="card mx-8 p-4 card-size shadow-2xl">
                                <figure class="">
                                    <img className='w-full facility-picture' src={rectangle409} alt="" class="rounded-xl" />
                                </figure>
                                <div class="card-body">
                                    <h1 className='infructructure'>Infrustructure</h1>
                                    <p>SOS Institute of Education, Bhimtal campus situated in surrounded with beautiful ground and lush greenery, which consists of five huge classrooms, music room, library, computer lab, play ground. The whole campus covered with CCTV camera etc.</p>
                                </div>
                            </div>


                            <div class="card mx-8 p-4 card-size shadow-2xl">
                                <figure class="">
                                    <img className='w-full facility-picture' src={rectangle411} alt="" class="rounded-xl" />
                                </figure>
                                <div class="card-body">
                                    <h1 className='infructructure'>Classroom</h1>
                                    <p>SOS Institute of Education, Bhimtal campus situated in surrounded with beautiful ground and lush greenery, which consists of five huge classrooms, music room, library, computer lab, play ground. The whole campus covered with CCTV camera etc.</p>
                                </div>
                            </div>

                            <div class="card mx-8 p-4 card-size shadow-2xl">
                                <figure class="">
                                    <img className='w-full facility-picture' src={rectangle412} alt="" class="rounded-xl" />
                                </figure>
                                <div class="card-body">
                                    <h1 className='infructructure'>Library</h1>
                                    <p>SOS Institute of Education, Bhimtal campus situated in surrounded with beautiful ground and lush greenery, which consists of five huge classrooms, music room, library, computer lab, play ground. The whole campus covered with CCTV camera etc.</p>
                                </div>
                            </div>
                        </div>




                        <div className='flex justify-center mt-8'>

                            <div class="card p-4 card-size mr-8 shadow-2xl">
                                <figure class="">
                                    <img className='w-full' src={rectangle416} alt="" class="rounded-xl" />
                                </figure>
                                <div class="card-body">
                                    <h1 className='infructructure'>Lab</h1>
                                    <p>SOS Institute of Education, Bhimtal campus situated in surrounded with beautiful ground and lush greenery, which consists of five huge classrooms, music room, library, computer lab, play ground. The whole campus covered with CCTV camera etc.</p>
                                </div>
                            </div>
                            <div class="card card-size p-4 shadow-2xl">
                                <figure class="">
                                    <img className='w-full' src={rectangle417} alt="" class="rounded-xl" />
                                </figure>
                                <div class="card-body">
                                    <h1 className='infructructure'>Music Room</h1>
                                    <p>SOS Institute of Education, Bhimtal campus situated in surrounded with beautiful ground and lush greenery, which consists of five huge classrooms, music room, library, computer lab, play ground. The whole campus covered with CCTV camera etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Photo gallery */}
                    <div className='mt-16 ml-[80px] mr-[80px]'>
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

                    </div>




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