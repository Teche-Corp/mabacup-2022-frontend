import Header from "../components/Header";
import Layout from "../components/Layout";
import Loading from "./Loading";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MainEvent() {
  const [domLoaded, setDomLoaded] = React.useState(false);
  const [showNav, setShowNav] = React.useState(false);

  React.useEffect(() => {
    setDomLoaded(true);
  }, [])
  if(!domLoaded) return <Loading />;

  return (
    <>
      <Header title="Main Event | Mabacup ITS 2022" />
      <Layout showNav={showNav} setShowNav={setShowNav}>
        {/* Hero */}
        <main className={`overflow-x-hidden`}>
          <section className="hero-main-event h-screen w-screen">
            <img
              src="/main-event/white-hero.png"
              alt=""
              className="absolute w-full h-full"
            />
            <img
              src="/main-event/karang-hero-left.png"
              alt=""
              className="absolute bottom-0"
            />
            <img
              src="/main-event/karang-hero-right.png"
              alt=""
              className="absolute top-1/2 right-0 -z-0"
            />
            <img
              src="/main-event/fish-hero-left.png"
              alt=""
              className="absolute top-1/4 left-1/4"
            />
            <img
              src="/main-event/fish-hero-right.png"
              alt=""
              className="absolute top-32 right-44"
            />
            <div className="flex flex-col justify-center items-center h-screen w-screen">
              <h2 className="text-main-event-2 font-primary text-4xl">MABA CUP 2022</h2>
              <h1 className="text-main-event text-center font-primary text-9xl">Main Event</h1>
            </div>
          </section>
          {/* End Hero */}

          {/* Content */}
          <section className="main-event h-full">
            <div className="">
              <img
                src="/main-event/fish-hero-right.png"
                alt=""
                className="absolute -translate-x-1/3 rotate"
              />
              <h1 className="text-center font-secondary text-[42px] font-semibold text-white pt-[140px]">In the spirit of seeking an advantageous journey, <br /> we challenge you to take the call!</h1>
              <p className="text-center pt-[49px] p-main-event font-secondary">MABACUP 2022 are looking for the finest freshman year student to attest their potential
              <br />
              and contribute an endless excitement. so? Are you the one we are looking for?</p>
            </div>
            <div className="flex justify-center">
              <div className="box-main-event h-[318px] w-10/12 flex justify-center items-center mt-[200px] p-main-event">
                <p className="text-center w-3/4">
                Main Event merupakan rangkaian utama dari keseluruhan MABACUP 2022, di Main Event ini, seluruh Mahasiswa Baru memiliki kesempatan untuk berpartisipasi dalam berbagai bidang
                pengembangan diri  mulai dari olahraga hingga sastra. Main event memiliki enam lomba yaitu Basket, Badminton, Mobile Legend, Essay & Poster, Band, dan Stand Up Comedy. Strategi dan eksplorasi kreatifitas menjadi kunci kemenangan, fly higher and explore your potential!
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="box-main-event w-10/12 h-[320px] mt-[242px]">
                <div className="absolute -translate-y-1/2 bg-white rounded-3xl text-[#5189C4] w-1/4 ml-10 text-center font-secondary text-[32px] px-[40x] py-[20px] font-semibold">
                  Timeline Main Event
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <div className="bg-white h-1 w-1/2 flex justify-center items-center">
                    <div className="flex justify-between w-full">
                      <div className="grid grid-rows-3 gap-y-1 -translate-x-1/2">
                        <p className="text-date text-center my-auto">15 Oktober 2022</p>
                        <img
                          src="/page-staff/mutiara.png"
                          alt=""
                          className="mx-auto w-[65px]"
                        />
                        <p className="text-center text-timeline">Open Registration</p>
                      </div>
                      <div className="grid grid-rows-3 gap-y-1">
                        <p className="text-date text-center my-auto">22 Oktober - 5 November 2022</p>
                        <img
                          src="/page-staff/mutiara.png"
                          alt=""
                          className="mx-auto w-[65px]"
                        />
                        <p className="text-center my-auto text-timeline">
                          Submit Karya
                          <br />
                          (Essay & Poster dan Stand Up)
                        </p>
                      </div>
                      <div className="grid grid-rows-3 gap-y-1 translate-x-1/2">
                        <p className="text-date text-center my-auto">27 November 2022</p>
                        <img
                          src="/page-staff/mutiara.png"
                          alt=""
                          className="mx-auto w-[65px]"
                        />
                        <p className="text-center text-timeline">Close Registration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-[200px]">
              <img
                src="/main-event/karang-left.png"
                alt=""
                className="absolute -translate-y-1/2 z-10"
              />
              <img
                src="/main-event/karang-right.png"
                alt=""
                className="absolute -translate-y-1/2 z-10 right-0"
              />
              <div className="flex justify-center items-center gap-x-16 pb-[140px]">
                <div className="h-1 bg-white w-[500px]"></div>
                <p className="text-main-event-3">Cabang Lomba</p>
                <div className="h-1 bg-white w-[500px]"></div>
              </div>

              <div className="w-4/5 mx-auto">
                <div className="flex justify-evenly flex-wrap gap-32 py-24">
                  <Link href={"#"}>
                    <div className="box-lomba flex flex-col justify-center items-center cursor-pointer">
                      <img
                        src="/main-event/basket.png" alt=""
                      />
                      <p className="text-3xl font-secondary text-white pt-5">Basket</p>
                    </div>
                  </Link>
                  <Link href={"#"}>
                    <div className="box-lomba flex flex-col justify-center items-center cursor-pointer">
                      <img
                        src="/main-event/badminton.png" alt=""
                      />
                      <p className="text-3xl font-secondary text-white pt-5">Badminton</p>
                    </div>
                  </Link>
                  <Link href={"#"}>
                    <div className="box-lomba flex flex-col justify-center items-center cursor-pointer">
                      <img
                        src="/main-event/game.png" alt=""
                      />
                      <p className="text-3xl font-secondary text-white pt-5">Mobile Legend</p>
                    </div>
                  </Link>
                  <Link href={"#"}>
                    <div className="box-lomba flex flex-col justify-center items-center cursor-pointer">
                      <img
                        src="/main-event/essay.png" alt=""
                      />
                      <p className="text-3xl font-secondary text-white pt-5">Essay & Poster</p>
                    </div>
                  </Link>
                  <Link href={"#"}>
                    <div className="box-lomba flex flex-col justify-center items-center cursor-pointer">
                      <img
                        src="/main-event/band.png" alt=""
                      />
                      <p className="text-3xl font-secondary text-white pt-5">Band</p>
                    </div>
                  </Link>
                  <Link href={"#"}>
                    <div className="box-lomba flex flex-col justify-center items-center cursor-pointer">
                      <img
                        src="/main-event/standup.png" alt=""
                      />
                      <p className="text-3xl font-secondary text-white pt-5">Stand Up</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}