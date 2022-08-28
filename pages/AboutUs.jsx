import Header from "../components/Header";
import { Parallax } from "react-scroll-parallax";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Loading from "./Loading";

export default function AboutUs() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return <Loading />;
  return (
    <>
      <Header title='About Us | Mabacup ITS 2022' />
      <Layout showNav={showNav} setShowNav={setShowNav} >
        <main className={`overflow-x-hidden`}>
          {/* Hero Section */}
          <div>
            <section
              id='hero'
              className='w-full min-h-screen about-us-hero overflow-hidden relative flex items-center justify-center'
            >
              {/* Ikan */}
              <img
                src='/about-us/ikan.png'
                alt='ikan'
                className='absolute left-0 top-1/4 z-10 hidden md:block'
              ></img>
              <img
                src='/about-us/ikan.png'
                alt='ikan'
                className='absolute right-[18%] top-1/4 z-10 hidden md:block'
              ></img>
              <div className='text-center font-primary text-4xl md:text-8xl text-white z-40'>
                <h1>About</h1>
                <h1>MABA CUP 2022</h1>
              </div>
              <img
                src='/about-us/hero-image.png'
                alt='Mabacup ITS 2022'
                className='bg-cover bottom-0 absolute w-full'
              ></img>
            </section>
            {/* Main Section */}
            <section
              id='sambutan-rektor'
              className='w-full min-h-screen bg-[#022b4b]  items-center justify-center md:px-24 px-2 hidden'
            >
              {/* Card */}
              <div className='px-2 py-10 md:py-14 md:px-10 about-us-card h-max flex justify-between items-start w-full gap-x-12 rounded-3xl'>
                {/* Sambutan Rektor */}
                <div className='text-white lg:w-1/2 w-full text-center md:text-start'>
                  <h2 className='font-primary md:text-5xl text-3xl text-center lg:text-left'>
                    Sambutan Rektor
                  </h2>
                  <div className='lg:hidden flex justify-center items-center mt-6'>
                    <img
                      src='/about-us/rektor-its.png'
                      alt='Rekot ITS'
                      className='w-64 '
                    ></img>
                  </div>
                  <p className='font-secondary text-base md:text-xl text-justify mt-8 p-4 md:p-0'>
                    Lörem ipsum puliga kis. Revis disade syvis. Gyspegen prera
                    poddradio trede. Vada rölyrat, poda. Digt trav interaktiv
                    skrivtavla. Seren etnotris faligt så kir kvasimodern. Plal
                    pokåns ibel. Höligen soskap supranektiga. Selar lament.
                    Lörem ipsum puliga kis. Revis disade syvis. Gyspegen prera
                    poddradio trede. Vada rölyrat, poda. Digt trav interaktiv
                    skrivtavla. Seren etnotris faligt så kir kvasimodern. Plal
                    pokåns ibel. Höligen soskap supranektiga. Selar lament.{" "}
                  </p>
                </div>
                {/* Rektor ITS Image */}
                <div className='lg:block hidden self-center'>
                  <img
                    src='/about-us/rektor-its.png'
                    alt='Rekot ITS'
                    className='w-[25rem]'
                  ></img>
                </div>
              </div>
            </section>
          </div>
          {/* Second Main */}
          <div className='about-us-content'>
            <section
              id='tema'
              className='w-full md:min-h-screen min-h-[80vh] relative flex justify-center items-center'
            >
              {/* Images */}
              <img
                src='/about-us/bottom-card.png'
                alt='Mabacup ITS 2022'
                className='absolute top-0 bg-cover w-full z-10'
              ></img>
              <img
                src='/about-us/ikan3.png'
                alt='ikan'
                className='absolute left-10 bottom-10 z-10 md:w-48 w-32'
              ></img>
              <img
                src='/about-us/ikan3.png'
                alt='ikan'
                className='absolute right-10 md:top-1/4 top-[10%] z-0 w-28'
              ></img>

              {/* Card Container  */}
              <div className='w-full flex lg:justify-evenly items-center z-40 lg:flex-row flex-col gap-y-6 md:px-0 px-8 pt-16 md:pt-0'>
                {/* Card */}
                <div className='about-us-card-content md:p-11 p-5 text-center text-white max-w-md border-2 border-white rounded-3xl'>
                  <h3 className='font-primary md:text-5xl text-3xl'>
                    Grand Theme
                  </h3>
                  <p className='font-secondary mt-6 text-base md:text-xl'>
                    The Adventure Seeker
                  </p>
                  <p className='font-secondary text-base md:text-xl'>
                    Mahasiswa baru akan menjadi seorang yang menyukai tantangan
                    baru sehingga mereka akan terus mencari petualangan baru
                    yang akan mengubah hidup mereka.
                  </p>
                </div>
                <div className='about-us-card-content md:p-11 p-5 text-center text-white max-w-md border-2 border-white rounded-3xl'>
                  <h3 className='font-primary md:text-5xl text-3xl'>Slogan</h3>
                  <p className='font-secondary mt-6 text-base md:text-xl'>
                    Flying High
                  </p>
                  <p className='font-secondary text-base md:text-xl'>
                    Para mahasiswa baru diharapkan untuk terbang lebih tinggi
                    lagi setelah mengetahui dan menuangkan minat dan bakatnya
                    pada kompetisi ini.
                  </p>
                </div>
              </div>
            </section>

            {/* Teaser Mabacup */}
            <section
              id='tema'
              className='w-full lg:min-h-[90vh] md:min-h-[70vh] min-h-[60vh] relative flex flex-col items-start pt-12 md:pt-0'
            >
              <h2 className='font-primary text-3xl md:text-5xl text-white text-center mx-auto'>
                Teaser MabaCup
              </h2>
              <div className='mx-auto p-4 pt-3 sm:pt-8 md:pt-16 lg:pt-16 xl:pt-8 h-[90%] w-[90%] sm:w-[95%] sm:h-[90%] pb-16 md:pb-32'>
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
                    className='mySwiper'
                  >
                    <SwiperSlide>
                      <img src='/about-us/image-1.png' alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/about-us/image-2.png' alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/about-us/image-1.png' alt='' />
                    </SwiperSlide>
                   <SwiperSlide>
                      <img src='/about-us/image-2.png' alt='' />
                    </SwiperSlide>
                     {/* 
                    <SwiperSlide>
                      <img src='/retrospeksi/image-5.png' alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/retrospeksi/image-6.png' alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/retrospeksi/image-7.png' alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/retrospeksi/image-4.png' alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/retrospeksi/image-5.png' alt='' />
                    </SwiperSlide> */}
                  </Swiper>
                )}
              </div>
              <img
                className='absolute bottom-0 w-full'
                src='/about-us/end-content.png'
                alt='Mabacup ITS 2022'
              ></img>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}
