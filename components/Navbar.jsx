import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { HiSpeakerphone } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [hideEvents, setHideEvents] = useState(true);
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const toggleShowEvents = () => {
    setShowEvents((prev) => !prev);
  };
  const toggleShowNav = () => {
    setShowNav((prev) => !prev);
  };
  useEffect(() => {
    if (showEvents) {
      setHideEvents(true);
    } else {
      setTimeout(() => {
        setHideEvents(false);
      }, 300);
    }
  }, [showEvents]);
  return (
    <div className='fixed top-0 z-50'>
      <nav
        className={`${
          colorChange ? "bg-[#27378E] duration-300 ease-in-out" : "duration-300 ease-in-out"
        } h-20 relative z-50 select-none w-screen font-secondary flex justify-between items-center px-5 md:px-16 lg:px-24`}
      >
        {/* header logo */}
        <Link href='/'>
          <a className='relative z-50 flex gap-1'>
            <div className='flex flex-col justify-center'>
              <img src='/mabacup.svg' alt='' />
            </div>
          </a>
        </Link>
        <div className='relative z-50 flex mr-2 md:hidden'>
          {!showNav && (
            <GiHamburgerMenu
              className='text-4xl text-white'
              onClick={toggleShowNav}
            />
          )}
          {showNav && (
            <FaTimes
              className='text-4xl text-red-600'
              onClick={toggleShowNav}
            />
          )}
        </div>
        <ul className='md:flex hidden text-white md:gap-5 lg:gap-10 xl:gap-[67px]'>
          <li>
            <Link href='#hero'>
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href='#about'>
              <a>About</a>
            </Link>
          </li>
          <li className='relative'>
            <button
              onClick={toggleShowEvents}
              className='flex items-center gap-[6px]'
            >
              Events{" "}
              <FaAngleDown
                className={`mt-1 ${
                  showEvents ? "rotate-180" : "rotate-0"
                } transition duration-150 text-3xl md:text-lg`}
              />
            </button>
            {/* events */}
            {hideEvents && (
              <div
                className={`absolute shadow-xl ${
                  showEvents ? "opacity-1" : "opacity-0 top-0"
                } right-0 w-32 flex flex-col p-1 py-2 text-secondary transition duration-300 bg-white text-slate-900 top-8`}
              >
                <div className='flex flex-col w-full gap-2'>
                  <div onClick={toggleShowEvents}>
                    <Link href='/nlc'>
                      <a className='text-slate-900'>
                        <div className='flex items-start justify-center gap-4 rounded-sm hover:bg-slate-100 border-b-2'>
                          <h2>Pre Event</h2>
                        </div>
                      </a>
                    </Link>
                  </div>

                  <div onClick={toggleShowEvents}>
                    <Link href='/nst'>
                      <a className='text-slate-900'>
                        <div className='flex items-start justify-center gap-4 rounded-sm hover:bg-slate-100 border-b-2 '>
                          <h2>Main Event</h2>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div onClick={toggleShowEvents}>
                    <Link href='/reeva'>
                      <a className='text-slate-900'>
                        <div className='flex items-start justify-center gap-4 rounded-sm hover:bg-slate-100'>
                          <h2>Closing</h2>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link href='/'>
              <a>Merchandise</a>
            </Link>
          </li>
        </ul>

        <button
          className={`hidden md:block w-52 h-[2.5rem] rounded-lg text-white ${
            colorChange ? "bg-[#5189C4]" : "bg-[#27378E]"
          }`}
        >
          Open Recruitment Staff
        </button>

        {/* {showNav && ( */}
        <ul
          className={`flex md:hidden translate-y-full ${
            showNav ? "translate-x-0 opacity-1" : "translate-x-full opacity-0"
          } text-white z-20 transition duration-300 md:flex-row flex-col bg-[#464646] md:static absolute bottom-0 left-0 md:w-auto w-full md:gap-5 lg:gap-10 xl:gap-[67px]`}
        >
          <li
            onClick={toggleShowNav}
            className='py-4 border-2 border-black px-7'
          >
            <Link href='/about'>
              <a className='flex items-center justify-between w-full md:w-auto md:gap-[6px] text-3xl font-primary text-border-thin md:font-secondary md:text-md'>
                About
              </a>
            </Link>
          </li>
          <li className='relative py-4 border-2 border-black px-7'>
            <button
              onClick={toggleShowEvents}
              className='flex items-center justify-between w-full md:w-auto md:gap-[6px] text-3xl font-primary text-border-thin md:font-secondary md:text-md'
            >
              Events{" "}
              <FaAngleDown
                className={`mt-1 ${
                  showEvents ? "rotate-180" : "rotate-0"
                } transition duration-150 text-3xl md:text-lg`}
              />
            </button>
          </li>
          <div className={`${showEvents ? "flex" : "hidden"} flex-col w-full`}>
            <div
              onClick={() => {
                toggleShowEvents();
                toggleShowNav();
              }}
              className='flex h-10 gap-5 bg-white border-2 border-black px-7'
            >
              <Link href='/nlc'>
                <a className='inline-block w-full text-2xl text-black font-primary'>
                  <div className='inline-block w-5 h-5 rounded-full bg-nlc'></div>{" "}
                  Pre Event
                </a>
              </Link>
            </div>
            <div
              onClick={() => {
                toggleShowEvents();
                toggleShowNav();
              }}
              className='flex h-10 gap-5 bg-white border-2 border-black px-7'
            >
              <Link href='/npc'>
                <a className='inline-block w-full text-2xl text-black font-primary'>
                  <div className='inline-block w-5 h-5 rounded-full bg-npc'></div>{" "}
                  Main Event
                </a>
              </Link>
            </div>
            <div
              onClick={() => {
                toggleShowEvents();
                toggleShowNav();
              }}
              className='flex h-10 gap-5 bg-white border-2 border-black px-7'
            >
              <Link href='/nst'>
                <a className='inline-block w-full text-2xl text-black font-primary'>
                  <div className='inline-block w-5 h-5 rounded-full bg-nst'></div>{" "}
                  Closing
                </a>
              </Link>
            </div>
          </div>
          <li
            onClick={toggleShowNav}
            className='py-4 border-2 border-black px-7'
          >
            <Link href='/about'>
              <a className='flex items-center justify-between w-full md:w-auto md:gap-[6px] text-3xl font-primary text-border-thin md:font-secondary md:text-md'>
                Merchandise
              </a>
            </Link>
          </li>
          <li
            onClick={toggleShowNav}
            className='py-4 bg-white border-2 border-black px-7'
          >
            <Link href='/login'>
              <a className='flex items-center justify-center w-full md:w-auto md:gap-[6px] text-3xl font-primary text-black md:font-secondary md:text-md'>
                Open Recruitment Staff
              </a>
            </Link>
          </li>
        </ul>
        {/* )} */}
      </nav>
    </div>
  );
};

export default Navbar;
