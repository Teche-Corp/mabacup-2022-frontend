import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ showNav, setShowNav }) => {
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

  const notify = () => toast("Coming Soon !");

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
    <>
      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='fixed top-0 z-50'>
        <nav
          className={`${
            colorChange
              ? "bg-[#27378E] duration-300 ease-in-out "
              : `duration-300 ease-in-out `
          } h-20 relative z-50 select-none w-screen font-secondary text-white  flex justify-between items-center px-5 md:px-16 lg:px-24`}
        >
          {/* header logo */}
          <Link href='/'>
            <a className='md:hidden opacity-0 relative z-50 flex gap-1'>
              <div className='flex flex-col justify-center'>
                <img src='/mabacup.svg' alt='' />
              </div>
            </a>
          </Link>
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
          <ul className={`md:flex hidden  md:gap-5 lg:gap-10 xl:gap-[67px] `}>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link href='/AboutUs'>
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
                  } transition duration-150 text-2xl md:text-lg`}
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
                    <div onClick={(toggleShowEvents, notify)}>
                      <Link href=''>
                        <a className='text-slate-900'>
                          <div className='flex items-start justify-center gap-4 rounded-sm hover:bg-slate-100 '>
                            <h2>Pre Event</h2>
                          </div>
                        </a>
                      </Link>
                    </div>

                    <div onClick={(toggleShowEvents, notify)}>
                      <Link href='#'>
                        <a className='text-slate-900'>
                          <div className='flex items-start justify-center gap-4 rounded-sm hover:bg-slate-100 '>
                            <h2>Main Event</h2>
                          </div>
                        </a>
                      </Link>
                    </div>
                    <div onClick={(toggleShowEvents, notify)}>
                      <Link href='/'>
                        <a className='text-slate-900'>
                          <div className='flex items-start justify-center gap-4 rounded-sm hover:bg-slate-100 '>
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
              <Link href='/comingSoon'>
                <a>Merchandise</a>
              </Link>
            </li>
          </ul>

          {/* <Link href={"https://mabacup-its.com/oprec-ambassador"}>
            <button className='oprec-button hidden md:block w-48 lg:w-52  h-[2.5rem] font-medium rounded-lg text-white text-sm '>
              Open Recruitment Ambassador
            </button>
          </Link> */}

          <ul
            className={`flex md:hidden translate-y-full ${
              showNav ? "translate-x-0 opacity-1" : "translate-x-full opacity-0"
            } text-white z-20 transition duration-300 flex-col h-screen bg-[#27378E] absolute bottom-0 left-0  w-full`}
          >
            <li onClick={toggleShowNav} className='py-4 px-7'>
              <Link href='/'>
                <a className='flex items-center justify-center w-full text-2xl font-secondary text-border-thin '>
                  Home
                </a>
              </Link>
            </li>
            <li onClick={toggleShowNav} className='py-4  px-7'>
              <Link href='/AboutUs'>
                <a className='flex items-center justify-center w-full text-2xl font-secondary text-border-thin '>
                  About
                </a>
              </Link>
            </li>
            <li className='relative py-4 px-7'>
              <button
                onClick={toggleShowEvents}
                className='flex gap-2 items-center justify-center w-full text-2xl font-secondary text-border-thin  '
              >
                Events{" "}
                <FaAngleDown
                  className={`mt-1 ${
                    showEvents ? "rotate-180" : "rotate-0"
                  } transition duration-150 text-2xl `}
                />
              </button>
            </li>
            <div
              className={`${showEvents ? "flex" : "hidden"} flex-col w-full`}
            >
              <div
                onClick={() => {
                  toggleShowEvents();
                  toggleShowNav();
                }}
                className='flex h-10 gap-5  px-7'
              >
                <Link href='/comingSoon'>
                  <a className='inline-block flex items-center justify-center w-full text-xl  font-secondary'>
                    Pre Event
                  </a>
                </Link>
              </div>
              <div
                onClick={() => {
                  toggleShowEvents();
                  toggleShowNav();
                }}
                className='flex h-10 gap-5 px-7'
              >
                <Link href='/'>
                  <a className='inline-block flex items-center justify-center w-full text-xl  font-secondary'>
                    Main Event
                  </a>
                </Link>
              </div>
              <div
                onClick={() => {
                  toggleShowEvents();
                  toggleShowNav();
                }}
                className='flex h-10 gap-5 px-7'
              >
                <Link href='/'>
                  <a className='inline-block flex items-center  justify-center w-full text-xl  font-secondary'>
                    Closing
                  </a>
                </Link>
              </div>
            </div>
            <li onClick={toggleShowNav} className={`py-4 px-7`}>
              <Link href='/'>
                <a className='flex items-center justify-center w-full  text-2xl font-secondary text-border-thin  md:font-secondary '>
                  Merchandise
                </a>
              </Link>
            </li>
            <li
              onClick={toggleShowNav}
              className='absolute bottom-52 translate-x-1/2 right-1/2'
            >
              {/* <Link href={"https://mabacup-its.com/oprec-ambassador"}>
                <button className=' oprec-button flex items-center justify-center w-full h-12 mx-auto text-sm font-secondary font-medium rounded-lg px-6 py-2'>
                  Open Recruitment Ambassador
                </button>
              </Link> */}
            </li>
            <li
              onClick={toggleShowNav}
              className='absolute bottom-32 right-1/2 translate-x-1/2 mt-4 flex gap-8 justify-center items-center'
            >
              <Link href={"#"}>
                <a>
                  <img src='/instagram.svg' alt='' />
                </a>
              </Link>
              <Link href={"#"}>
                <a>
                  <img src='/youtube.svg' alt='' />
                </a>
              </Link>

              <Link href={"#"}>
                <a>
                  <img src='/tiktok.svg' alt='' />
                </a>
              </Link>
              <Link href={"#"}>
                <a>
                  <img src='/line.svg' alt='' />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
