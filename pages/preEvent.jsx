import Header from "../components/Header";
import {Parallax} from "react-scroll-parallax";
import { useState, useEffect } from "react";
import { Info } from "@mui/icons-material";
import Loading from "./Loading";
import Layout from "../components/Layout";

export default function preEvent() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  })
  if(!domLoaded) return <Loading/>;

  return (
    <>
      <Header title="Pre Event | Mabacup ITS 2022"/>
      <Layout showNav={showNav} setShowNav={setShowNav}>
        <main className={`overflow-x-hidden pre-event`}>
          {/* Hero */}
          <div>
            <section className="w-full min-h-screen overflow-hidden relative flex items-center justify-center bg-[#b5dae2]">
              <img 
                src="/pre-event/hero.png" 
                alt=""
                className="absolute w-full bottom-0"
              />
              <div className="text-center font-primary text-4xl md:text-8xl text-white z-40">
                <h2>Pre Event</h2>
                <h1>Maba Cup 2022</h1>    
              </div>
            </section>
{/*Tagline pre event  */}
            <section className="w-full min-h-[50vh] bg-[#01293E] flex flex-col justify-center">
              <div className="flex flex-col justify-evenly items-center">
                <p className="font-secondary text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-white font-medium text-center w-1/2">
                  &apos;An adventurer like you has so much potential lying within yourself, waiting for you to explore it. MABACUP 2022 opened a way for you to discover the “fullest” version of yourself. Now IS THE TIME TO THRIVE YOUR POTENTIAL  IN PRE-EVENT MABACUP 2022!&apos;
                </p>
              </div>
            </section>
{/* Tagline pre event 2 */}
            <section className="">
              <img src="pre-event/tebing.png" alt="" className="w-full" />
              <div className="min-h-[50vh] flex justify-center items-center">
                <div className="flex justify-center items-center about-mabacup w-11/12 sm:w-3/4 h-max pb-4 sm:pb-0 sm:h-80 lg:h-72 mx-auto rounded-xl px-8 sm:px-0 sm:rounded-3xl relative z-[1]">
                  <p className="text-center text-white font-medium font-secondary text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 w-3/4">Pre-event merupakan rangkaian event pertama dari keseluruhan MABACUP 2022. Pada event ini, seluruh Mahasiswa Baru memiliki kesempatan untuk berpartisipasi di lomba “DESAIN MASKOT MABACUP 2022”. Orisinalitas, Estetika, Relevansi, dan konsep akan menjadi senjata utama kalian pada perlombaan ini! </p>      
                </div>
              </div>
            </section>
{/* Timeline */}
            <section className='w-full min-h-[36rem] md:min-h-[40rem] lg:min-h-[24rem] 2xl:min-h-[60vh]'>
              <div className='mt-16 timeline-staff w-[90%] sm:w-10/12 h-fit mx-auto rounded-xl pb-16'>
                <div className='px-4 sm:px-8 py-4 bg-white w-fit font-secondary text-[#1D5780] text-sm sm:text-3xl font-semibold rounded-2xl lg:translate-x-8 mx-auto lg:mx-0 -translate-y-8'>
                  Timeline Pre Event
                </div>
                <div className='w-full sm:h-96 lg:h-48 flex justify-center items-center relative z-[1]'>
                  <div className='bg-white mx-auto h-96 lg:h-1  w-[2px] sm:w-1 lg:w-10/12 xl:w-4/5 flex flex-col lg:flex-row justify-between items-center rounded-lg'>
                    {/*  */}
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
                      <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[80%] sm:translate-x-[100%]  w-max'>
                        Open Registration
                      </p>
                    </div>
                    {/*  */}
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
                      <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[80%] sm:translate-x-[100%]  w-max'>
                        Close Registration
                      </p>
                    </div>
                    {/*  */}
                    <div className='flex items-center justify-center md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:-translate-x-1 w-16'>
                      <p className='hidden lg:block font-secondary text-lg font-semibold absolute text-white -translate-y-[200%] w-44 text-center'>
                        1 Oktober 2022
                      </p>
                      <img
                        className='relative w-8 md:w-16 lg:w-16 xl:w-20'
                        src='/page-staff/mutiara.png'
                        alt=''
                      />

                      <p className='hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[120%] w-48 text-center'>
                        Pendistribusian Karya
                        <br />
                        (Ke Juri)
                      </p>
                      <p className='block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[110%] w-max'>
                        1 Oktober 2022
                      </p>
                      <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[80%] sm:translate-x-[100%]  w-max'>
                        Pendistribusian Karya
                        <br />
                        (Ke Juri)
                      </p>
                    </div>
                    {/*  */}
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
                      <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[80%] sm:translate-x-[100%]  w-max'>
                        Penyetoran Nilai
                      </p>
                    </div>
                    {/*  */}
                    <div className='flex items-center justify-center md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:-translate-x-1 w-16'>
                      <p className='hidden lg:block font-secondary text-lg font-semibold absolute text-white -translate-y-[200%] w-44 text-center'>
                        14 Oktober 2022
                      </p>
                      <img
                        className='relative w-8 md:w-16 lg:w-16 xl:w-20'
                        src='/page-staff/mutiara.png'
                        alt=''
                      />

                      <p className='hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[120%] w-48 text-center'>
                        Rilis Maskot
                        <br />
                        di Instagram
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
            <section className="">
              <div className="min-h-[50vh]">
                <div className="flex flex-col justify-center about-mabacup w-11/12 sm:w-3/4 h-max pb-4 sm:pb-0 sm:h-80 lg:h-72 mx-auto rounded-xl px-8 sm:px-0 sm:rounded-3xl relative z-[1]">
                  <p className="text-center text-white font-medium font-secondary text-base sm:text-lg lg:text-5xl leading-7 sm:leading-8 w-full mt-20">Ikuti Lomba Maskot dan Menangkan Hadiahnya!</p>      
                  <div className="text-white font-secondary w-1/2 flex flex-col items-center justify-start pt-10">
                    <p>
                      <span className="text-xl">Persyaratan</span> <br />
                    1. Follow Instagram @mabacup2022 <br />
                    2. Follow TikTok @mabacup2022 <br />
                    3. Bukti FRS/KRSM
                    </p>
                  </div>
                  <div className="w-4/5 justify-end items-end pt-10 flex gap-10 pb-10">
                    <button>Daftar</button>
                    <button>Unduh Guidebook</button>
                  </div>            
                </div>
              </div>
            </section>
          </div>
        </main>
      </Layout>

    </>
  )
}