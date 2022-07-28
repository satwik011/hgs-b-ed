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

const FacultyAndStaf = () => {
    return (
        <div>
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
                            <th>1</th>
                            <td>Ms. Beena
                                Negi</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48 table-picture' src={teacher14} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>GEN</td>
                            <td>Assistant <br></br>
                                Professor</td>
                            <td>70.11%</td>
                            <td>76</td>
                            <td>YES</td>
                            <td>GEO,
                                EDUCATIO
                                N</td>
                            <td>SOCIAL <br></br>
                                STUDIES</td>
                            <td>No</td>
                            <td>NET,
                                USET</td>
                            <td>11
                                YEARS</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Ms. Sonal
                                Shukla</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher15} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>GEN</td>
                            <td>Assistant<br></br>
                                Professor</td>
                            <td>60</td>
                            <td>65</td>
                            <td>-</td>
                            <td>M.A,
                                POLITICAL<br></br>
                                SCIENCE,</td>
                            <td>HINDI,<br></br>
                                ECONOMICS</td>
                            <td>-</td>
                            <td>YES</td>
                            <td>4
                                YEARS</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Mr. Vipin
                                Kumar</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher1} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>OBC</td>
                            <td>Assistant<br></br>
                                Professor</td>
                            <td>73</td>
                            <td>77</td>
                            <td>-</td>
                            <td>ENGLISH</td>
                            <td>English</td>
                            <td>NO</td>
                            <td>YES</td>
                            <td>2
                                YEARS</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Ms. Lata
                                Shahi</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher13} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>GEN</td>
                            <td>Assistant<br></br>
                                Professor</td>
                            <td>74</td>
                            <td>75</td>
                            <td>-</td>
                            <td>58
                                ENGLISH</td>
                            <td>English</td>
                            <td>-</td>
                            <td>YES</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Mr.
                                Himanshu
                                Fartyal</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher12} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>GEN</td>
                            <td>Assistant<br></br>
                                Professor</td>
                            <td>72</td>
                            <td>66</td>
                            <td>-</td>
                            <td>-</td>
                            <td>PHYSICAL<br></br>
                                EDUCATION</td>
                            <td>-</td>
                            <td>-</td>
                            <td>6 Years</td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Dr. Yogita
                                Verma</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher2} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>OBC</td>
                            <td>Lecturer<br></br>
                                (Fine Art)</td>
                            <td>62.2%</td>
                            <td>57.5</td>
                            <td>-</td>
                            <td>FINE ARTS</td>
                            <td>FINE ARTS</td>
                            <td>YES</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>Mr.Rajendra Khati</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher11} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>GEN</td>
                            <td>Assistant<br></br>
                                Professor</td>
                            <td>67</td>
                            <td>78</td>
                            <td>-</td>
                            <td>56 POL.<br></br>
                                SCIENCE</td>
                            <td>SST</td>
                            <td>NO</td>
                            <td>YES USET</td>
                            <td>1.5 Years</td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td>Mr. Manoj
                                Kumar</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher3} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>SC</td>
                            <td>Assistant<br></br>
                                Professor</td>
                            <td>60</td>
                            <td>72</td>
                            <td>60</td>
                            <td>-</td>
                            <td>EDUCATION</td>
                            <td>NO</td>
                            <td>YES</td>
                            <td>1 Year</td>
                        </tr>
                        <tr>
                            <th>9</th>
                            <td>Ms. Deepali
                                Gupta</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher9} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>GEN</td>
                            <td>Assistant<br></br>
                                Professor</td>
                            <td>70</td>
                            <td>72</td>
                            <td>-</td>
                            <td>Zoology</td>
                            <td>Science</td>
                            <td>NO</td>
                            <td>YES</td>
                            <td>3 YEARS</td>
                        </tr>
                        <tr>
                            <th>10</th>
                            <td>Ms.
                                Akansha
                                Shaily</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher10} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>SC</td>
                            <td>Assistant<br></br>
                                Professor</td>
                            <td>71.22%</td>
                            <td>73%</td>
                            <td>-</td>
                            <td>Political
                                Science<br></br>
                                Education
                                68%</td>
                            <td>Physical
                                Science,<br></br>
                                Mathematics</td>
                            <td>NO</td>
                            <td>NET</td>
                            <td>10 Months</td>
                        </tr>
                        <tr>
                            <th>11</th>
                            <td>Ms. Deepika
                                Dhanik</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher4} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>GEN</td>
                            <td>Assistant<br></br>
                                Professor</td>
                            <td>73%</td>
                            <td>80%</td>
                            <td>-</td>
                            <td>Chemistry<br></br>
                                Education
                                70%</td>
                            <td>Physical
                                Science,<br></br>
                                Mathematics</td>
                            <td>No</td>
                            <td>NET</td>
                            <td>1 Month</td>
                        </tr>
                        <tr>
                            <th>12</th>
                            <td>Dr. Binita Rai</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher8} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>GEN</td>
                            <td>Assistant<br></br>
                                Professor</td>
                            <td>68%</td>
                            <td>63.66%</td>
                            <td>Yes</td>
                            <td>Pol. Science
                                51.22%<br></br>
                                Education
                                57.44<br></br>
                                English
                                57.66%<br></br>
                                Sociology
                                63%</td>
                            <td>English</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>8 Years</td>
                        </tr>

                        <tr>
                            <th>13</th>
                            <td>Dr.
                                Gokulanand
                                Tiwari</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher5} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>GEN</td>
                            <td>Assistant<br></br>
                                Professor</td>
                            <td>65.7%</td>
                            <td>73%</td>
                            <td>-</td>
                            <td>Sanskrit 68%</td>
                            <td>Hindi,
                                Sanskrit</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <th>14</th>
                            <td>Ms. Shalini
                                Bharti</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher6} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>SC</td>
                            <td>Assistant<br></br>
                                Professor</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Music Vocal
                                62.8%</td>
                            <td>Music</td>
                            <td>-</td>
                            <td>-</td>
                            <td>1 Year</td>
                        </tr>
                        <tr>
                            <th>15</th>
                            <td>Mr. Neeraj
                                Kumar</td>
                            <td>
                                <div class="avatar">
                                    <div class="w-48 rounded">
                                        <img className='w-48' src={teacher7} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>SC</td>
                            <td>Assistant<br></br>
                                Professor</td>
                            <td>62%</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Visual Art
                                70%</td>
                            <td>Visual Art</td>
                            <td>-</td>
                            <td>-</td>
                            <td>1.1 Year</td>
                        </tr>

                    </tbody>

                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}
                </table>
            </div>
        </div>
    );
};

export default FacultyAndStaf;