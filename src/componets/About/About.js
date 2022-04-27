import React from 'react';
import { Link } from 'react-router-dom';
import '../About/About.css'

const About = () => {
    return (
        <div className='mt-5 w-75 mx-auto about'>
           <div>
               <img src={'https://lh3.googleusercontent.com/_VXv8ASBS_DBdWP2N_2D2osI4cuvvfrgEeqmMpaCcW109Fxe-Cv41mddgBqHjlRjeSxMpMQlJCdFQ7n2eFrgyJhuVD07Ek7uaZzS'}></img>
               <h2> Hey, I'm Abdullah!</h2>
               <p>Professional Photographer in your area. I'm always ready capture your memoralble moment.</p>
           </div>
           <div >
               <p>Weeding / Holud/Birthday/e-commarce and Outdoor premimum quality capture in any day of your near area.
                   I'm experience Photographer in your area. I have three years expart person.
                   Belive me ! try to best photo in your valuable moment.
                   <Link className='text-decoration-none' to='/'>Book Me!</Link>
               </p>
           </div>
        </div>
    );
};

export default About;