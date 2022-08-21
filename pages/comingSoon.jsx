import Link from "next/link"
import { FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";
import {BsLine} from "react-icons/bs";
import Head from "next/head";

export default function comingsoon1() {
  return (
    <>
    <Head>
        <title>Coming Soon | Mabacup 2022</title>
        <meta name='description' content='Maba Cup merupakan event tahunan yang diselenggarakan oleh Departemen Event Lembaga Minat Bakat ITS. Memiliki motto “Dari maba, oleh maba, dan untuk maba”, event ini terdiri dari pelatihan manajerial dan berbagai perlombaan.' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="NwW-YP_XvE9FoX0hDVTkQescB9ExbBnbA5wjDySEu3U" />
        <link rel='icon' href='/mabacup-logo.svg' />
      </Head>

      <section className="bg-[url('/comingsoon.png')] bg-cover bg-center h-screen w-screen">
        <div className="h-1/3 md:h-1/2 flex items-end justify-center">
          <h1 className="font-primary text-white font-bold text-5xl md:text-8xl">Coming Soon</h1>
        </div>
        <div className="flex justify-center">
          <Link href="/">
            <p className="dive-button inline-block text-center rounded-full px-6 py-3 hover:scale-105 text-white font-secondary font-medium mt-10 relative cursor-pointer">
              Return to Home
            </p>
          </Link>
        </div>
        <h1 className="text-center text-white font-medium pt-20 md:mt-16 font-secondary">Stay tune on :</h1>
        <div className="flex justify-center text-white pt-10">
          <div className="flex gap-4 md:gap-6 flex-col md:flex-row">
            <div className="flex gap-1 items-center">
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
      </section>
    </>
  )
}