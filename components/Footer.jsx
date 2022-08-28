import React from "react";
// import Image from "next/image";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaLine,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-[#262626] px-5 md:px-16 xl:px-[132px] py-[30px] select-none relative z-20'>
      <div className='flex flex-col gap-8 sm:flex-row justify-between items-center'>
        {/* Logo */}
        <img className='h-40' src='/mabacup.svg' alt='Mabacup' />
        <div className='flex flex-col gap-y-4'>
          {/* Social Media Icon*/}
          {/* IG */}
          <div className='flex gap-x-2 items-center'>
            <FaInstagram className='text-white' size={28} />
            <p className='text-white font-base '>@mabacupits</p>
          </div>
          {/* Tiktok */}
          <div className='flex gap-x-2 items-center'>
            <FaTiktok className='text-white' size={28} />
            <p className='text-white font-base '>mabacupits</p>
          </div>
          {/* Youtube */}
          <div className='flex gap-x-2 items-center'>
            <FaYoutube className='text-white' size={28} />
            <p className='text-white font-base '>MABA CUP ITS</p>
          </div>
          {/* Line */}
          <div className='flex gap-x-2 items-center'>
            <FaLine className='text-white' size={28} />
            <p className='text-white font-base '>@899jpfck</p>
          </div>
        </div>
        <p className='text-white mt-8 sm:hidden block'>© MABACUP 2022</p>
      </div>
      <div className='flex justify-center sm:justify-between mt-2 sm:mt-8 items-center border-t-2 pt-2'>
        <p className='text-white sm:block hidden'>© MABACUP 2022</p>
        <img src='/footer/logos.svg' alt='Mabacup 2022' />
      </div>
    </footer>
  );
};

export default Footer;
