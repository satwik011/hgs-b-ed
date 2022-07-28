import React from 'react';
import rectangle405 from './../assets/images/Rectangle 405.png';
import rectangle411 from './../assets/images/Rectangle 411.png'
import rectangle412 from './../assets/images/Rectangle 412.png'
import rectangle417 from './../assets/images/Rectangle 417.png'
import library from './../assets/images/institute-image/library.JPG'
import ict from './../assets/images/institute-image/ICT1.JPG'
import PSYCHOLOGY from './../assets/images/institute-image/PSYCHOLOGY LAB.JPG'; 
import scienceLab from './../assets/images/institute-image/SCIENCE LAB.JPG'
import libraryCum from './../assets/images/institute-image/library.JPG'
import health from './../assets/images/institute-image/GYM.JPG'
import art from './../assets/images/institute-image/art2.JPG'
import seminer from './../assets/images/institute-image/seminer1.JPG'
import playGround from './../assets/images/institute-image/play1.JPG'
import bildersRoom from './../assets/images/institute-image/bilders-room.JPG'
import music from './../assets/images/institute-image/MUSIC ROOM (2).JPG'
import PEDAGOGY from './../assets/images/institute-image/PEDAGOGY2.jpg'

const InfrastructureCard = () => {
    return (
        <div className='mt-16 pl-[80px] pr-[80px] pt-[50px] pb-[50px] middle-background'>
                        <div className='flex justify-center'>
                            <div>
                                <h1 className='welcome'>Infrastructure and Facilities</h1>
                                <img src={rectangle405} alt="" />
                            </div>
                        </div>
                        <p className='block mx-auto mt-4 text-xl text-blue-600 infrastructure-paragraph'>SOS Institute of Education, Bhimtal campus situated in surrounded with beautiful ground and lush greenery, which consists of five huge classrooms, music room, library, computer lab, play ground. The whole campus covered with CCTV camera etc.
                        </p>

                        <div className='flex justify-center mt-8'>
                            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-48 gap-y-12'>

                                <div class="card p-4 card-size shadow-2xl">
                                    <figure class="">
                                        <img className='w-full h-full facility-picture' src={rectangle411} alt="" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body card-info">
                                        <h1 className='infructructure'>Classroom</h1>
                                        <p>The Institute consists of 5 spacious & well ventilated classrooms with facilities like study table, chairs, furniture  <span className='text-xl more'>more</span>
                                        </p>
                                        {/*and all the basis utilities like water, electricity etc. for students & teachers and in every classroom CCTV camera has been installed. */}
                                    </div>
                                </div>

                                <div class="card  p-4 card-size shadow-2xl">
                                    <figure class="">
                                        <img className='w-full h-full facility-picture' src={library} alt="" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body card-info">
                                        <h1 className='infructructure'>Library</h1>
                                        <p>The Institute consists of well equipped library in which there are 8830 print books, 2020 E-Books and many Journal  and <span className='text-xl more'>more</span></p>
                                    </div>
                                </div>

                                <div class="card  p-4 card-size shadow-2xl">
                                    <figure class="">
                                        <img className='w-full h-full facility-picture' src={ict} alt="" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body card-info">
                                        <h1 className='infructructure'>ICT Resource Center</h1>
                                        <p>Information and communication technology deals in the usage of tools and techniques to enhance the effectiveness <span className='text-xl more'>more</span>  
                                        </p>
                                        {/*of teaching learning process. ICT Lab is well equipped with multimedia development machines, software and devices to use classroom setting for teaching. */}
                                    </div>
                                </div>

                                <div class="card  p-4 card-size shadow-2xl">
                                    <figure class="">
                                        <img className='w-full h-full facility-picture' src={PSYCHOLOGY} alt="" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body card-info">
                                        <h1 className='infructructure'>Psychology Lab</h1>
                                        <p>The teacher should not only understand children but also be aware of their expectations, potentialities and <span className='text-xl more'>more</span> </p>
                                    </div>
                                    {/* For this psychology Lab is rich in all types of psychological tests and tools used to understand child psychology and for research. */}
                                </div>

                                <div class="card  p-4 card-size shadow-2xl">
                                    <figure class="">
                                        <img className='w-full h-full facility-picture' src={scienceLab} alt="" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body card-info">
                                        <h1 className='infructructure'>Science & Mathematice Lab</h1>
                                        <p>Science and mathematics are not mere disciplines of study but also a way of life. Science & mathematics education <span className='text-xl more'>more</span></p>
                                    </div>
                                    {/* at school and institute level has to focus not only on development of understanding and skills but also on the development of scientific temper among learners. The lab is well equipped with sufficient apparatus, charts, models, teaching aids and other material for conducting numbers of experiment activities and demonstrations of physics, chemistry, biology and mathematics at secondary level. */}
                                </div>


                                <div class="card p-4 card-size shadow-2xl">
                                    <figure class="">
                                        <img className='w-full h-full facility-picture' src={libraryCum} alt="" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body card-info">
                                        <h1 className='infructructure'>Library Cum Resoutrce Center (The Library)</h1>
                                        <p>The library of the institute is fully equipped with meticulously chosen large number of Indian and foreign text-books and <span className='text-xl more'>more</span> </p>
                                    </div>
                                    {/*  reference-books to provide the pupil teachers with in-depth and thorough knowledge and strong intellectual support to help them in their studies. The library also has many national and international educational resources, documentation section and newspaper clippings. The institute is committed to make its library a knowledge hub. It is constantly being upgraded and enriched with new books according to the syllabus and new technology. The students are provided with the facility of a book bank through which they can borrow the required text books for the session. The library has an open access system to all its members. */}
                                </div>

                                <div class="card  p-4 card-size shadow-2xl">
                                    <figure class="">
                                        <img className='w-full h-full facility-picture' src={health} alt="" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body card-info">
                                        <h1 className='infructructure'>HEALTH AND PHYSICAL EDUCATION RESOURCE CENTRE </h1>
                                        <p>The Institute is well equipped with the Health and Physical Education Resource Centre where pupil learn to meditate. <span className='text-xl more'>more</span>
                                        </p>
                                    </div>
                                    {/* They learn to live a healthy life .They are taught yoga which helps in remaining physically and mentally healthy because inside a healthy body remains a healthy mind.
                                    Pupil teachers also have Gym classes which help them to remain physically fit.
                                    Physical Education has been considered as an essential part of human life from times immemorial. Physical Exercise & ‘Yoga’ has been emphasized in India not only to keep fit but also to prevent & cure the physical ailment. */}
                                </div>


                                <div class="card  p-4 card-size shadow-2xl">
                                    <figure class="">
                                        <img className='w-full h-full facility-picture' src={art} alt="" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body card-info">
                                        <h1 className='infructructure'>ART AND CRAFT RESOURCE CENTRE</h1>
                                        <p>The Institute is having it’s own Art and craft Resource centre where pupil teacher learns to be creative and make creative things <span className='text-xl more'>more</span>
                                        </p>
                                    </div>
                                    {/* which not only helps in widening their horizons but also in developing creative faculties.
                                            This is housed in a well-designed spacious room with adequate electricity, tools, equipment, furniture's raw materials' reference materials, books, periodicals and motivational works. Students can utilize all these for their creative works of arts and crafts, drawing an paintings etc. */}
                                </div>


                                <div class="card  p-4 card-size shadow-2xl">
                                    <figure class="">
                                        <img className='w-full h-full facility-picture' src={seminer} alt="" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body card-info">
                                        <h1 className='infructructure'>SEMINAR ROOM</h1>
                                        <p>The Seminar Room is situated on the ground Floor of the Institute. It is used heavily during term for teaching / supervisions and <span className='text-xl more'>more</span>
                                        </p>
                                    </div>
                                    {/* other meetings. When it is not booked, the Room can be used for quiet study. The Room is equipped with a data projector, Wi-Fi system, tv and video, overhead projector, slide projector and screen, which may be used for seminar, conferences, panel discussions and academic purposes during staffed hours only. A laptop for use with the data-projector is available from the issue desk. It consists of well-furnished furniture well ventilated and spacious room. */}
                                </div>


                                <div class="card  p-4 card-size shadow-2xl">
                                    <figure class="">
                                        <img className='w-full h-full facility-picture' src={playGround} alt="" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body card-info">
                                        <h1 className='infructructure'>PLAYGROUND</h1>
                                        <p>The Institute has playgrounds for many outdoor games like volleyball, Basketball etc. It has facility for indoor games like Badminton <span className='text-xl more'>more</span>
                                        </p>
                                    </div>
                                    {/* Chess and Table-Tennis etc. */}
                                </div>


                                <div class="card  p-4 card-size shadow-2xl">
                                    <figure class="">
                                        <img className='w-full h-full facility-picture' src={bildersRoom} alt="" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body card-info">
                                        <h1 className='infructructure'>BILLIARDS ROOM</h1>
                                        <p>The institute is proud to have the facility for indoor games like Billiards. It will help our people teacher to keep <span className='text-xl more'>more</span>
                                        </p>
                                    </div>
                                    {/* at par with the changing face of education. */}
                                </div>


                                <div class="card  card-size p-4 shadow-2xl">
                                    <figure class="">
                                        <img className='w-full h-full' src={music} alt="" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body card-info">
                                        <h1 className='infructructure'>Music Room</h1>
                                        <p>There are several musical instruments in the music room for students in which the students took classes of music and practices <span className='text-xl more'>more</span>
                                        </p>
                                    </div>
                                    {/* for various cultural programs. */}
                                </div>


                                <div class="card  card-size p-4 shadow-2xl">
                                    <figure class="">
                                        <img className='w-full h-full' src={PEDAGOGY} alt="" class="rounded-xl" />
                                    </figure>
                                    <div class="card-body card-info">
                                        <h1 className='infructructure'>PEDAGOGY</h1>
                                        <p>Theme based curriculum and pedagogic studies shall include aspects of language across the curriculum and communication, understanding <span className='text-xl more'>more</span>
                                        </p>
                                    </div>
                                    {/* of a discipline with a focus on the learner, and a course on the theoretical perspectives on assessment for learning. */}
                                </div>
                            </div>
                        </div>
                    </div>

    );
};

export default InfrastructureCard;