import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer';
import aboutUs from './../assets/images/admission-cover.JPG'
import location from './../assets/icons/location.png'
import email from './../assets/icons/email.png'
import phone from './../assets/icons/footer.png'
import sosChildrenVillage from './../assets/images/sos_logo 3.png';

const ProgramesOffered = ({ setShowNavbar, setOverview, setLidership, setProgramsOffered, setAlumni, setAdmission, setFacultiStaff, setContactUs }) => {
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
                        <div class="flex justify-center flexProp flex-col lg:flex-row">
                            <div className=''>
                                <h1 className='mt-4 mb-8 text-5xl leadership-heading'>Course Details (B.Ed Programme)</h1>
                                <div className='mb-6'>
                                    <p className='block mx-auto mb-2'>The Bachelor of Education (B.Ed.) programe is a two year (four semesters) professional course that prepares teachers for upper primary or middle level (classes VI- VIII), secondary level (classes IX-X) and senior secondary level (classes XI-XII).
                                        The B.Ed. programme runs for a duration of two academic years (four semesters). Students are permitted to complete the programme  in two years from the date of admission to the programme..There shall be at least two hundred working days each year, exclusive of the period of examination and admission.
                                        The basic unit size for the programme shall be of fifty students. Increase in intake for an institution shall be subject to the approval of NCTE, state government and Kumaun University.
                                        Candidate with at least fifty percent (50%) marks either in the Bachelor’s Degree and/or in the Master’s Degree in relevant subject are eligible for the B.Ed Programme. Candidates belonging to SC/ST category must have obtained at least 45% marks in above or other equivalent examination. Reservation and relaxation, if any, for SC/ST/OBC and other applicable categories shall be given as per the rules of state government.
                                        Admission shall be made on merit of marks obtained in the B.Ed. Common Entrance Test (CET), to be conducted by Kumaun University. The institution shall charge only such fee as prescribed by Kumaun University and/ or approved by state government.
                                    </p>
                                </div>
                                <h1 className='text-2xl font-bold'>Subject Details of B.Ed. Programme (For four Semester)</h1>
                                <div className='mb-6'>
                                    <p className='flex justify-center mb-2 text-xl font-bold'> Semester-I</p>

                                    <div class="overflow-x-auto">
                                        <table class="table w-full">
                                            <thead>
                                                <tr className='hover'>
                                                    <th className='text-xl normal-case table-data'>Course Code</th>

                                                    <th className='text-xl normal-case table-data'>Name of the course</th>

                                                    <th className='text-xl normal-case table-data'>Internal Marks</th>

                                                    <th className='text-xl normal-case table-data'>External Marks</th>

                                                    <th className='text-xl normal-case table-data'>Exam. Hours</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='hover'>
                                                    <th className='table-data'>B-101</th>

                                                    <td className='table-data'>Philosophical and sociological perspectives of Education</td>

                                                    <td className='table-data'>30</td>

                                                    <td className='table-data'>70</td>

                                                    <td className='table-data'>3</td>
                                                </tr>


                                                <tr className='hover'>
                                                    <th className='table-data'>B-102</th>

                                                    <td className='table-data'>Psychology of Development & Learning</td>

                                                    <td className='table-data'>30</td>

                                                    <td className='table-data'>70</td>

                                                    <td className='table-data'>3</td>
                                                </tr>
                                                <tr className='hover'>
                                                    <th className='table-data'>B-103</th>

                                                    <td className='table-data'>Principles and Methods of Teaching</td>

                                                    <td className='table-data'>30</td>

                                                    <td className='table-data'>70</td>

                                                    <td className='table-data'>3</td>
                                                </tr>


                                                <tr className='hover'>
                                                    <th className='table-data'>EPC-104</th>

                                                    <td className='table-data'>Language Across the Curriculum</td>

                                                    <td className='table-data'>25</td>

                                                    <td className='table-data'>--</td>

                                                    <td className='table-data'>--</td>
                                                </tr>
                                                <tr className='hover'>
                                                    <th className='table-data'>EPC-105</th>

                                                    <td className='table-data'>Psychological Tests</td>

                                                    <td className='table-data'>25</td>

                                                    <td className='table-data'>--</td>

                                                    <td className='table-data'>--</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        {/* <p>For detail information about Kumaun</p>
                                        <ul>
                                            <li>Download B.ED Information Brochure</li>
                                        </ul> */}
                                    </div>
                                </div>



                                {/* Table for semester 2 */}
                                <div className='mb-6'>
                                    <p className='flex justify-center mb-2 text-xl font-bold'> Semester-II</p>

                                    <div class="overflow-x-auto">
                                        <table class="table w-full">
                                            <thead>
                                                <tr className='hover'>
                                                    <th className='text-xl normal-case table-data'>Course Code</th>

                                                    <th className='text-xl normal-case table-data'>Name of the course</th>

                                                    <th className='text-xl normal-case table-data'>Internal Marks</th>

                                                    <th className='text-xl normal-case table-data'>External Marks</th>

                                                    <th className='text-xl normal-case table-data'>Exam. Hours</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='hover'>
                                                    <th className='table-data'>B-201</th>

                                                    <td className='table-data'>Pedagogy of two School subjects</td>

                                                    <td className='table-data'>30+30=60</td>

                                                    <td className='table-data'>70+70=140</td>

                                                    <td className='table-data'>
                                                        <p>30</p>
                                                        <p>30</p>
                                                    </td>
                                                </tr>


                                                <tr className='hover'>
                                                    <th className='table-data'>B-202</th>

                                                    <td className='table-data'>School Administration and Management</td>

                                                    <td className='table-data'>30</td>

                                                    <td className='table-data'>70</td>

                                                    <td className='table-data'>3</td>
                                                </tr>
                                                <tr className='hover'>
                                                    <th className='table-data'>B-203</th>

                                                    <td className='table-data'>Educational Technology and ICT</td>

                                                    <td className='table-data'>30</td>

                                                    <td className='table-data'>70</td>

                                                    <td className='table-data'>3</td>
                                                </tr>


                                                <tr className='hover'>
                                                    <th className='table-data'>EPC-204</th>

                                                    <td className='table-data'>Technology Enabled Learning</td>

                                                    <td className='table-data'>25</td>

                                                    <td className='table-data'>--</td>

                                                    <td className='table-data'>--</td>
                                                </tr>
                                                <tr className='hover'>
                                                    <th className='table-data'>EPC-205</th>

                                                    <td className='table-data'>Simulated, Micro and Supervised Teaching</td>

                                                    <td className='table-data'>25</td>

                                                    <td className='table-data'>--</td>

                                                    <td className='table-data'>--</td>
                                                </tr>

                                                <tr className='hover'>
                                                    <th className='table-data'></th>

                                                    <th className='table-data'>TOTAL</th>

                                                    <th className='table-data'>170</th>

                                                    <th className='table-data'>280</th>

                                                    <th className='table-data'>450</th>


                                                </tr>

                                            </tbody>
                                        </table>
                                        {/* <p>For detail information about Kumaun</p>
                                        <ul>
                                            <li>Download B.ED Information Brochure</li>
                                        </ul> */}
                                    </div>
                                </div>


                                {/* Table for semester 3 */}
                                <div className='mb-6'>
                                    <p className='flex justify-center mb-2 text-xl font-bold'>  Semester-III</p>

                                    <div class="overflow-x-auto">
                                        <table class="table w-full">
                                            <thead>
                                                <tr className='hover'>
                                                    <th className='text-xl normal-case table-data'>Course Code</th>

                                                    <th className='text-xl normal-case table-data'>Name of the course</th>

                                                    <th className='text-xl normal-case table-data'>Internal Marks</th>

                                                    <th className='text-xl normal-case table-data'>External Marks</th>

                                                    <th className='text-xl normal-case table-data'>Exam. Hours</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='hover'>
                                                    <th className='table-data'>
                                                        <p>B-301-A</p>
                                                        <p>B-301-B</p>
                                                    </th>

                                                    <td className='table-data'>
                                                        <p>Pre-internship and School </p>
                                                        <p>Observation</p>
                                                        <p>Internship</p>
                                                    </td>

                                                    <td className='table-data'>
                                                        <p>25</p>
                                                        <p>75</p>
                                                    </td>

                                                    <td className='table-data'><p>--</p>
                                                        <p>250</p>
                                                    </td>

                                                    <td className='table-data'>
                                                        <p>--</p>
                                                        <p>--</p>
                                                    </td>
                                                </tr>


                                                <tr className='hover'>
                                                    <th className='table-data'>B-302-A</th>

                                                    <td className='table-data'>Gender, School and Society</td>

                                                    <td className='table-data'>15</td>

                                                    <td className='table-data'>35</td>

                                                    <td className='table-data'>2</td>
                                                </tr>


                                                <tr className='hover'>
                                                    <th className='table-data'>
                                                        <p>B-302-B.1</p>
                                                        <p>B-302-B.2
                                                        </p>
                                                        <p>B-302-B.3
                                                        </p>
                                                        <p>B-302-B.4
                                                        </p>
                                                    </th>

                                                    <td className='table-data'>
                                                        <p>(Any one out of following three)
                                                        </p>
                                                        <p>Teacher and Environmental Education
                                                        </p>
                                                        <p>Guidance and counseling
                                                        </p>
                                                        <p>Value and Peace Education
                                                        </p>
                                                        <p>Basic Statistics
                                                        </p>
                                                    </td>

                                                    <td className='table-data'>15</td>

                                                    <td className='table-data'>35</td>

                                                    <td className='table-data'>2</td>
                                                </tr>


                                                <tr className='hover'>
                                                    <th className='table-data'>EPC-303</th>

                                                    <td className='table-data'>Community Work</td>

                                                    <td className='table-data'>25</td>

                                                    <td className='table-data'>--</td>

                                                    <td className='table-data'>--</td>
                                                </tr>


                                                <tr className='hover'>
                                                    <th className='table-data'></th>

                                                    <th className='table-data'>TOTAL</th>

                                                    <th className='table-data'>155</th>

                                                    <th className='table-data'>320</th>

                                                    <th className='table-data'>475</th>

                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>



                                <div className='mb-6'>
                                    <p className='flex justify-center mb-2 text-xl font-bold'>  Semester-IV</p>

                                    <div class="overflow-x-auto">
                                        <table class="table w-full">
                                            <thead>
                                                <tr className='hover'>
                                                    <th className='text-xl normal-case table-data'>Course Code</th>

                                                    <th className='text-xl normal-case table-data'>Name of the course</th>

                                                    <th className='text-xl normal-case table-data'>Internal Marks</th>

                                                    <th className='text-xl normal-case table-data'>External Marks</th>

                                                    <th className='text-xl normal-case table-data'>Exam. Hours</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='hover'>
                                                    <th className='table-data'>
                                                        B-401
                                                    </th>

                                                    <td className='table-data'>
                                                        Education in Contemporary Indian Society
                                                    </td>

                                                    <td className='table-data'>
                                                        30
                                                    </td>

                                                    <td className='table-data'>70
                                                    </td>

                                                    <td className='table-data'>
                                                        3
                                                    </td>
                                                </tr>


                                                <tr className='hover'>
                                                    <th className='table-data'>
                                                        B-402
                                                    </th>

                                                    <td className='table-data'>
                                                        School Curriculum Development
                                                    </td>

                                                    <td className='table-data'>
                                                        30
                                                    </td>

                                                    <td className='table-data'>70
                                                    </td>

                                                    <td className='table-data'>
                                                        3
                                                    </td>
                                                </tr>


                                                <tr className='hover'>
                                                    <th className='table-data'>
                                                        B-403
                                                    </th>

                                                    <td className='table-data'>
                                                        Measurement and Evaluation
                                                    </td>

                                                    <td className='table-data'>
                                                        30
                                                    </td>

                                                    <td className='table-data'>70
                                                    </td>

                                                    <td className='table-data'>
                                                        3
                                                    </td>
                                                </tr>


                                                <tr className='hover'>
                                                    <th className='table-data'>
                                                        B-404
                                                    </th>

                                                    <td className='table-data'>
                                                        Inclusion in School Education
                                                    </td>

                                                    <td className='table-data'>
                                                        30
                                                    </td>

                                                    <td className='table-data'>70
                                                    </td>

                                                    <td className='table-data'>
                                                        3
                                                    </td>
                                                </tr>


                                                <tr className='hover'>
                                                    <th className='table-data'>
                                                        EPC-405
                                                    </th>

                                                    <td className='table-data'>
                                                        Joyful Learning : Program Anandam
                                                    </td>

                                                    <td className='table-data'>
                                                        25
                                                    </td>

                                                    <td className='table-data'>--
                                                    </td>

                                                    <td className='table-data'>
                                                        --
                                                    </td>
                                                </tr>

                                                <tr className='hover'>
                                                    <th className='table-data'></th>

                                                    <th className='table-data'>TOTAL</th>

                                                    <th className='table-data'>145</th>

                                                    <th className='table-data'>280</th>

                                                    <th className='table-data'>425</th>

                                                </tr>

                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProgramesOffered;