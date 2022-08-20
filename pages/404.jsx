import Link from "next/link";
import Head from "next/head";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name='description' content='Maba Cup merupakan event tahunan yang diselenggarakan oleh Departemen Event Lembaga Minat Bakat ITS. Memiliki motto “Dari maba, oleh maba, dan untuk maba”, event ini terdiri dari pelatihan manajerial dan berbagai perlombaan.' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="NwW-YP_XvE9FoX0hDVTkQescB9ExbBnbA5wjDySEu3U" />
        <link rel='icon' href='/mabacup-logo.svg' />
      </Head>
      <div className="bg-[url('/404.png')] w-screen h-screen bg-cover bg-center">
        <div className='flex flex-col justify-center items-center text-center text-white gap-y-6 pt-32 xl:pt-52'>
          <h1 className='text-5xl md:text-8xl font-primary font-bold'>404</h1>
          <h2 className='text-xl md:text-4xl font-secondary font-medium'>
            Whoops! Looks like you&apos;re diving too deep!
          </h2>
          <p className='md:text-2xl font-secondary font-thin'>
            Don&apos;t worry we will provide it as soon as possible
          </p>
        </div>

        <div className='w-fit mx-auto'>
          <Link href={"/"} className='flex justify-center items-center '>
            <button className='bg-white px-12 py-3 mt-16 md:mt-32 font-secondary font-bold rounded-full hover:bg-[#27378E] hover:text-white'>
              Return to home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
