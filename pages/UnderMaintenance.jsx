import { AiOutlineInstagram } from "react-icons/ai";
import { FaLine, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

export default function UnderMaintenance() {
  return (
    <>
      <Head>
        <title>Under Maintenance</title>
        <meta name='description' content='Maba Cup merupakan event tahunan yang diselenggarakan oleh Departemen Event Lembaga Minat Bakat ITS. Memiliki motto “Dari maba, oleh maba, dan untuk maba”, event ini terdiri dari pelatihan manajerial dan berbagai perlombaan.' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="NwW-YP_XvE9FoX0hDVTkQescB9ExbBnbA5wjDySEu3U" />
        <link rel='icon' href='/mabacup-logo.svg' />
      </Head>
      <section className="bg-[url('/UnderMaintenance.png')] w-screen h-screen bg-cover bg-center">
        <div className='pt-20 lg:p-16 xl:p-32 flex flex-col items-center lg:items-start justify-center'>
          <h1 className='text-2xl lg:text-5xl font-bold text-white font-secondary'>
            We&apos;ll be back soon !
          </h1>
          <h2 className='lg:text-2xl font-normal text-white pt-4 w-4/5 text-justify lg:w-1/2 font-secondary'>
            We&apos;re sorry to say that this page currently under maintenance
            to improve your experience. Don&apos;t worry we will go back as soon
            as possible.
          </h2>

          <Link target='_blank' href={"/"}>
            <p className='cursor-pointer bg-white px-12 py-3 mt-16 lg:mt-16 font-secondary font-bold rounded-full hover:bg-[#27378E] hover:text-white ease-out duration-150 hover:ease-in hover:duration-150 hover:scale-105'>
              Return to home
            </p>
          </Link>
          <p className='text-white pt-10 font-light lg:text-xl font-secondary'>
            Urgent needs? feel free to contact us.
          </p>
          {/* Instagram */}
          <div className='flex gap-2 items-center mt-2 font-secondary'>
            <FaInstagram className='text-white' size={28} />
            <p className='text-white'>@mabacupits</p>
          </div>
          {/* Line */}
          <div className='flex gap-2 mt-2 items-center font-secondary'>
            <FaLine className='text-white' size={28} />
            <p className='text-white font-base '>@899jpfck</p>
          </div>
        </div>
      </section>
    </>
  );
}
