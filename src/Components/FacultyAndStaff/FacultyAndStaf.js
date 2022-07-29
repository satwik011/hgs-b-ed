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
import Navbar from '../../Navbar/Navbar';
import './FacultyStafTable.css';

const FacultyAndStaf = () => {
    return (
        <div className='mb-8'>
            <Navbar></Navbar>
            <h1 className='flex justify-center mt-12 mb-6 text-4xl font-bold text-blue-600'>Details of Teaching Staff</h1>
            <p className='flex justify-center mb-8 text-xl'>LECTURERS/TEACHING STAFF (AS PER NCTE NORMS)</p>
            <div class="overflow-x-auto md:mx-2 lg:mx-8">
                <table class="table w-full">
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
                            <td className='table-data'>Ms. Beena Negi</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48 table-picture' src={teacher14} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td className='table-data'>GEN</td>
                            <td className='table-data'>Assistant <br></br>
                                Professor</td>
                            <td className='table-data'>70.11%</td>
                            <td className='table-data'>76</td>
                            <td className='table-data'>YES</td>
                            <td className='table-data'>GEO,
                                EDUCATIO
                                N</td>
                            <td className='table-data'>SOCIAL <br></br>
                                STUDIES</td>
                            <td className='table-data'>No</td>
                            <td className='table-data'>NET,
                                USET</td>
                            <td className='table-data'>11
                                YEARS</td>
                        </tr>
                        
                        <tr>
                            <th className='table-data'>2</th>
                            <td className='table-data'>Ms. Sonal
                                Shukla</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher15} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td className='table-data'>GEN</td>
                            <td className='table-data'>Assistant<br></br>
                                Professor</td>
                            <td className='table-data'>60</td>
                            <td className='table-data'>65</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>M.A,
                                POLITICAL<br></br>
                                SCIENCE,</td>
                            <td className='table-data'>HINDI,<br></br>
                                ECONOMICS</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>YES</td>
                            <td className='table-data'>4
                                YEARS</td>
                        </tr>
                        <tr>
                            <th className='table-data'>3</th>
                            <td className='table-data'>Mr. Vipin
                                Kumar</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher1} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td className='table-data'>OBC</td>
                            <td className='table-data'>Assistant<br></br>
                                Professor</td>
                            <td className='table-data'>73</td>
                            <td className='table-data'>77</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>ENGLISH</td>
                            <td className='table-data'>English</td>
                            <td className='table-data'>NO</td>
                            <td className='table-data'>YES</td>
                            <td className='table-data'>2
                                YEARS</td>
                        </tr>
                        <tr>
                            <th className='table-data'>4</th>
                            <td className='table-data'>Ms. Lata
                                Shahi</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher13} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td className='table-data'>GEN</td>
                            <td className='table-data'>Assistant<br></br>
                                Professor</td>
                            <td className='table-data'>74</td>
                            <td className='table-data'>75</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>58
                                ENGLISH</td>
                            <td className='table-data'>English</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>YES</td>
                            <td className='table-data'>-</td>
                        </tr>
                        <tr>
                            <th className='table-data'>5</th>
                            <td className='table-data'>Mr.
                                Himanshu
                                Fartyal</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher12} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td className='table-data'>GEN</td>
                            <td className='table-data'>Assistant<br></br>
                                Professor</td>
                            <td className='table-data'>72</td>
                            <td className='table-data'>66</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>PHYSICAL<br></br>
                                EDUCATION</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>6 Years</td>
                        </tr>
                        <tr>
                            <th className='table-data'>6</th>
                            <td className='table-data'>Dr. Yogita
                                Verma</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher2} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td className='table-data'>OBC</td>
                            <td className='table-data'>Lecturer<br></br>
                                (Fine Art)</td>
                            <td className='table-data'>62.2%</td>
                            <td className='table-data'>57.5</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>FINE ARTS</td>
                            <td className='table-data'>FINE ARTS</td>
                            <td className='table-data'>YES</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>-</td>
                        </tr>
                        <tr>
                            <th className='table-data'>7</th>
                            <td className='table-data'>Mr.Rajendra Khati</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher11} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td className='table-data'>GEN</td>
                            <td className='table-data'>Assistant<br></br>
                                Professor</td>
                            <td className='table-data'>67</td>
                            <td className='table-data'>78</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>56 POL.<br></br>
                                SCIENCE</td>
                            <td className='table-data'>SST</td>
                            <td className='table-data'>NO</td>
                            <td className='table-data'>YES USET</td>
                            <td className='table-data'>1.5 Years</td>
                        </tr>
                        <tr>
                            <th className='table-data'>8</th>
                            <td className='table-data'>Mr. Manoj
                                Kumar</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher3} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td className='table-data'>SC</td>
                            <td className='table-data'>Assistant<br></br>
                                Professor</td>
                            <td className='table-data'>60</td>
                            <td className='table-data'>72</td>
                            <td className='table-data'>60</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>EDUCATION</td>
                            <td className='table-data'>NO</td>
                            <td className='table-data'>YES</td>
                            <td className='table-data'>1 Year</td>
                        </tr>
                        <tr>
                            <th className='table-data'>9</th>
                            <td className='table-data'>Ms. Deepali
                                Gupta</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher9} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td className='table-data'>GEN</td>
                            <td className='table-data'>Assistant<br></br>
                                Professor</td>
                            <td className='table-data'>70</td>
                            <td className='table-data'>72</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>Zoology</td>
                            <td className='table-data'>Science</td>
                            <td className='table-data'>NO</td>
                            <td className='table-data'>YES</td>
                            <td className='table-data'>3 YEARS</td>
                        </tr>
                        <tr>
                            <th className='table-data'>10</th>
                            <td className='table-data'>Ms.
                                Akansha
                                Shaily</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher10} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td className='table-data'>SC</td>
                            <td className='table-data'>Assistant<br></br>
                                Professor</td>
                            <td className='table-data'>71.22%</td>
                            <td className='table-data'>73%</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>Political
                                Science<br></br>
                                Education
                                68%</td>
                            <td className='table-data'>Physical
                                Science,<br></br>
                                Mathematics</td>
                            <td className='table-data'>NO</td>
                            <td className='table-data'>NET</td>
                            <td className='table-data'>10 Months</td>
                        </tr>
                        <tr>
                            <th className='table-data'>11</th>
                            <td className='table-data'>Ms. Deepika
                                Dhanik</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher4} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td className='table-data'>GEN</td>
                            <td className='table-data'>Assistant<br></br>
                                Professor</td>
                            <td className='table-data'>73%</td>
                            <td className='table-data'>80%</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>Chemistry<br></br>
                                Education
                                70%</td>
                            <td className='table-data'>Physical
                                Science,<br></br>
                                Mathematics</td>
                            <td className='table-data'>No</td>
                            <td className='table-data'>NET</td>
                            <td className='table-data'>1 Month</td>
                        </tr>
                        <tr>
                            <th className='table-data'>12</th>
                            <td className='table-data'>Dr. Binita Rai</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher8} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td className='table-data'>GEN</td>
                            <td className='table-data'>Assistant<br></br>
                                Professor</td>
                            <td className='table-data'>68%</td>
                            <td className='table-data'>63.66%</td>
                            <td className='table-data'>Yes</td>
                            <td className='table-data'>Pol. Science
                                51.22%<br></br>
                                Education
                                57.44<br></br>
                                English
                                57.66%<br></br>
                                Sociology
                                63%</td>
                            <td className='table-data'>English</td>
                            <td className='table-data'>Yes</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>8 Years</td>
                        </tr>

                        <tr>
                            <th className='table-data'>13</th>
                            <td className='table-data'>Dr.
                                Gokulanand
                                Tiwari</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher5} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td className='table-data'>GEN</td>
                            <td className='table-data'>Assistant<br></br>
                                Professor</td>
                            <td className='table-data'>65.7%</td>
                            <td className='table-data'>73%</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>Sanskrit 68%</td>
                            <td className='table-data'>Hindi,
                                Sanskrit</td>
                            <td className='table-data'>Yes</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>-</td>
                        </tr>

                        <tr>
                            <th className='table-data'>14</th>
                            <td className='table-data'>Ms. Shalini
                                Bharti</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher6} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td className='table-data'>SC</td>
                            <td className='table-data'>Assistant<br></br>
                                Professor</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>Music Vocal
                                62.8%</td>
                            <td className='table-data'>Music</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>-</td>
                            <td className='table-data'>1 Year</td>
                        </tr>

                        <tr>
                            <th className='table-data'>15</th>
                            <td className='table-data'>Mr. Neeraj
                                Kumar</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher7} alt="Avatar Tailwind CSS Component" />
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

                        
                        <tr className='hidden'>
                            <th className='table-data'>15</th>
                            <td className='table-data'>Mr. Neeraj
                                Kumar</td>
                            <td className='table-data'>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher7} alt="Avatar Tailwind CSS Component" />
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
    );
};

export default FacultyAndStaf;