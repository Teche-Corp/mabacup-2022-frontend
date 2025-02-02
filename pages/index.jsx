import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./Loading";

import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
const notify = () => toast("Coming Soon !");

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  domLoaded &&
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      delay: 200,
    });

  return (
    <>
      <Header title="Mabacup ITS 2022" />
      <Layout showNav={showNav} setShowNav={setShowNav}>
        <main className={` overflow-x-hidden`}>
          <section
            id="hero"
            className="w-full min-h-screen hero overflow-hidden"
          >
            <div className="w-full h-screen relative bg-[url('/hero/light-mobile.png')] sm:bg-[url('/hero/light.png')] bg-cover">
              <Parallax
                className="block mx-auto lg:ml-24 pt-[12rem] sm:pt-[18rem] lg:pt-[36vh] 2xl:pt-[34vh] w-fit h-fit relative z-[10]"
                speed={20}
              >
                <div
                  className="flex flex-col items-center lg:block w-4/5 sm:w-full mx-auto"
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                >
                  <h1 className="font-secondary text-white text-xl sm:text-3xl lg:text-xl xl:text-3xl tracking-widest">
                    MABA CUP 2022
                  </h1>
                  <h1 className="font-primary text-white text-center text-4xl sm:text-5xl lg:text-5xl xl:text-7xl mt-3 mb-8">
                    The Adventure Seeker
                  </h1>
                  <div className="inline-block hover:scale-105 transition duration-200 ease-in-out">
                    <a
                      href="#about"
                      className="relative z-[11] dive-button font-secondary font-medium text-base text-white rounded-[2.5rem] px-6 py-3 cursor-pointer "
                    >
                      Dive Deeper
                    </a>
                  </div>
                </div>
              </Parallax>

              {/* terumbu image */}
              <Parallax
                className="absolute -left-4 sm:left-0 -bottom-10 sm:-bottom-20 lg:-bottom-16 xl:-bottom-12 2xl:-bottom-6 w-36 sm:w-48 xl:w-64"
                speed={-10}
                scale={[0.9, 1.2]}
              >
                <img
                  className="w-64"
                  src="/hero/terumbu-kiri.png"
                  alt="terumbu kiri"
                />
              </Parallax>

              {/* seaweed image */}
              <Parallax
                className="hidden sm:block w-24 xl:w-36 absolute -bottom-[5.5rem] lg:-bottom-6 xl:bottom-4 2xl:bottom-10 right-[19rem] lg:right-[17rem] xl:right-[19rem] z-[1]"
                speed={-10}
                scale={[0.9, 1.2]}
              >
                <img className="" src="/hero/seaweed.png" alt="seaweed" />
              </Parallax>

              {/* building primary image */}

              <Parallax
                className="absolute w-[15rem] sm:w-[33rem] lg:w-[30rem] xl:w-[34rem] -right-1 sm:-right-40 lg:-right-36 xl:-right-40 -bottom-24 sm:-bottom-[8.5rem] lg:-bottom-28 xl:-bottom-24 2xl:-bottom-[5rem] z-[1]"
                speed={-15}
                scale={[0.9, 1.2]}
              >
                <img
                  className="hidden sm:block"
                  src="/hero/building-primary.png"
                  alt="building primary"
                />
                <img
                  className="block sm:hidden"
                  src="/hero/building-prim-mobile.png"
                  alt="building primary"
                />
              </Parallax>

              {/* building secondary image */}
              <Parallax
                className="absolute w-[12.5rem] sm:w-[20rem] lg:w-[30rem] xl:w-[34rem] -bottom-24 sm:-bottom-32 lg:-bottom-20 right-[4.5rem] sm:right-56 lg:right-44 xl:right-52 z-[0]"
                speed={-15}
                scale={[0.9, 1.2]}
              >
                <img
                  className="hidden lg:block"
                  src="/hero/building-secondary.png"
                  alt="building secondary"
                />
                <img
                  className="block lg:hidden sm:opacity-80 w-full"
                  src="/hero/building-mobile.png"
                  alt="building secondary"
                />
              </Parallax>

              {/* ikan primary image */}
              <Parallax
                className="w-32 sm:w-60 lg:w-64 xl:w-72 absolute top-96 sm:top-80 lg:top-52 xl:top-40 2xl:top-32 right-52 lg:right-44 2xl:right-52 z-[8]"
                translateX={["0px", "100px"]}
              >
                <img
                  className=""
                  src="/hero/ikan-primary.svg"
                  alt="ikan primary"
                />
              </Parallax>

              {/* ikan secondary image */}
              <Parallax
                className="w-24 sm:w-44 absolute bottom-40 sm:bottom-52 lg:bottom-36 left-8 sm:left-24 lg:left-80"
                translateX={["0px", "100px"]}
              >
                <img
                  className=""
                  src="/hero/ikan-secondary.svg"
                  alt="ikan secondary"
                />
              </Parallax>

              {/* sand image */}

              <img
                className="hidden sm:block w-full absolute bottom-0 z-[2]"
                src="/hero/sand.png"
                alt="sand"
              />
              <img
                className="block sm:hidden translate-y-[8px] w-full absolute bottom-0 z-[2]"
                src="/hero/sand-mobile.png"
                alt="sand"
              />
            </div>
          </section>

          <div className="content">
            <section
              id="about"
              className="w-full min-h-[70vh] lg:min-h-[calc(100vh-50px)] pt-72 lg:pt-64 2xl:pt-56"
            >
              <div
                className="about-mabacup w-11/12 sm:w-3/4 h-max pb-4 sm:pb-0 sm:h-80 lg:h-72 mx-auto rounded-xl px-8 sm:px-0 sm:rounded-3xl relative z-[1]"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              >
                <img
                  className="hidden sm:block w-28 absolute -top-8 -left-8 -rotate-12"
                  src="/about/mutiara.png"
                  alt="mutiara"
                />
                <h1 className="font-primary text-2xl sm:text-4xl text-[#6FA1CD] bg-white w-fit px-7 sm:px-8 py-2 rounded-full mx-auto text-center -translate-y-6">
                  About Maba Cup
                </h1>
                <div className="md:px-12 lg:px-16 xl:px-20 mt-0 sm:mt-6 flex flex-col items-center">
                  <p className="font-secondary text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-white font-medium text-center">
                    Maba Cup merupakan event tahunan yang diselenggarakan oleh
                    Departemen Event Lembaga Minat Bakat ITS. Memiliki motto
                    “Dari maba, oleh maba, dan untuk maba”, event ini terdiri
                    dari pelatihan manajerial dan berbagai perlombaan.{" "}
                  </p>
                  <Link href="/AboutUs">
                    <button className="bg-[#5189C4] mt-6 w-fit h-fit px-4 py-2 rounded-lg mx-auto text-white hover:drop-shadow-2xl hover:bg-transparent hover:border-2 hover:border-white cursor-pointer">
                      Selengkapnya
                    </button>
                  </Link>
                </div>
                <img
                  className="hidden sm:block w-28 absolute -bottom-8 -right-8"
                  src="/about/rumput-laut.png"
                  alt="rumput laut"
                />
              </div>

              <Parallax
                className="relative z-0"
                translateX={["0px", "100px"]}
                speed={15}
              >
                <img
                  className="w-48"
                  src="/about/fish-bottom-right.svg"
                  alt="fish-left"
                />
              </Parallax>
            </section>
            <section
              className="w-full sm:h-screen md:h-[70vh] lg:h-[calc(100vh-200px)] xl:h-[70vh] 2xl:min-h-[calc(100vh-150px)] relative"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <div className="w-10/12 mx-auto pt-24">
                <h1 className=" font-primary text-center text-xl sm:text-5xl text-white">
                  Timeline Maba Cup 2022
                </h1>
                <div className="w-full mt-12 sm:mt-16 sm:h-96 lg:h-48 flex justify-center items-center relative z-[1]">
                  <div className="bg-white mx-auto h-96 lg:h-1  w-[2px] sm:w-1 lg:w-3/4 flex flex-col lg:flex-row justify-between rounded-lg">
                    <div className="h-3 sm:h-5 w-3 sm:w-5 bg-[#FFA4B3] rounded-full -translate-y-[40%] -translate-x-[5px] sm:-translate-x-2 lg:-translate-x-1 hover:scale-110 transition duration-300 border-2 border-[#4571B4] border-solid hover:border-none">
                      <p className="hidden lg:block font-secondary text-lg font-semibold absolute text-white -top-12 w-36 -translate-x-[40%] text-center">
                        Agustus 2022
                      </p>
                      <p className="hidden lg:block font-secondary text-lg font-medium absolute text-white -bottom-20 w-44 -translate-x-[40%] lg:-translate-y-[10%] text-center">
                        Open Recruitment
                        <br />
                        Staff
                      </p>
                      <p className="block lg:hidden font-secondary text-base sm:text-lg font-semibold absolute text-white text-center -translate-x-[115%] -translate-y-1 w-max">
                        Agustus 2022
                      </p>
                      <p className="block lg:hidden font-secondary text-base sm:text-lg font-medium absolute text-white translate-x-6 sm:translate-x-10 -translate-y-1 w-max">
                        Open Recruitment
                        <br />
                        Staff
                      </p>
                    </div>
                    <div className="h-3 sm:h-5 w-3 sm:w-5 bg-[#FFA4B3] rounded-full -translate-y-[40%] -translate-x-[5px] sm:-translate-x-2 lg:-translate-x-0 hover:scale-110 transition duration-300 border-2 border-[#4571B4] border-solid hover:border-none">
                      <p className="hidden lg:block font-secondary text-lg font-semibold absolute text-white -top-12 w-44 -translate-x-[40%] text-center">
                        September 2022
                      </p>
                      <p className="hidden lg:block font-secondary text-lg font-medium absolute text-white -bottom-20 w-48 -translate-x-[40%] lg:-translate-y-[10%] text-center">
                        Open Recruitment
                        <br />
                        Brand Ambassador
                      </p>
                      <p className="block lg:hidden font-secondary text-base sm:text-lg font-semibold absolute text-white text-center -translate-x-[115%] -translate-y-1 w-max">
                        September 2022
                      </p>
                      <p className="block lg:hidden font-secondary text-base sm:text-lg font-medium absolute text-white translate-x-6 sm:translate-x-10 -translate-y-1 w-max">
                        Open Recruitment
                        <br />
                        Brand Ambassador
                      </p>
                    </div>
                    <div className="h-3 sm:h-5 w-3 sm:w-5 bg-[#FFA4B3] rounded-full -translate-y-[40%] -translate-x-[5px] sm:-translate-x-2 lg:-translate-x-0 hover:scale-110 transition duration-300 border-2 border-[#4571B4] border-solid hover:border-none">
                      <p className="hidden lg:block font-secondary text-lg font-semibold absolute text-white -top-12 w-36 -translate-x-[40%] text-center">
                        September 2022
                      </p>
                      <p className="hidden lg:block font-secondary text-lg font-medium absolute text-white -bottom-20 w-32 -translate-x-[40%] -translate-y-full text-center">
                        Pre Event
                      </p>
                      <p className="block lg:hidden font-secondary text-base sm:text-lg font-semibold absolute text-white text-center -translate-x-[115%] -translate-y-1 w-max">
                        September 2022
                      </p>
                      <p className="block lg:hidden font-secondary text-base sm:text-lg font-medium absolute text-white translate-x-6 sm:translate-x-10 -translate-y-1 w-max">
                        Pre Event
                      </p>
                    </div>
                    <div className="h-3 sm:h-5 w-3 sm:w-5 bg-[#FFA4B3] rounded-full -translate-y-[40%] -translate-x-[5px] sm:-translate-x-2 lg:-translate-x-0 hover:scale-110 transition duration-300 border-2 border-[#4571B4] border-solid hover:border-none">
                      <p className="hidden lg:block font-secondary text-lg font-semibold absolute text-white -top-12 w-36 -translate-x-[40%] text-center">
                        September 2022
                      </p>
                      <p className="hidden lg:block font-secondary text-lg font-medium absolute text-white -bottom-20 w-32 -translate-x-[40%] -translate-y-full text-center">
                        Main Event
                      </p>
                      <p className="block lg:hidden font-secondary text-base sm:text-lg font-semibold absolute text-white text-center -translate-x-[115%] -translate-y-1 w-max">
                        September 2022
                      </p>
                      <p className="block lg:hidden font-secondary text-base sm:text-lg font-medium absolute text-white translate-x-6 sm:translate-x-10 -translate-y-1 w-max">
                        Main Event
                      </p>
                    </div>
                    <div className="h-3 sm:h-5 w-3 sm:w-5 bg-[#FFA4B3] rounded-full lg:-translate-y-[40%] -translate-x-[5px] sm:-translate-x-2 lg:-translate-x-0 hover:scale-110 transition duration-300 border-2 border-[#4571B4] border-solid hover:border-none">
                      <p className="hidden lg:block font-secondary text-lg font-semibold absolute text-white -top-12 w-36 -translate-x-[40%] text-center">
                        Nopember 2022
                      </p>
                      <p className="hidden lg:block font-secondary text-lg font-medium absolute text-white -bottom-20 w-32 -translate-x-[40%] -translate-y-full text-center">
                        Closing
                      </p>
                      <p className="block lg:hidden font-secondary text-base sm:text-lg font-semibold absolute text-white text-center -translate-x-[115%] -translate-y-1 w-max">
                        Nopember 2022
                      </p>
                      <p className="block lg:hidden font-secondary text-base sm:text-lg font-medium absolute text-white translate-x-6 sm:translate-x-10 -translate-y-1 w-max">
                        Closing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Parallax
                className="absolute bottom-12 right-0"
                translateX={["0px", "-100px"]}
                speed={-15}
              >
                <img
                  className="w-48 rotate-180 relative z-0"
                  src="/about/fish-bottom-left.svg"
                  alt="fish-right"
                />
              </Parallax>
            </section>
            <section className="w-full h-max lg:h-[calc(100vh-200px)] 2xl:min-h-[calc(100vh-100px)] pb-24 lg:pb-0">
              <div className="w-11/12 sm:w-1/2 lg:w-11/12 xl:w-10/12 pt-20 flex flex-col lg:flex-row gap-8 lg:gap-4 xl:gap-8 justify-between items-center mx-auto relative z-10">
                <div
                  className="event-card-active sm:w-[24.7rem] sm:h-[20.5rem] xl:h-[21.5rem] rounded-xl sm:rounded-2xl lg:rounded-3xl relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                >
                  <div className="w-full h-72 p-6">
                    <h1 className="font-primary text-white text-2xl sm:text-[2rem]">
                      Pre Event
                    </h1>
                    <p className="mt-4 font-secondary text-white text-base xl:text-lg font-normal h-max">
                      Pre-event Maba Cup 2022 merupakan kegiatan kompetisi di
                      bidang desain maskot yang dimulai sebelum event utama.
                      Kegiatan ini merupakan bentuk representasi motto Maba Cup
                      2022.
                    </p>
                  </div>

                  <Link href={"/preEvent"}>
                    <a className="absolute bottom-0 font-secondary font-medium text-lg w-full h-16 bg-white text-[#2C4295]  flex justify-center items-center">
                      Lihat Detail
                    </a>
                  </Link>
                </div>
                <div
                  className="event-card-active sm:w-[24.7rem] sm:h-[20.5rem] xl:h-[21.5rem] rounded-xl sm:rounded-2xl lg:rounded-3xl relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="300"
                >
                  <div className="w-full h-72 p-6">
                    <h1 className="font-primary text-white text-2xl sm:text-[2rem]">
                      Main Event
                    </h1>
                    <p className="mt-4 font-secondary text-white text-base xl:text-lg font-normal block">
                      Main Event Maba Cup 2022 merupakan kegiatan utama dari
                      Maba Cup 2022 meliputi 6 kategori lomba.
                    </p>
                  </div>

                  <Link href={"/MainEvent"}>
                    <a className="absolute bottom-0 font-secondary font-medium text-lg w-full h-16 bg-white text-[#2C4295]  flex justify-center items-center">
                      Lihat Detail
                    </a>
                  </Link>
                </div>
                <div
                  className="event-card sm:w-[24.7rem] sm:h-[20.5rem] xl:h-[21.5rem] rounded-xl sm:rounded-2xl lg:rounded-3xl relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="500"
                >
                  <div className="w-full h-72 p-6">
                    <h1 className="font-primary text-white text-2xl sm:text-[2rem]">
                      Closing
                    </h1>
                    <p className="mt-4 font-secondary text-white text-base xl:text-lg font-normal">
                      Closing Maba Cup 2022 merupakan kegiatan penutup dari
                      seluruh rangkaian kegiatan kompetisi sebagai bentuk
                      apresiasi terhadap mahasiswa baru.
                    </p>
                  </div>

                  <Link href={"#"}>
                    <a className="absolute bottom-0 font-secondary font-medium text-lg w-full h-16 bg-white text-[#2C4295]  flex justify-center items-center">
                      Lihat Detail
                    </a>
                  </Link>
                </div>
              </div>
            </section>

            <section
              className="w-full h-[55vh] sm:h-[65vh] lg:h-[calc(100vh-200px)] 2xl:min-h-[calc(100vh-100px)]"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <div className="oprec w-11/12 xl:w-4/5 h-[18rem] sm:h-[19rem] lg:h-[18rem] xl:h-[22rem] bg-red-200 mx-auto mt-8 rounded-2xl p-6 sm:p-8 xl:p-10 relative overflow-hidden">
                <div className="w-full sm:w-3/5 md:w-[70%] lg:w-3/5 relative z-[1] ">
                  <h1 className="font-secondary text-white text-lg sm:text-[1.5rem] xl:text-[1.7rem] 2xl:text-[2.1rem] font-semibold tracking-wide sm:tracking-[-2.2%] leading-normal sm:leading-tight">
                    Mari Bergabung Menjadi Bagian dari Student Ambassador Maba
                    Cup ITS 2022
                  </h1>
                  <p className="text-white font-secondary text-sm sm:text-base xl:text-xl 2xl:text-[1.3rem] leading-5 lg:leading-6 xl:leading-8 tracking-[-0.06%] w-full sm:w-4/5 lg:w-2/3 xl:w-2/3 2xl:w-2/3 mt-4">
                    Gabung menjadi Student Ambassador sekarang dan dapatkan
                    banyak Benefitnya!
                  </p>

                  <Link href={"https://mabacup-its.com/oprec-ambassador"}>
                    <a className="mt-8 absolute w-max right-1/2 sm:left-0 translate-x-1/2 sm:translate-x-0 inline-block px-3 sm:px-5 py-2 sm:py-3 border-2 border-solid border-white bg-white hover:bg-[#2C7994] text-[#2C7994] hover:text-white text-sm sm:text-lg rounded-lg font-medium">
                      Daftar Sekarang
                    </a>
                  </Link>
                </div>
                <img
                  className="absolute bottom-0 right-2 w-[10rem] sm:w-[24rem] xl:w-[31rem] z-0"
                  src="/oprec/building.png"
                  alt="building oprec"
                />
                <img
                  className="absolute bottom-0 sm:bottom-12 right-[70%] sm:right-[42%] w-32 xl:w-40"
                  src="/oprec/ikan-primary.png"
                  alt="ikan primary"
                />

                <img
                  className="absolute right-16 top-0 w-64 xl:w-72"
                  src="/oprec/ikan-secondary.png"
                  alt="ikan secondary"
                />
              </div>
            </section>
            <div className="relative">
              <img
                className="absolute w-24 sm:w-48 z-[3] -top-8 sm:-top-16 right-[50%] translate-x-1/2"
                src="/retrospeksi/mutiara.png"
                alt="mutiara"
              />
              <img
                className="w-full relative z-[1] translate-y-1 xl:translate-y-0"
                src="/retrospeksi/rounded-new.png"
                alt="rounded"
              />
              <img
                className="absolute w-24 sm:w-64 right-0 -top-12 sm:-top-24 z-0"
                src="/retrospeksi/terumbu-kanan.png"
                alt="terumbu kanan"
              />
              <img
                className="absolute w-24 sm:w-56 left-0 -top-12 sm:-top-20 z-0"
                src="/retrospeksi/terumbu-kiri.png"
                alt="terumbu kiri"
              />
            </div>
            <section className="retro w-full min-h-[30vh] sm:min-h-[50vh] lg:min-h-[50vh] relative z-[1]">
              <h1 className="text-center font-primary text-white text-xl sm:text-5xl pt-5 pb-3 md:pb-10">
                Retrospeksi
              </h1>
              <div className="mx-auto p-4 pt-3 sm:pt-8 md:pt-16 lg:pt-16 xl:pt-8 h-[90%] w-[90%] sm:w-[95%] sm:h-[90%] pb-16 md:pb-32">
                {domLoaded && (
                  <Swiper
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                      300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                    }}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src="/retrospeksi/image-1.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/retrospeksi/image-2.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/retrospeksi/image-3.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/retrospeksi/image-4.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/retrospeksi/image-5.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/retrospeksi/image-6.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/retrospeksi/image-7.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/retrospeksi/image-4.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/retrospeksi/image-5.png" alt="" />
                    </SwiperSlide>
                  </Swiper>
                )}
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}
