import Header from "../components/Header";
import { Parallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import { Info } from "@mui/icons-material";
import Loading from "./Loading";
import Layout from "../components/Layout";
import Link from "next/link";

export default function PreEvent() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  if (!domLoaded) return <Loading />;

  return (
    <>
      <Header title='Pre Event | Mabacup ITS 2022' />
      <Layout showNav={showNav} setShowNav={setShowNav}>
        <main className={`overflow-x-hidden pre-event`}>
          {/* Hero */}
          <div>
            <section className='w-full min-h-screen overflow-hidden relative flex justify-center bg-[#b5dae2]'>
              <div className='text-center font-primary text-white z-40 mt-[40vh] lg:mt-56 xl:mt-64 '>
                <h2 className='text-2xl md:text-4xl lg:text-5xl'>Pre Event</h2>
                <h1 className='text-4xl md:text-6xl lg:text-8xl'>
                  Maba Cup 2022
                </h1>
              </div>

              <img
                className='absolute bottom-0 w-full hidden sm:block'
                src='/pre-event/grup.png'
                alt=''
              />
              <img
                className='absolute bottom-0 w-full block sm:hidden'
                src='/pre-event/hero-mobile.png'
                alt=''
              />
            </section>
            <section className='w-full min-h-[50vh] bg-[#01293E] flex flex-col justify-center'>
              <div className='flex flex-col justify-evenly items-center'>
                <p className='font-secondary text-xs sm:text-lg lg:text-2xl leading-7 sm:leading-8 text-white font-medium text-center w-3/4 md:w-1/2'>
                  &ldquo;&nbsp;An adventurer like you has so much potential
                  lying within yourself, waiting for you to explore it. MABACUP
                  2022 opened a way for you to discover the “fullest” version of
                  yourself. Now IS THE TIME TO THRIVE YOUR POTENTIAL IN
                  PRE-EVENT MABACUP 2022!&nbsp;&rdquo;
                </p>
              </div>
            </section>
            {/* Tagline pre event 2 */}
            <section className=''>
              <img
                src='pre-event/tebing.png'
                alt=''
                className='hidden md:block w-full'
              />
              <img
                src='pre-event/tebing-mobile.png'
                alt=''
                className='block md:hidden w-full'
              />
              <div className='min-h-[50vh] flex justify-center items-center mt-4'>
                <div className='flex justify-center items-center about-mabacup w-11/12 sm:w-10/12 h-max pb-4 sm:pb-0 sm:h-80 lg:h-72 mx-auto rounded-xl px-8 sm:px-0 sm:rounded-3xl relative z-[1]'>
                  <p className='p-4 text-center text-white font-medium font-secondary text-sm sm:text-lg lg:text-2xl leading-6 sm:leading-8 w-11/12 md:w-3/4'>
                    Pre-event merupakan rangkaian event pertama dari keseluruhan
                    MABACUP 2022. Pada event ini, seluruh Mahasiswa Baru
                    memiliki kesempatan untuk berpartisipasi di lomba “DESAIN
                    MASKOT MABACUP 2022”. Orisinalitas, Estetika, Relevansi, dan
                    konsep akan menjadi senjata utama kalian pada perlombaan
                    ini!{" "}
                  </p>
                </div>
              </div>
            </section>
            {/* Timeline */}
            <section className='w-full min-h-[36rem] md:min-h-[40rem] lg:min-h-[24rem] 2xl:min-h-[60vh]'>
              <div className='mt-20 timeline-staff w-[90%] sm:w-10/12 lg:w-11/12 h-fit mx-auto rounded-xl pb-16'>
                <div className='px-4 sm:px-8 py-4 bg-white w-fit font-secondary text-[#1D5780] text-sm sm:text-3xl font-semibold rounded-2xl lg:translate-x-8 mx-auto lg:mx-0 -translate-y-8'>
                  Timeline Pre Event
                </div>
                <div className='w-full sm:h-96 lg:h-48 flex justify-center items-center relative z-[1]'>
                  <div className='bg-white mx-auto h-96 lg:h-1  w-[2px] sm:w-1 lg:w-10/12 xl:w-4/5 flex flex-col lg:flex-row justify-between items-center rounded-lg'>
                    <div className='flex items-center justify-center md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:-translate-x-1 w-16'>
                      <p className='hidden lg:block font-secondary text-lg font-semibold absolute text-white -translate-y-[200%] w-44 text-center'>
                        19 September 2022
                      </p>
                      <img
                        className='relative w-8 md:w-16 lg:w-16 xl:w-20'
                        src='/page-staff/mutiara.png'
                        alt=''
                      />

                      <p className='hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[200%] w-48 text-center'>
                        Open Registration
                      </p>
                      <p className='block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[110%] w-max'>
                        19 September 2022
                      </p>
                      <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[70%] sm:translate-x-[100%]  w-max'>
                        Open Registration
                      </p>
                    </div>
                    <div className='flex items-center justify-center md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:-translate-x-1 w-16'>
                      <p className='hidden lg:block font-secondary text-lg font-semibold absolute text-white -translate-y-[200%] w-44 text-center'>
                        30 September 2022
                      </p>
                      <img
                        className='relative w-8 md:w-16 lg:w-16 xl:w-20'
                        src='/page-staff/mutiara.png'
                        alt=''
                      />

                      <p className='hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[200%] w-48 text-center'>
                        Close Registration
                      </p>
                      <p className='block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[110%] w-max'>
                        30 September 2022
                      </p>
                      <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[70%] sm:translate-x-[100%]  w-max'>
                        Close Registration
                      </p>
                    </div>
                    <div className='flex items-center justify-center md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:-translate-x-1 w-16'>
                      <p className='hidden lg:block font-secondary text-lg font-semibold absolute text-white -translate-y-[200%] w-44 text-center'>
                        1 Oktober 2022
                      </p>
                      <img
                        className='relative w-8 md:w-16 lg:w-16 xl:w-20'
                        src='/page-staff/mutiara.png'
                        alt=''
                      />

                      <p className='hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[200%] w-48 text-center'>
                        Pendistribusian Karya
                        <br />
                      </p>
                      <p className='block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[110%] w-max'>
                        1 Oktober 2022
                      </p>
                      <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[70%] sm:translate-x-[100%]  w-max'>
                        Pendistribusian
                        <br />
                        Karya
                      </p>
                    </div>
                    <div className='flex items-center justify-center md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:-translate-x-1 w-16'>
                      <p className='hidden lg:block font-secondary text-lg font-semibold absolute text-white -translate-y-[200%] w-44 text-center'>
                        5 Oktober 2022
                      </p>
                      <img
                        className='relative w-8 md:w-16 lg:w-16 xl:w-20'
                        src='/page-staff/mutiara.png'
                        alt=''
                      />

                      <p className='hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[200%] w-48 text-center'>
                        Penyetoran Nilai
                      </p>
                      <p className='block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[110%] w-max'>
                        5 Oktober 2022
                      </p>
                      <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[70%] sm:translate-x-[100%]  w-max'>
                        Penyetoran Nilai
                      </p>
                    </div>
                    <div className='flex items-center justify-center translate-y-1 md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:translate-x-1 w-16'>
                      <p className='hidden lg:block font-secondary text-lg font-semibold absolute text-white -translate-y-[200%] w-44 text-center'>
                        14 Oktober 2022
                      </p>
                      <img
                        className='relative w-8 md:w-16 lg:w-16 xl:w-20'
                        src='/page-staff/mutiara.png'
                        alt=''
                      />

                      <p className='hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[120%] w-48 text-center'>
                        Rilis Maskot di Instagram
                      </p>
                      <p className='block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[110%] w-max'>
                        14 Oktober 2022
                      </p>
                      <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[80%] sm:translate-x-[100%]  w-max'>
                        Rilis Maskot
                        <br />
                        di Instagram
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Registration */}
            <section className='mb-4'>
              <div className='min-h-[50vh] lg:mt-4 xl:mt-8 2xl:mt-8 '>
                <div className='flex flex-col justify-center about-mabacup w-11/12 sm:w-10/12 h-max pb-4 sm:pb-0 sm:h-fit mx-auto rounded-xl px-8 sm:px-0 sm:rounded-3xl relative z-[1]'>
                  <p className='text-center text-white font-semibold font-secondary text-lg sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-7 sm:leading-8 w-full mt-12'>
                    Ikuti Lomba Maskot dan Menangkan Hadiahnya!
                  </p>
                  <div className='text-white font-secondary w-1/2 flex flex-col items-center justify-start pt-10 ml-8 lg:ml-0'>
                    <p className='text-sm md:text-lg'>
                      <span className='text-base md:text-xl font-semibold relative z-[10]'>
                        Persyaratan :
                      </span>{" "}
                      <br />
                      1. Follow Instagram @mabacup2022 <br />
                      2. Follow TikTok @mabacup2022 <br />
                      3. Bukti FRS/KRSM
                    </p>
                  </div>

                  <div className='mt-8 md:mt-3 xl:mt-0 pb-8 flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-4'>
                    <Link href={"https://intip.in/PreEventMABACUP22"}>
                      <a className='button-form w-max inline-block px-3 sm:px-5 py-2 sm:py-3  bg-white hover:bg-[#2C7994] text-white hover:text-white text-sm sm:text-lg rounded-lg font-medium'>
                        Link Pengumpulan Karya
                      </a>
                    </Link>
                    <Link href={"https://intip.in/GuidebookPreEventMC22"}>
                      <a className='mr-0 lg:mr-48 w-max inline-block px-3 sm:px-5 py-2 sm:py-3 border-2 border-solid border-white bg-transparent hover:bg-white text-white hover:text-[#131E5A] text-sm sm:text-lg rounded-lg font-medium'>
                        Unduh Guidebook
                      </a>
                    </Link>
                  </div>
                  <img
                    className='absolute bottom-0 left-0 w-28 md:w-32 lg:w-40 xl:w-48 z-[1]'
                    src='/pre-event/bottom.png'
                    alt=''
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}
