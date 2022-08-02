import React from 'react';
import InstuteOfEducation from './InstuteOfEducation';

const Home = ({ setShowNavbar, setOverview, setLidership, setProgramsOffered, setAlumni, setAdmission, setFacultiStaff, setContactUs }) => {
    return (
        <div>
            <div>
            <InstuteOfEducation></InstuteOfEducation>
            </div>
        </div>
    );
};

export default Home;