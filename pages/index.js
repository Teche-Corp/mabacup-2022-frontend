import Head from "next/head";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Mabacup 2022</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/mabacup-logo.svg' />
      </Head>

      <main className='content overflow-x-hidden'>
        <Navbar />
        <section id='hero' className='w-full min-h-screen hero overflow-hidden'>
          <div className="w-full h-screen relative bg-[url('/images/hero/light.png')] bg-cover">
            <Parallax className='ml-24 pt-72 2xl:pt-48 w-fit h-fit' speed={20}>
              <div className=''>
                <h1 className='font-secondary text-white text-3xl tracking-widest'>
                  MABA CUP 2022
                </h1>
                <h1 className='font-primary text-white text-7xl mt-3 mb-8'>
                  The Adventure Seeker
                </h1>
                <div className='inline-block hover:scale-105 transition duration-200 ease-in-out'>
                  <a
                    href='#about'
                    className='dive-button font-secondary font-medium text-base text-white rounded-[2.5rem] px-6 py-3 cursor-pointer '
                  >
                    Dive Deeper
                  </a>
                </div>
              </div>
            </Parallax>

            {/* terumbu image */}
            <Parallax
              className='absolute left-0 -bottom-6 w-64'
              speed={-10}
              scale={[0.9, 1.2]}
            >
              <img
                className='w-64'
                src='/images/hero/terumbu-kiri.png'
                alt='terumbu kiri'
              />
            </Parallax>

            {/* seaweed image */}
            <Parallax
              className='w-36 absolute bottom-10 right-[19rem] z-[1]'
              speed={-10}
              scale={[0.9, 1.2]}
            >
              <img className='' src='/images/hero/seaweed.png' alt='seaweed' />
            </Parallax>

            {/* building primary image */}
            <Parallax
              className='absolute w-[34rem] -right-40 -bottom-[5rem] z-[1]'
              speed={-15}
              scale={[0.9, 1.2]}
            >
              <img
                className=''
                src='/images/hero/building-primary.png'
                alt='building primary'
              />
            </Parallax>

            {/* building secondary image */}
            <Parallax
              className='absolute w-[34rem] -bottom-20 right-52 z-[0]'
              speed={-15}
              scale={[0.9, 1.2]}
            >
              <img
                className=''
                src='/images/hero/building-secondary.png'
                alt='building secondary'
              />
            </Parallax>

            {/* ikan primary image */}
            <Parallax
              className='w-72 absolute top-40 2xl:top-32 right-44 2xl:right-52 z-10'
              translateX={["0px", "100px"]}
            >
              <img
                className=''
                src='/images/hero/ikan-primary.svg'
                alt='ikan primary'
              />
            </Parallax>

            {/* ikan secondary image */}
            <Parallax
              className='w-44 absolute bottom-36 left-80'
              translateX={["0px", "100px"]}
            >
              <img
                className=''
                src='/images/hero/ikan-secondary.svg'
                alt='ikan secondary'
              />
            </Parallax>

            {/* sand image */}

            <img
              className='w-full absolute bottom-0 z-[2]'
              src='/images/hero/sand.png'
              alt='sand'
            />
          </div>
        </section>
        <section id='about' className='w-full min-h-[calc(100vh-50px)] pt-48'>
          <div className='about-mabacup w-3/4 h-72 mx-auto rounded-3xl relative z-[1]'>
            <img
              className='w-28 absolute -top-8 -left-8 -rotate-12'
              src='/images/about/mutiara.png'
              alt='mutiara'
            />
            <h1 className='font-primary text-4xl text-[#6FA1CD] bg-white w-fit px-8 py-2 rounded-full mx-auto text-center -translate-y-6'>
              About Maba Cup
            </h1>
            <div className='px-20 mt-12'>
              <p className='font-secondary text-xl leading-8 text-white font-semibold text-center'>
                Maba Cup merupakan event tahunan yang diselenggarakan oleh
                Departemen Event Lembaga Minat & Bakat ITS. Memiliki motto “Dari
                maba, oleh maba, dan untuk maba”, event ini terdiri dari
                pelatihan manajerial dan berbagai perlombaan.{" "}
              </p>
            </div>
            <img
              className='w-28 absolute -bottom-8 -right-8'
              src='/images/about/rumput-laut.png'
              alt='rumput laut'
            />
          </div>

          <Parallax
            className='relative z-0'
            translateX={["0px", "100px"]}
            speed={15}
          >
            <img
              className='w-48'
              src='/images/about/fish-bottom-right.svg'
              alt='fish-left'
            />
          </Parallax>
        </section>
        <section className='w-full min-h-[calc(100vh-150px)] relative'>
          <div className='w-10/12 mx-auto pt-24 '>
            <h1 className='font-primary text-center text-5xl text-white'>
              Timeline Maba Cup 2022
            </h1>
            <div className='w-full mt-12 h-72 flex justify-center items-center'>
              <div className='bg-white mx-auto h-1 md:w-10/12 xl:w-3/4 flex justify-between rounded-lg'>
                <div className='h-5 w-5 bg-[#FFA4B3] rounded-full -translate-y-[40%] -translate-x-1 hover:scale-110 transition duration-300 border-2 border-[#3E63AB] border-solid hover:border-none'>
                  <p className='font-secondary text-lg font-semibold absolute text-white -top-12 w-36 -translate-x-[40%] text-center'>
                    Agustus 2022
                  </p>
                  <p className='font-secondary text-lg font-medium absolute text-white -bottom-20 w-[10rem] -translate-x-[42%] text-center'>
                    Open Recruitment Staff
                  </p>
                </div>
                <div className='h-5 w-5 bg-[#FFA4B3] rounded-full -translate-y-[40%] hover:scale-110 transition duration-300 border-2 border-[#3E63AB] border-solid hover:border-none'>
                  <p className='font-secondary text-lg font-semibold absolute text-white -top-12 w-36 -translate-x-[40%] text-center'>
                    September 2022
                  </p>
                  <p className='font-secondary text-lg font-medium absolute text-white -bottom-20 w-48 -translate-x-[42%] text-center'>
                    Open Recruitment Brand Ambassador
                  </p>
                </div>
                <div className='h-5 w-5 bg-[#FFA4B3] rounded-full -translate-y-[40%] hover:scale-110 transition duration-300 border-2 border-[#3E63AB] border-solid hover:border-none'>
                  <p className='font-secondary text-lg font-semibold absolute text-white -top-12 w-36 -translate-x-[40%] text-center'>
                    September 2022
                  </p>
                  <p className='font-secondary text-lg font-medium absolute text-white -bottom-20 w-32 -translate-x-[40%] text-center'>
                    Pre Event Maba Cup
                  </p>
                </div>
                <div className='h-5 w-5 bg-[#FFA4B3] rounded-full -translate-y-[40%] hover:scale-110 transition duration-300 border-2 border-[#3E63AB] border-solid hover:border-none'>
                  <p className='font-secondary text-lg font-semibold absolute text-white -top-12 w-36 -translate-x-[40%] text-center'>
                    September 2022
                  </p>
                  <p className='font-secondary text-lg font-medium absolute text-white -bottom-20 w-32 -translate-x-[40%] text-center'>
                    Main Event Maba Cup
                  </p>
                </div>
                <div className='h-5 w-5 bg-[#FFA4B3] rounded-full -translate-y-[40%] hover:scale-110 transition duration-300 border-2 border-[#3E63AB] border-solid hover:border-none'>
                  <p className='font-secondary text-lg font-semibold absolute text-white -top-12 w-36 -translate-x-[40%] text-center'>
                    Nopember 2022
                  </p>
                  <p className='font-secondary text-lg font-medium absolute text-white -bottom-20 w-32 -translate-x-[40%] text-center'>
                    Closing
                    <br />
                    Maba Cup
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Parallax
            className='absolute bottom-12 right-0'
            translateX={["0px", "-100px"]}
            speed={-15}
          >
            <img
              className='w-48 rotate-180 relative z-0'
              src='/images/about/fish-bottom-left.svg'
              alt='fish-right'
            />
          </Parallax>
        </section>
        <section className='w-full min-h-[calc(100vh-100px)]'>
          <div className='w-10/12 pt-20 flex gap-8 justify-between items-center mx-auto relative z-10'>
            <div className='event-card w-[24.7rem] h-[21.5rem] rounded-3xl relative'>
              <div className='w-full p-6'>
                <h1 className='font-primary text-white text-[2rem]'>
                  Pre Event
                </h1>
                <p className='font-secondary text-white text-lg font-normal'>
                  Egestas viverra vel viverra amet amet tempor nunc quis
                  ultricies. Nisl hendrerit sed aliquam interdum vel tortor,
                  eget bibendum. Id diam mattis eget nisl pretium. Vitae ut
                  euismod facilisi a fusce. Amet a libero neque, malesuada.
                  Ultricies feugiat.
                </p>
              </div>

              <Link href={"#"}>
                <a className='absolute bottom-0 font-secondary font-medium text-lg w-full h-16 bg-white text-[#2C4295] rounded-b-3xl flex justify-center items-center'>
                  Lihat Detail
                </a>
              </Link>
            </div>
            <div className='event-card w-[24.7rem] h-[21.5rem] rounded-3xl relative'>
              <div className='w-full p-6'>
                <h1 className='font-primary text-white text-[2rem]'>
                  Main Event
                </h1>
                <p className='font-secondary text-white text-lg font-normal'>
                  Egestas viverra vel viverra amet amet tempor nunc quis
                  ultricies. Nisl hendrerit sed aliquam interdum vel tortor,
                  eget bibendum. Id diam mattis eget nisl pretium. Vitae ut
                  euismod facilisi a fusce. Amet a libero neque, malesuada.
                  Ultricies feugiat.
                </p>
              </div>

              <Link href={"#"}>
                <a className='absolute bottom-0 font-secondary font-medium text-lg w-full h-16 bg-white text-[#2C4295] rounded-b-3xl flex justify-center items-center'>
                  Lihat Detail
                </a>
              </Link>
            </div>
            <div className='event-card w-[24.7rem] h-[21.5rem] rounded-3xl relative'>
              <div className='w-full p-6'>
                <h1 className='font-primary text-white text-[2rem]'>Closing</h1>
                <p className='font-secondary text-white text-lg font-normal'>
                  Egestas viverra vel viverra amet amet tempor nunc quis
                  ultricies. Nisl hendrerit sed aliquam interdum vel tortor,
                  eget bibendum. Id diam mattis eget nisl pretium. Vitae ut
                  euismod facilisi a fusce. Amet a libero neque, malesuada.
                  Ultricies feugiat.
                </p>
              </div>

              <Link href={"#"}>
                <a className='absolute bottom-0 font-secondary font-medium text-lg w-full h-16 bg-white text-[#2C4295] rounded-b-3xl flex justify-center items-center'>
                  Lihat Detail
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className='w-full min-h-[calc(100vh-100px)]'>
          <div className='oprec w-4/5 h-[22rem] bg-red-200 mx-auto mt-8 rounded-2xl p-10 relative'>
            <div className='w-3/5 '>
              <h1 className='font-secondary text-white text-[2.5rem] font-semibold tracking-[-2.2%] leading-[3.2rem]'>
                Mari Bergabung Menjadi Bagian dari Staff Maba Cup ITS 2022
              </h1>
              <p className='text-white font-secondary text-[1.3rem] leading-8 tracking-[-0.06%] w-1/2 mt-3'>
                Gabung sekarang menjadi staff dan dapatkan banyak Benefitnya!
              </p>

              <Link href={"#"}>
                <a className='mt-8 inline-block px-5 py-3 border-2 border-solid border-white bg-white text-[#2C7994] rounded-lg font-medium'>
                  Daftar Sekarang
                </a>
              </Link>
              <Link href={"#"}>
                <a className='ml-4 mt-8 inline-block px-5 py-3 border-2 border-solid border-white text-white rounded-lg font-medium'>
                  Unduh Guidebook
                </a>
              </Link>
            </div>
            <img
              className='absolute bottom-0 right-2 w-[31rem]'
              src='/images/oprec/building.png'
              alt='building oprec'
            />
            <img
              className='absolute bottom-12 right-[42%] w-40'
              src='/images/oprec/ikan-primary.png'
              alt='ikan primary'
            />

            <img
              className='absolute right-16 top-0 w-72'
              src='/images/oprec/ikan-secondary.png'
              alt='ikan secondary'
            />
          </div>
        </section>
        <div className='relative'>
          <img
            className='absolute w-48 z-[3] -top-16 right-[50%] translate-x-1/2'
            src='/images/retrospeksi/mutiara.png'
            alt='mutiara'
          />
          <img
            className='w-full relative z-[1]'
            src='/images/retrospeksi/rounded-new.png'
            alt='rounded'
          />
          <img
            className='absolute w-64 right-0 -top-24 z-0'
            src='/images/retrospeksi/terumbu-kanan.png'
            alt='terumbu kanan'
          />
          <img
            className='absolute w-56 left-0 -top-20 z-0'
            src='/images/retrospeksi/terumbu-kiri.png'
            alt='terumbu kiri'
          />
        </div>
        <section className='retro w-full min-h-[calc(100vh-350px)]'></section>
      </main>
    </div>
  );
}
