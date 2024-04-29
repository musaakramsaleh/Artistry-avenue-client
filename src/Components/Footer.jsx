import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-red-200 pt-20 '>
            <h2 className='text-3xl font-bold text-white text-center'>Artistry Avenue</h2>
            <div className='text-center mt-5 text-white font-bold text-xl '>
              <p>Bottle@glass.com</p>
              <p>+8464643545</p>
            </div>
            <p className='text-center mt-5 text-white font-bold text-xl mb-3'>Social Links:</p>
            <div className='flex justify-center text-white font-bold text-xl gap-4'>
            <FaFacebook />
            <FaGithub></FaGithub>
            <FaTwitter></FaTwitter>
            <FaLinkedin></FaLinkedin>
            </div>
            <p className='text-center text-white mt-3 font-bold'>2024@Artistry Avenue. All rights reserved</p>
        </div>
    );
};

export default Footer;