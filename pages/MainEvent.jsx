import Header from "../components/Header";
import Layout from "../components/Layout";
import Loading from "./Loading";
import React from "react";
import Link from "next/link";

export default function MainEvent() {
  const [domLoaded, setDomLoaded] = React.useState(false);
  const [showNav, setShowNav] = React.useState(false);

  React.useEffect(() => {
    setDomLoaded(true);
  }, []);
  if (!domLoaded) return <Loading />;

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
              className="absolute bottom-0 w-24 md:w-fit"
            />
            <img
              src="/main-event/karang-hero-right.png"
              alt=""
              className="absolute top-3/4 md:top-1/2 right-0 -z-0 w-20 md:w-fit"
            />
            <img
              src="/main-event/fish-hero-left.png"
              alt=""
              className="absolute top-1/4 left-1/4"
            />
            <img
              src="/main-event/fish-hero-right.png"
              alt=""
              className="hidden lg:block absolute top-32 right-44"
            />
            <div className="flex flex-col justify-center items-center h-screen w-screen">
              <h2 className="text-main-event-2 font-primary md:text-4xl text-2xl">
                MABA CUP 2022
              </h2>
              <h1 className="text-main-event text-center font-primary md:text-9xl text-5xl">
                Main Event
              </h1>
            </div>
          </section>
          {/* End Hero */}

          {/* Content */}
          <section className="main-event h-full">
            <div className="">
              <img
                src="/main-event/fish-hero-right.png"
                alt=""
                className="hidden lg:block absolute -translate-x-1/3 rotate w-60"
              />
              <h1 className="text-center font-secondary md:text-[42px] font-semibold text-white md:pt-[140px] pt-[50px] mx-auto w-11/12">
                In the spirit of seeking an advantageous journey, we challenge
                you to take the call!
              </h1>
              <p className="text-center pt-[49px] md:p-main-event text-white mx-auto w-2/3 font-secondary">
                MABACUP 2022 are looking for the finest freshman year student to
                attest their potential and contribute an endless excitement. so?
                Are you the one we are looking for?
              </p>
            </div>
            <div className="flex justify-center">
              <div className="box-main-event py-10 md:h-[318px] w-10/12 flex justify-center items-center mt-[50px] md:mt-[200px] md:p-main-event font-secondary">
                <p className="text-justify text-white w-3/4">
                  Main Event merupakan rangkaian utama dari keseluruhan MABACUP
                  2022, di Main Event ini, seluruh Mahasiswa Baru memiliki
                  kesempatan untuk berpartisipasi dalam berbagai bidang
                  pengembangan diri mulai dari olahraga hingga sastra. Main
                  event memiliki enam lomba yaitu Basket, Badminton, Mobile
                  Legend, Essay & Poster, Band, dan Stand Up Comedy. Strategi
                  dan eksplorasi kreatifitas menjadi kunci kemenangan, fly
                  higher and explore your potential!
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="box-main-event w-11/12 lg:w-10/12 md:h-[350px] lg:h-[320px] mt-[100px] md:mt-[242px]">
                <div className="md:absolute -translate-y-1/2 bg-white rounded-lg md:rounded-3xl text-[#5189C4] px-2 md:px-5 md:ml-10 text-center font-secondary text-[20px] md:text-[32px] py-[10px] lg:py-[20px] font-semibold">
                  Timeline Main Event
                </div>
                <div className="md:flex hidden w-full h-full justify-center items-center">
                  <div className="bg-white h-1 md:w-3/4 lg:w-1/2 flex justify-center items-center">
                    <div className="flex justify-between w-full">
                      <div className="grid grid-rows-3 lg:gap-y-1 -translate-x-1/2">
                        <p className="text-date text-center my-auto">
                          15 Oktober 2022
                        </p>
                        <img
                          src="/page-staff/mutiara.png"
                          alt=""
                          className="mx-auto w-[65px] my-auto"
                        />
                        <p className="text-center text-timeline">
                          Open Registration
                        </p>
                      </div>
                      <div className="grid grid-rows-3 gap-y-1">
                        <p className="text-date text-center my-auto">
                          22 Oktober - 5 November 2022
                        </p>
                        <img
                          src="/page-staff/mutiara.png"
                          alt=""
                          className="mx-auto w-[65px] my-auto"
                        />
                        <p className="text-center my-auto text-timeline">
                          Submit Karya
                          <br />
                          (Essay & Poster dan Stand Up)
                        </p>
                      </div>
                      <div className="grid grid-rows-3 gap-y-1 translate-x-1/2">
                        <p className="text-date text-center my-auto">
                          27 Oktober 2022
                        </p>
                        <img
                          src="/page-staff/mutiara.png"
                          alt=""
                          className="mx-auto w-[65px] my-auto"
                        />
                        <p className="text-center text-timeline">
                          Close Registration
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* md timeline */}
                <div className="md:hidden py-10 flex flex-col h-[350px] items-center">
                  <div className="w-1 bg-white h-[200px] absolute z-[0] py-5"></div>
                  <div className="flex flex-col items-center justify-between h-[220px]">
                    <div className="flex justify-center items-center gap-x-2 relative z-[10] -translate-y-2 w-5/6">
                      <p className="text-white font-secondary text-center w-11/12">
                        15 Oktober 2022
                      </p>
                      <img
                        src="/page-staff/mutiara.png"
                        alt=""
                        className="w-12 mx-auto"
                      />
                      <p className="text-white font-secondary text-center w-11/12">
                        Open Registration
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-x-2 relative z-[10] -translate-y-2 w-5/6">
                      <p className="text-white font-secondary text-center w-11/12">
                        22 Oktober 2022 - 5 November 2022
                      </p>
                      <img
                        src="/page-staff/mutiara.png"
                        alt=""
                        className="w-12 mx-auto"
                      />
                      <p className="text-white font-secondary text-center w-11/12">
                        Submit Karya <br /> (Essay & Poster dan Stand Up)
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-x-2 relative z-[10] -translate-y-2 w-5/6">
                      <p className="text-white font-secondary text-center w-11/12">
                        27 Oktober 2022
                      </p>
                      <img
                        src="/page-staff/mutiara.png"
                        alt=""
                        className="w-12 mx-auto translate-y-2"
                      />
                      <p className="text-white font-secondary text-center w-11/12">
                        Close Registration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-[100px] md:pt-[200px]">
              <img
                src="/main-event/karang-left.png"
                alt=""
                className="absolute -translate-y-1/2 z-10 w-20 md:w-fit"
              />
              <img
                src="/main-event/karang-right.png"
                alt=""
                className="absolute -translate-y-1/2 z-10 right-0 w-20 md:w-fit"
              />
              <div className="flex justify-center items-center gap-x-2 md:gap-x-16 md:pb-[140px]">
                <div className="h-1 bg-white w-24 md:w-[200px] lg:w-[350px] hidden md:block"></div>
                <p className="text-main-event-3 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
                  Cabang Lomba
                </p>
                <div className="h-1 bg-white w-24 md:w-[200px] lg:w-[350px] hidden md:block"></div>
              </div>

              <div className="w-4/5 mx-auto">
                <div className="flex justify-evenly flex-wrap gap-32 py-24">
                  <Link href={"/BasketCompetition"}>
                    <div className="box-lomba flex flex-col justify-center items-center cursor-pointer">
                      <img src="/main-event/basket.png" alt="" />
                      <p className="text-3xl font-secondary text-white pt-5">
                        Basket
                      </p>
                    </div>
                  </Link>
                  <Link href={"/BadmintonCompetition"}>
                    <div className="box-lomba flex flex-col justify-center items-center cursor-pointer">
                      <img src="/main-event/badminton.png" alt="" />
                      <p className="text-3xl font-secondary text-white pt-5">
                        Badminton
                      </p>
                    </div>
                  </Link>
                  <Link href={"/MLCompetition"}>
                    <div className="box-lomba flex flex-col justify-center items-center cursor-pointer">
                      <img src="/main-event/game.png" alt="" />
                      <p className="text-3xl font-secondary text-white pt-5">
                        Mobile Legend
                      </p>
                    </div>
                  </Link>
                  <Link href={"/EssayPosterCompetition"}>
                    <div className="box-lomba flex flex-col justify-center items-center cursor-pointer">
                      <img src="/main-event/essay.png" alt="" />
                      <p className="text-3xl font-secondary text-white pt-5">
                        Essay & Poster
                      </p>
                    </div>
                  </Link>
                  <Link href={"/BandCompetition"}>
                    <div className="box-lomba flex flex-col justify-center items-center cursor-pointer">
                      <img src="/main-event/band.png" alt="" />
                      <p className="text-3xl font-secondary text-white pt-5">
                        Band
                      </p>
                    </div>
                  </Link>
                  <Link href={"/StandUpCompetition"}>
                    <div className="box-lomba flex flex-col justify-center items-center cursor-pointer">
                      <img src="/main-event/standup.png" alt="" />
                      <p className="text-3xl font-secondary text-white pt-5">
                        Stand Up
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
