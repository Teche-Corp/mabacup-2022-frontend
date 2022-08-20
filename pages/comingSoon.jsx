import Link from "next/link"
import { FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";
import {BsLine} from "react-icons/bs";
import Head from "next/head";

export default function comingSoon() {
  return (
    <>
      <Head>
        <title>Coming Soon | Mabacup 2022</title>
        <meta name='description' content='Maba Cup merupakan event tahunan yang diselenggarakan oleh Departemen Event Lembaga Minat Bakat ITS. Memiliki motto “Dari maba, oleh maba, dan untuk maba”, event ini terdiri dari pelatihan manajerial dan berbagai perlombaan.' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="NwW-YP_XvE9FoX0hDVTkQescB9ExbBnbA5wjDySEu3U" />
        <link rel='icon' href='/mabacup-logo.svg' />
      </Head>
      <div className="bg-[url('/comingSoon.png')] bg-cover bg-center h-screen w-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-center font-primary font-bold text-white text-8xl">Coming Soon</h1>
          <Link href='/'>
            <button className="dive-button rounded-full px-6 py-3 hover:scale-105 text-white font-secondary font-medium mt-10">Return to Home</button>
          </Link>
          <p className="text-white font-secondary pt-40 relative">Stay tune on :</p>
          <div className="flex mt-10 w-2/5 justify-between">
            <div className="flex gap-2 items-center">
              <FaInstagram className="text-white" size={28}/>
              <p className="text-white font-secondary">@mabacupits</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaTiktok className="text-white" size={28}/>
              <p className="text-white font-secondary">mabacupits</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaYoutube className="text-white" size={28}/>
              <p className="text-white font-secondary">MABACUP ITS</p>
            </div>
            <div className="flex gap-2 items-center">
              <BsLine className="text-white" size={28}/>
              <p className="text-white font-secondary">@899jpfck</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}