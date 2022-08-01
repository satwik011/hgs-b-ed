import React from 'react';
import teacher1 from './../assets/images/teacher (1).png';
import teacher2 from './../assets/images/teacher (2).png';
import teacher3 from './../assets/images/teacher (3).png';
import teacher4 from './../assets/images/teacher (4).png';
import teacher5 from './../assets/images/teacher (5).png';
import teacher6 from './../assets/images/teacher (6).png';
import teacher7 from './../assets/images/teacher (7).png';
import teacher8 from './../assets/images/teacher (8).png';
import teacher9 from './../assets/images/teacher (9).png';
import teacher10 from './../assets/images/teacher (10).png';
import teacher11 from './../assets/images/teacher (11).png';
import teacher12 from './../assets/images/teacher (12).png';
import teacher13 from './../assets/images/teacher (13).png';
import teacher14 from './../assets/images/teacher (14).png';
import teacher15 from './../assets/images/teacher (15).png';
import location from './../assets/icons/location.png'
import email from './../assets/icons/email.png'
import phone from './../assets/icons/footer.png'
import aboutUs from './../assets/images/alumni-cover.JPG'
import sosChildrenVillage from './../assets/images/sos_logo 3.png';
import './FacultyStafTable.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer';

const FacultyAndStaf = ({ setShowNavbar, setOverview, setLidership, setProgramsOffered, setAlumni, setAdmission, setFacultiStaff, setContactUs }) => {
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
        setShowNavbar[1](true); 
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
        <div className=''>

<div>
            <img  onClick={handleOverView} className='w-20 lg:w-48 md:24 home-button hover:shadow-2xl' src={sosChildrenVillage} alt="" />
            <img className='w-full' src={aboutUs} alt="" />
            <div className='flex flex-col justify-between md:flex-row'>
                <div className='flex justify-center mt-6 ml-6 md:grid lg:grid'>
                <div>
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
                            <img className='mr-4' src={email} alt="" />
                            <p className='flex forTextHover'>Principal.bhimtalbed@sos<br />cvindia.org </p>
                        </div>
                        <div className='flex'>
                            <img className='mr-4' src={phone} alt="" />
                            <p className='flex forTextHover'>05942-247999</p>
                        </div>
                    </div>
                </div>
                </div>
                

                {/* This is table */}
                <div className='w-full'>
                    <div class="mb-[50px] ml-6 mr-6 mt-2">
                    <h1 style={{color: '#0076BD'}} className='flex justify-center mt-6 mb-6 text-4xl font-bold leadership-heading'>Details of Teaching Staff</h1>
                    <p className='flex justify-center mb-2 text-xl'>LECTURERS/TEACHING STAFF (AS PER NCTE NORMS)</p>
                    <div class="overflow-x-auto md:mx-2 lg:mx-8">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <th className='table-data'>1</th>
                            <td className='table-data fixed-width-name'> <span className='flex justify-center'> Ms. Beena Negi</span></td>
                            <td className='table-data'>
                                <span className='flex justify-center'><div class="avatar"> <span className='flex justify-center'> <div class="w-32 rounded">
                                        <img className='w-32 table-picture' src={teacher14} alt="Avatar Tailwind CSS Component" />
                                    </div></span>
                                    
                                </div></span>
                                
                            </td>
                            <td className='table-data'> <span className='flex justify-center'> GEN</span></td>
                            <td className='table-data'> <span className='flex justify-center'> Assistant <br></br> Professor</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 70.11%</span></td>
                            <td className='table-data'> <span className='flex justify-center'>76 </span></td>
                            <td className='table-data'> <span className='flex justify-center'>YES </span></td>
                            <td className='table-data'> <span className='flex justify-center'> GEO,
                                EDUCATIO
                                N</span></td>
                            <td className='table-data'> <span className='flex justify-center'> SOCIAL <br></br>
                                STUDIES</span></td>
                            <td className='table-data'> <span className='flex justify-center'>No</span></td>
                            <td className='table-data'> <span className='flex justify-center'> NET,
                                USET</span></td>
                            <td className='table-data'> <span className='flex justify-center'> </span></td>
                        </tr>
                        
                        <tr>
                            <th className='table-data'> <span className='flex justify-center'> 2</span></th>
                            <td className='table-data fixed-width-name'> <span className='flex justify-center'> Ms. Sonal
                                Shukla</span></td>
                            <td className='table-data'> <span className='flex justify-center'> <div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher15} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></span>
                                
                            </td>
                            <td className='table-data'> <span className='flex justify-center'> GEN</span></td>
                            <td className='table-data'> <span className='flex justify-center'> Assistant<br></br>
                                Professor</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 60</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 65</span></td>
                            <td className='table-data'> <span className='flex justify-center'> -</span>-</td>
                            <td className='table-data'> <span className='flex justify-center'> M.A,
                                POLITICAL<br></br>
                                SCIENCE,</span></td>
                            <td className='table-data'> <span className='flex justify-center'> HINDI,<br></br>
                                ECONOMICS</span></td>
                            <td className='table-data'> <span className='flex justify-center'>- </span></td>
                            <td className='table-data'> <span className='flex justify-center'>YES </span></td>
                            <td className='table-data'> <span className='flex justify-center'> 4 YEARS</span></td>
                        </tr>
                        <tr>
                            <th className='table-data'> <span className='flex justify-center'> </span>3</th>
                            <td className='table-data fixed-width-name'> <span className='flex justify-center'> Mr. Vipin
                                Kumar</span></td>
                            <td className='table-data'> <span className='flex justify-center'> <div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher1} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></span>
                                
                            </td>
                            <td className='table-data'> <span className='flex justify-center'> OBC</span></td>
                            <td className='table-data'> <span className='flex justify-center'> Assistant<br></br>
                                Professor</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 73</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 77</span></td>
                            <td className='table-data'> <span className='flex justify-center'> -</span></td>
                            <td className='table-data'> <span className='flex justify-center'> ENGLISH</span></td>
                            <td className='table-data'> <span className='flex justify-center'> English</span></td>
                            <td className='table-data'> <span className='flex justify-center'> NO</span></td>
                            <td className='table-data'> <span className='flex justify-center'> YES</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 2
                                YEARS</span></td>
                        </tr>
                        <tr>
                            <th className='table-data'> <span className='flex justify-center'> 4</span></th>
                            <td className='table-data fixed-width-name'> <span className='flex justify-center'> Ms. Lata
                                Shahi</span></td>
                            <td className='table-data'> <span className='flex justify-center'><div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher13} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div> </span>
                                

                            </td>
                            <td className='table-data'> <span className='flex justify-center'> GEN</span></td>
                            <td className='table-data'> <span className='flex justify-center'> Assistant <br></br>
                                Professor</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 74</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 75</span></td>
                            <td className='table-data'> <span className='flex justify-center'> -</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 58
                                ENGLISH</span></td>
                            <td className='table-data'> <span className='flex justify-center'> English</span></td>
                            <td className='table-data'> <span className='flex justify-center'> -</span></td>
                            <td className='table-data'> <span className='flex justify-center'>YES </span></td>
                            <td className='table-data'> <span className='flex justify-center'> -</span></td>
                        </tr>


                        <tr>
                            <th className='table-data'> <span className='flex justify-center'> 5</span></th>
                            <td className='table-data fixed-width-name'> <span className='flex justify-center'>Mr.
                                Himanshu
                                Fartyal </span></td>
                            <td className='table-data'> <span className='flex justify-center'> <div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher12} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></span>
                                

                            </td>
                            <td className='table-data'> <span className='flex justify-center'>GEN </span></td>
                            <td className='table-data'> <span className='flex justify-center'> Assistant <br></br>
                                Professor</span></td>
                            <td className='table-data'> <span className='flex justify-center'>72 </span></td>
                            <td className='table-data'> <span className='flex justify-center'> 66</span></td>
                            <td className='table-data'> <span className='flex justify-center'> -</span></td>
                            <td className='table-data'> <span className='flex justify-center'> -</span></td>
                            <td className='table-data'> <span className='flex justify-center'> PHYSICAL<br></br>
                                EDUCATION</span></td>
                            <td className='table-data'> <span className='flex justify-center'> -</span></td>
                            <td className='table-data'> <span className='flex justify-center'> -</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 6 Years</span></td>
                        </tr>



                        <tr>
                            <th className='table-data'> <span className='flex justify-center'> 6</span></th>
                            <td className='table-data fixed-width-name'> <span className='flex justify-center'> Dr. Yogita
                                Verma</span></td>
                            <td className='table-data'> <span className='flex justify-center'><div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher2} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                 </span>
                                
                            </td>
                            <td className='table-data'> <span className='flex justify-center'> OBC</span></td>
                            <td className='table-data'> <span className='flex justify-center'> Lecturer <br></br>
                                (Fine Art)</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 62.2%</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 57.5</span></td>
                            <td className='table-data'> <span className='flex justify-center'> -</span></td>
                            <td className='table-data'> <span className='flex justify-center'> FINE ARTS</span></td>
                            <td className='table-data'> <span className='flex justify-center'> FINE ARTS</span></td>
                            <td className='table-data'> <span className='flex justify-center'> YES</span></td>
                            <td className='table-data'> <span className='flex justify-center'> -</span></td>
                            <td className='table-data'> <span className='flex justify-center'> -</span></td>
                        </tr>


                        <tr>
                            <th className='table-data'>7</th>
                            <td className='table-data fixed-width-name'> <span className='flex justify-center'> Mr.Rajendra Khati</span></td>
                            <td className='table-data'> <span className='flex justify-center'> <div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher11} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></span>
                                

                            </td>
                            <td className='table-data'> <span className='flex justify-center'> GEN</span></td>
                            <td className='table-data'> <span className='flex justify-center'> Assistant <br></br>
                                Professor</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 67</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 78</span></td>
                            <td className='table-data'> <span className='flex justify-center'> -</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 56 POL.<br></br>
                                SCIENCE</span></td>
                            <td className='table-data'> <span className='flex justify-center'>SST </span></td>
                            <td className='table-data'> <span className='flex justify-center'> NO</span></td>
                            <td className='table-data'> <span className='flex justify-center'> YES USET</span></td>
                            <td className='table-data'> <span className='flex justify-center'> 1.5 Years</span></td>
                        </tr>
                        <tr>
                            <th className='table-data'> <span className='flex justify-center'> 8</span></th>
                            <td className='table-data fixed-width-name'><span className='flex justify-center'>Mr. Manoj
                                Kumar</span></td>
                            <td className='table-data'><span className='flex justify-center'><div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher3} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></span>
                                

                            </td>
                            <td className='table-data'><span className='flex justify-center'>SC</span></td>
                            <td className='table-data'><span className='flex justify-center'>Assistant<br></br>
                                Professor</span></td>
                            <td className='table-data'><span className='flex justify-center'>60</span></td>
                            <td className='table-data'><span className='flex justify-center'>72</span></td>
                            <td className='table-data'><span className='flex justify-center'>60</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>EDUCATION</span></td>
                            <td className='table-data'><span className='flex justify-center'>NO</span></td>
                            <td className='table-data'><span className='flex justify-center'>YES</span></td>
                            <td className='table-data'><span className='flex justify-center'>1 Year</span></td>
                        </tr>
                        <tr>
                            <th className='table-data'><span className='flex justify-center'>9</span></th>
                            <td className='table-data fixed-width-name'><span className='flex justify-center'>Ms. Deepali
                                Gupta</span></td>
                            <td className='table-data'><span className='flex justify-center'><div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher9} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></span>
                                

                            </td>
                            <td className='table-data'><span className='flex justify-center'>GEN</span></td>
                            <td className='table-data'><span className='flex justify-center'>Assistant <br></br>
                                Professor</span></td>
                            <td className='table-data'><span className='flex justify-center'>70</span></td>
                            <td className='table-data'><span className='flex justify-center'>72</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>Zoology</span></td>
                            <td className='table-data'><span className='flex justify-center'>Science</span></td>
                            <td className='table-data'><span className='flex justify-center'>NO</span></td>
                            <td className='table-data'><span className='flex justify-center'>YES</span></td>
                            <td className='table-data'><span className='flex justify-center'>3 YEARS</span></td>
                        </tr>
                        <tr>
                            <th className='table-data'><span className='flex justify-center'>10</span></th>
                            <td className='table-data fixed-width-name'><span className='flex justify-center'>Ms.
                                Akansha
                                Shaily</span></td>
                            <td className='table-data'><span className='flex justify-center'><div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher10} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></span>
                                

                            </td>
                            <td className='table-data'><span className='flex justify-center'>SC</span></td>
                            <td className='table-data'><span className='flex justify-center'>Assistant<br></br>
                                Professor</span></td>
                            <td className='table-data'><span className='flex justify-center'>71.22%</span></td>
                            <td className='table-data'><span className='flex justify-center'>73%</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>Political
                                Science<br></br>
                                Education
                                68%</span></td>
                            <td className='table-data'><span className='flex justify-center'>Physical
                                Science,<br></br>
                                Mathematics</span></td>
                            <td className='table-data'><span className='flex justify-center'>NO</span></td>
                            <td className='table-data'><span className='flex justify-center'>NET</span></td>
                            <td className='table-data'><span className='flex justify-center'>10 Months</span></td>
                        </tr>
                        <tr>
                            <th className='table-data'><span className='flex justify-center'>11</span></th>
                            <td className='table-data fixed-width-name'><span className='flex justify-center'>Ms. Deepika
                                Dhanik</span></td>
                            <td className='table-data'><span className='flex justify-center'><div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher4} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></span>
                                

                            </td>
                            <td className='table-data'><span className='flex justify-center'>GEN</span></td>
                            <td className='table-data'><span className='flex justify-center'>Assistant <br></br>
                                Professor</span></td>
                            <td className='table-data'><span className='flex justify-center'>73%</span></td>
                            <td className='table-data'><span className='flex justify-center'>80%</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>Chemistry<br></br>
                                Education
                                70%</span></td>
                            <td className='table-data'><span className='flex justify-center'>Physical
                                Science,<br></br>
                                Mathematics</span></td>
                            <td className='table-data'><span className='flex justify-center'>No</span></td>
                            <td className='table-data'><span className='flex justify-center'>NET</span></td>
                            <td className='table-data'><span className='flex justify-center'>1 Month</span></td>
                        </tr>
                        <tr>
                            <th className='table-data'><span className='flex justify-center'>12</span></th>
                            <td className='table-data fixed-width-name'><span className='flex justify-center'>Dr. Binita Rai</span></td>
                            <td className='table-data'><span className='flex justify-center'><div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher8} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></span>
                                

                            </td>
                            <td className='table-data'><span className='flex justify-center'>GEN</span></td>
                            <td className='table-data'><span className='flex justify-center'>Assistant<br></br>
                                Professor</span></td>
                            <td className='table-data'><span className='flex justify-center'>68%</span></td>
                            <td className='table-data'><span className='flex justify-center'>63.66%</span></td>
                            <td className='table-data'><span className='flex justify-center'>Yes</span></td>
                            <td className='table-data'><span className='flex justify-center'>Pol. Science
                                51.22%<br></br>
                                Education
                                57.44<br></br>
                                English
                                57.66%<br></br>
                                Sociology
                                63%</span></td>
                            <td className='table-data'><span className='flex justify-center'>English</span></td>
                            <td className='table-data'><span className='flex justify-center'>Yes</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>8 Years</span></td>
                        </tr>

                        <tr>
                            <th className='table-data'><span className='flex justify-center'>13</span></th>
                            <td className='table-data fixed-width-name'><span className='flex justify-center'>Dr.
                                Gokulanand
                                Tiwari</span></td>
                            <td className='table-data'><span className='flex justify-center'><div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher5} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></span>
                                

                            </td>
                            <td className='table-data'><span className='flex justify-center'>GEN</span></td>
                            <td className='table-data'><span className='flex justify-center'>Assistant<br></br>
                                Professor</span></td>
                            <td className='table-data'><span className='flex justify-center'>65.7%</span></td>
                            <td className='table-data'><span className='flex justify-center'>73%</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>Sanskrit 68%</span></td>
                            <td className='table-data'><span className='flex justify-center'>Hindi,
                                Sanskrit</span></td>
                            <td className='table-data'><span className='flex justify-center'>Yes</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                        </tr>

                        <tr>
                            <th className='table-data'><span className='flex justify-center'>14</span></th>
                            <td className='table-data fixed-width-name'><span className='flex justify-center'>Ms. Shalini
                                Bharti</span></td>
                            <td className='table-data'><span className='flex justify-center'><div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher6} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></span>
                                

                            </td>
                            <td className='table-data'><span className='flex justify-center'>SC</span></td>
                            <td className='table-data'><span className='flex justify-center'>Assistant<br></br>
                                Professor</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>Music Vocal
                                62.8%</span></td>
                            <td className='table-data'><span className='flex justify-center'>Music</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>1 Year</span></td>
                        </tr>

                        <tr>
                            <th className='table-data'><span className='flex justify-center'>15</span></th>
                            <td className='table-data fixed-width-name'><span className='flex justify-center'>Mr. Neeraj
                                Kumar</span></td>
                            <td className='table-data'><span className='flex justify-center'><div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher7} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div></span>
                                

                            </td>
                            <td className='table-data'><span className='flex justify-center'>SC</span></td>
                            <td className='table-data'><span className='flex justify-center'>Assistant<br></br>
                                Professor</span></td>
                            <td className='table-data'><span className='flex justify-center'>62%</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>Visual Art
                                70%</span></td>
                            <td className='table-data'><span className='flex justify-center'>Visual Art</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>-</span></td>
                            <td className='table-data'><span className='flex justify-center'>1.1 Year</span></td>
                        </tr>

                        
                        <tr className='hidden'>
                            <th className='table-data'>15</th>
                            <td className='table-data fixed-width-name'>Mr. Neeraj
                                Kumar</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-32 rounded">
                                        <img className='w-32' src={teacher7} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td className='table-data'>SC</td>
                            <td className='table-data'>Assistant<br></br>
                                Professor</td>
                            <td className='table-data'>62%</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>Visual Art
                                70%</td>
                            <td className='table-data'>Visual Art</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>1.1 Year</td>
                        </tr>
                    </tbody>

                    {/* <tfoot>
                        <tr>
                            <th className='table-data'></th>
                            <th className='table-data'>Name</th>
                            <th className='table-data'>Job</th>
                            <th className='table-data'>Favorite Color</th>
                            <th className='table-data'></th>
                        </tr>
                    </tfoot> */}
                </table>
            </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default FacultyAndStaf;