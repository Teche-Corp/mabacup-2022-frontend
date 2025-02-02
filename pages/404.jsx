import Link from "next/link";
import Header from "../components/Header";

export default function Error404() {
  return (
    <>
      <Header title='404 | Mabacup ITS 2022' />

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
