import Link from "next/link"

export default function comingSoon() {
  return (
    <>
      <div className="bg-[url('/comingSoon.png')] bg-cover bg-center h-screen w-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-center font-primary font-bold text-white text-8xl">Coming Soon</h1>
          <Link href='/'>
            <button className="dive-button rounded-full px-6 py-3 hover:scale-105 text-white font-secondary font-medium mt-10">Return to Home</button>
          </Link>
          <p className="text-white font-secondary pt-40">Stay tune on :</p>
        </div>
      </div>
    </>
  )
}