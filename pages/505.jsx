import Header from "../components/Header";

export default function Error505() {
  return (
    <>
      <Header title="500 | Mabacup ITS 2022" />

      <div className="bg-[url('/505.png')] h-screen w-screen bg-cover bg-center">
        <div className="flex flex-col justify-center items-center text-center text-white gap-y-6 pt-52 xl:pt-72">
          <h1 className="text-5xl md:text-8xl font-primary font-bold">500</h1>
          <h2 className="text-xl md:text-4xl font-secondary font-medium">Internal Service Error</h2>
        </div>
      </div>
    </>
  )
}
