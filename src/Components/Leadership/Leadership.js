import React from 'react';
import aboutUs from './../assets/images/about-us-leadership.jpeg'
import teacher1 from './../assets/images/teacher-head (1).png'
import teacher2 from './../assets/images/teacher-head (2).png'
import teacher3 from './../assets/images/teacher-head (3).png'
import location from './../assets/icons/location.png'
import email from './../assets/icons/email.png'
import phone from './../assets/icons/footer.png'
import './Leadership.css';
import Footer from '../Home/Footer';
import sosChildrenVillage from './../assets/images/sos_logo 3.png';
import { useNavigate } from 'react-router-dom';

const Leadership = ({setShowNavbar, setOverview, setLidership, setProgramsOffered, setAlumni, setAdmission, setFacultiStaff, setContactUs}) => {
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
            <img  onClick={handleOverView} className='w-48 home-button hover:shadow-2xl' src={sosChildrenVillage} alt="" />
            <img className='w-full' src={aboutUs} alt="" />
            <div className='flex justify-center'>
                <div className='mt-6 ml-10'>
                    <div className='leadership'>
                        <p onClick={handleOverView} className='flex items-center h-12 my-2 forTextHover'>Overview</p>
                        <p onClick={handleLeadership} className='flex items-center h-12 my-2 forTextHover'>Leadership</p>
                        <p onClick={handleProgramsOffered} className='flex items-center h-12 my-2 forTextHover'>Programs Offered</p>
                        <p onClick={handleAlumni} className='flex items-center h-12 my-2 forTextHover'>Alumni</p>
                        <p onClick={handleAdmission} className='flex items-center h-12 my-2 forTextHover'>Admission</p>
                        <p onClick={handleFaculty} className='flex items-center h-12 my-2 forTextHover'>Faculty & Staff</p>
                        <p onClick={handleContact} className='flex items-center h-12 my-2 forTextHover'>Contact Us</p>
                    </div>


                    <div className='leadership-info'>
                        <div className='flex items-center justify-center'>
                            <img className='mr-4' src={location} alt="" />
                            <p className='flex forTextHover'>J N Kaul Institute of Education Bhimtal SOS Complex, Tallital Bhimtal Nainital, Uttrakhand, India, 263136</p>
                        </div>
                        <div className='flex items-center justify-center my-4'>
                            <img className='ml-2 mr-4' src={email} alt="" />
                            <p className='flex forTextHover'>Principal.bhimtalbed@soscvindia.org </p>
                        </div>
                        <div className='flex'>
                            <img className='mr-4' src={phone} alt="" />
                            <p className='flex forTextHover'>05942-247999</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[50px] ml-6 mr-6 mt-2">
                        <h1 className='mt-4 mb-8 text-5xl leadership-heading'>Leadership</h1>
                        <div class="flex justify-center flexProp flex-col lg:flex-row">
                            <img src={teacher1} class="max-w-lg rounded-lg picture-shadow" alt='' />
                            <div className='ml-6'>
                                <h1 className='mb-2 text-3xl font-bold'>President</h1>
                                <p className='mb-2 text-xl'>Mr. Jinsi</p>
                                <p className='mb-2 text-xl'>SOS Children’s Villages of India</p>
                                <p className='mt-2'>
                                    Mr. Jinsi is an electrical Engineer, having graduated from Punjab Engineering College, Chandigarh (Punjab University) in 1977.

                                    Presently runs Khushboo, a day care centre for children with severe Mental and Multiple disabilities, serving more than 110 children. He is Chairperson of Railway Children India, a Section 8 company, working with street children. He has over 41 years of work experience in the Automobile, Not for Profit and Education sectors. For over 21 years, he has held leadership positions with organisations such as Eicher, Hero Motors, Chase Manhattan, Force Motors, Tatra Trucks, New Holland Fiat Tractors, SOS Children’s Villages and School Of Inspired Leadership.
                                </p>
                            </div>
                        </div>
                        <p className='mt-2'>
                            He has been a member of National level bodies such as National Human Rights Commission and Voluntary Action Network of India (VANI), the Apex body of NGO sector.

                            Currently he is a Management Consultant and serves as an Independent Director on the Boards of a few large organizations eg. Schaeffler India (A German MNC), Hero Cycles etc.

                            He is also a member of the Proposal Approval Committee of National Skill Development Corporation, a Public Private partnership venture which funds Skill building and Training organisations. He is also a Coach/Mentor for senior level executives.
                        </p>
                    </div>

                    {/* 2nd one */}
                    <div class="mb-[50px] ml-6 mr-6 mt-6">
                        <div class="flex justify-center items-center flexProp flex-col lg:flex-row">
                            <div className=''>
                                <h1 className='mb-2 text-3xl font-bold'>Secretary General</h1>
                                <p className='mb-2 text-xl'>Mr.Sumanta Kar</p>
                                <p className='mb-2 text-xl'>SOS Children’s Villages of India</p>
                                <p className='mt-2'>
                                    Mr Sumanta Kar is the Secretary General of SOS Children’s Villages of India (SOSCVI), one of India’s biggest childcare NGOs and the largest self-implementing agency providing an end-to-end Group Foster Care for children without parental care.

                                    Mr Kar has over 30 years of experience in the field of alternative care. He joined SOSCVI in 1989 as a youth co-worker. Mr Kar has conceptualised and implemented several development projects at SOSCVI. He led SOSCVI’s tsunami operation in the southern states of India (2004-2007) - it was the largest ever-emergency programme undertaken by the NGO so far.

                                </p>
                            </div>
                            <img src={teacher2} class="max-w-lg rounded-lg picture-shadow mr-6" alt='' />
                        </div>
                        <p className='mt-2'>
                            Education at SOS Hermann Gmeiner Schools has always meant Holistic Development of a student – we believe that each child entrusted to us will receive education in his finest form.  We also believe that Education is a preparation for life, that is enjoyable, interactive and an ongoing process to make the students confident young adults, committed citizens who are aware & sensitive with a positive attitude.

                            As a part of this continued adaptation into larger eco-system and nation building, all our Hermann Gmeiner Schools have been actively engaged in relating to; understanding and working with communities around our schools. We see this more as character building than mere social service.
                            Child safeguarding remains a top priority and children are nurtured through a theme-based curriculum and experiential learning.

                            Our teachers and Principals play a pivotal role in the development of each child. Our alumni are our brand ambassadors, who leave a lasting footprint in whatever profession they choose to pursue. We are also thankful to the parents of our students for their very active support and faith in us.

                            I congratulate all the students, teachers and Principals of SOS Hermann Gmeiner Schools for the remarkable academic results achieved in 2020 and for consistently raising the bar for ourselves year after year.  It is a matter of pride for us to be a part of this exemplary and committed group of schools, which truly exist for the children and their holistic transformation.’’ May every child shine and realize her/his full potential and follow her/his dreams.”
                        </p>
                    </div>


                    {/* 3rd */}
                    <div class="mb-[50px] ml-6 mr-6 mt-6">
                        <div class="flex justify-center items-center flexProp flex-col lg:flex-row">
                            <img src={teacher3} class="max-w-lg rounded-lg picture-shadow" alt='' />
                            <div className='ml-6'>
                                <h1 className='mb-2 text-3xl font-bold'>Head Education & Child Development</h1>
                                <p className='mb-2 text-xl'>Mrs Debaroti Bose</p>
                                <p className='mb-2 text-xl'>SOS Children’s Villages of India</p>
                                <p className='mt-2'>
                                    An educationist with three decades of experience in the education field. She started her journey with Modern school, Barakhamba road as a teacher and in the following years, she has taken responsibilities as a Principal, Life skill trainer, Mentor and Author.
                                </p>
                            </div>
                        </div>
                        <p className='mt-2'>
                            It is my belief that school should be the experience of a lifetime. Our school experience sets the stage for success later in life and provides a lifetime of positive memories for our students.

                            We are proud of our continuous goal of providing an excellent education for our students. . We have a dynamic, hardworking faculty who are involved in education to benefit the students.
                            The entire gamut of school education is undergoing transformation in the teaching learning process. In the modern concept of schooling, teaching has become redundant, paving way for facilitation of learning through knowledge sharing. The wave of digital learning and cloud computing is reaching new heights. In all this whirlwind of new age technology, it is important to charge ahead but with one’s head firmly on one’s shoulders.
                            HGS strives to inculcate moral values, manners, responsibilities among students so that they may build a world free of all the evils. Students here are encouraged to dream, groomed to give wings to their dreams, to take off and explore the unexplored. The plethora of interesting & exciting opportunities available to youngsters today often leave them with an array of things to do. It is important therefore to help them build their focus on the subject that draws them most and give shape to their vision.A student is made to blossom intellectually, morally and spiritually.
                            As Swami Vivekananda said, “Take up one idea. Make that one idea your life – think of it, dream of it, and live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.”

                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Leadership;