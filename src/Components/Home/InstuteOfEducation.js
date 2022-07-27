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
import './Home.css';
import Footer from './Footer';


const InstuteOfEducation = () => {
    return (
        <div>
            <div className=''>
            <div>
                <div className='flex items-center ml-[80px] mr-[80px] mt-[51px] mb-[116px]'>
                    <img src={sosChildrenVillage} alt="" />
                    <div className='block mx-auto'>
                        <div>
                            <h1 className='instute'>INSTUTE OF EDUCATION</h1>
                            <p className='bed-college'>B.ED.College, Bhimtal</p>
                        </div>
                    </div>
                </div>

                <div className='flex ml-[80px] mr-[80px] mb-[319px]'>
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


                <div className='margin-for-institute ml-[80px] mr-[80px]'>
                    <div>
                        <div className='mb-8 mt-8'>
                        <h1 className='welcome'>Welcome to J.N Kaul Institute of Education</h1>
                        <img src={rectangle} alt="" />
                        </div>
                        <div className='flex'>
                        <div>
                            <img className='institute-picture' src={studentTeacher} alt="" />
                        </div>
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
                            aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                            aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                            </p>
                        </div>
                        </div>
                    </div>

                    <div className='mt-12'>
                        <div className='flex'>
                        <div>
                            <img className='institute-picture' src={studentTeacher2} alt="" />
                        </div>
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
                            aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                            aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam <br />
                            </p>
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

                    <div className='flex mt-8'>
                        <div className='infructure-card gaping'>
                            <img className='w-full' src={rectangle409} alt="" />
                            <h1 className='infructructure mt-[15px] mb-[5px]'>Infrustructure</h1>
                            <p>SOS Institute of Education, Bhimtal campus situated in surrounded with beautiful ground and lush greenery, which consists of five huge classrooms, music room, library, computer lab, play ground. The whole campus covered with CCTV camera etc.</p>
                        </div>


                        <div className='non-infructure-card gaping'>
                            <img className='w-full' src={rectangle411} alt="" />
                            <h1 className='infructructure mt-[15px] mb-[5px]'>Classroom</h1>
                            <p>SOS Institute of Education, Bhimtal campus situated in surrounded with beautiful ground and lush greenery, which consists of five huge classrooms, music room, library, computer lab, play ground. The whole campus covered with CCTV camera etc.</p>
                        </div>


                        <div className='non-infructure-card gaping'>
                            <img className='w-full' src={rectangle412} alt="" />
                            <h1 className='infructructure mt-[15px] mb-[5px]'>Library</h1>
                            <p>SOS Institute of Education, Bhimtal campus situated in surrounded with beautiful ground and lush greenery, which consists of five huge classrooms, music room, library, computer lab, play ground. The whole campus covered with CCTV camera etc.</p>
                        </div>
                    </div>




                    <div className='flex mt-8 mx-[300px]'>
                        <div className='non-infructure-card gaping'>
                            <img className='w-full' src={rectangle416} alt="" />
                            <h1 className='infructructure mt-[15px] mb-[5px]'>Lab</h1>
                            <p>SOS Institute of Education, Bhimtal campus situated in surrounded with beautiful ground and lush greenery, which consists of five huge classrooms, music room, library, computer lab, play ground. The whole campus covered with CCTV camera etc.</p>
                        </div>


                        <div className='non-infructure-card gaping'>
                            <img className='w-full' src={rectangle417} alt="" />
                            <h1 className='infructructure mt-[15px] mb-[5px]'>Music Room</h1>
                            <p>SOS Institute of Education, Bhimtal campus situated in surrounded with beautiful ground and lush greenery, which consists of five huge classrooms, music room, library, computer lab, play ground. The whole campus covered with CCTV camera etc.</p>
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




                {/* Contact with us */}
                <div className='mt-16 ml-[80px] mr-[80px]'>
                    <div className='flex justify-center'>
                        <div>
                        <h1 className='welcome'>Contact Us</h1>
                            <img src={contactLine} alt="" />
                        </div>
                    </div>

                    <div className='flex justify-around mb-8 mt-8'>
                        <div>
                            <h1 className='drop-details mb-12'>Drop us your details for quick response.</h1>
                            <div>
                                <div>
                                    <input className='contact-input mr-12' type="text" ></input>
                                    <input className='contact-input' type="text" ></input>
                                </div>
                                <div className='my-8'>
                                    <input className='contact-input mr-12' type="text" ></input>
                                    <input className='contact-input' type="text" ></input>
                                </div>
                                <div>
                                    <input className='contact-input mr-12' type="text" ></input>
                                    <input className='contact-input' type="text" ></input>
                                </div>
                                <button class="btn submit-button block mx-auto mt-10"> <span className='submit'>Submit</span> </button>
                            </div>
                        </div>

                        <div>
                            <img src={contactImage} alt="" />
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