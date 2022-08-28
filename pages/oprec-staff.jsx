import { useEffect, useState } from "react";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function pageOprecStaff() {
  // const [domLoaded, setDomLoaded] = useState(false);

  // useEffect(() => {
  //   setDomLoaded(true);
  // }, []);
  return (
    <main className='page-oprec-staff'>
      <section className='w-full h-screen sm:h-[32rem] bg-red-300'>
        <div className='page-staff w-full h-full p-16 relative flex flex-col items-center md:items-start'>
          <img
            className='w-16 md:w-24 mx-auto sm:mx-0'
            src='mabacup1.svg'
            alt=''
          />
          <h1 className='mt-16 font-secondary text-white font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-[64px] text-center sm:text-left relative z-10'>
            Open Recruitment Staff
          </h1>
          <h1 className='lg:mt-4 xl:mt-8 text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left relative z-10'>
            Maba Cup 2022
          </h1>
          <img
            className='absolute w-36 md:w-52 lg:w-64 xl:w-72 top-80 md:top-24 right-6 md:right-12 lg:right-16'
            src='/form-staff/ikan-form-staff.png'
            alt=''
          />
          <img
            className='absolute w-32 md:w-32 lg:w-48 xl:w-64  bottom-0 right-[80%] md:right-[35%]'
            src='/page-staff/ikan.png'
            alt=''
          />
          <img
            className='hidden md:block absolute bottom-0 right-0 md:w-72 lg:w-80 xl:w-[26rem] '
            src='/page-staff/building.png'
            alt=''
          />
          <img
            className='block md:hidden absolute bottom-0 right-0 w-52 opacity-30 '
            src='/page-staff/building-mobile.png'
            alt=''
          />

          <Link href={"/comingSoon"}>
            <button className='px-6 py-3 w-fit absolute bottom-16 sm:mt-12 bg-[#27508E] text-white rounded '>
              Form Pendaftaran
            </button>
          </Link>
        </div>
      </section>

      <section className='w-full min-h-[39rem] md:min-h-[48rem] lg:min-h-[34rem] xl:min-h-[40rem] 2xl:min-h-screen relative'>
        <img
          className='absolute right-0 top-12 w-10 md:w-20 lg:w-24 xl:w-28 2xl:w-36'
          src='/page-staff/terumbu-1.png'
          alt=''
        />
        <img
          className='hidden md:block absolute left-0 top-36 md:w-12 lg:w-16 xl:w-24 2xl:w-28'
          src='/page-staff/ikan-1.png'
          alt=''
        />
        <img
          className='absolute left-0 bottom-32 md:-bottom-8 w-10 md:w-20 lg:w-24 xl:w-40 2xl:w-48'
          src='/page-staff/terumbu-2.png'
          alt=''
        />
        <div className='w-full sm:w-10/12 mx-auto '>
          <h1 className='font-secondary text-white text-2xl lg:text-3xl xl:text-4xl font-semibold pt-12 sm:pt-24 text-center sm:text-left'>
            Hi, Adventure Seekers!
          </h1>
          <div className='flex lg:flex-row flex-col-reverse w-11/12 md:w-5/6 lg:w-full mx-auto gap-12 lg:gap-2 2xl:gap-4 mt-8 xl:mt-0 justify-center items-center'>
            <div className=' w-1/2 lg:w-[40%] xl:w-[45%] 2xl:w-1/2 lg:p-16 xl:p-24'>
              <img className='' src='/page-staff/diver.png' alt='' />
            </div>
            <div className='lg:w-[60%] xl:w-[55%] 2xl:w-1/2 flex items-center justify-center '>
              <div className='bg-red-200 p-6 rounded-2xl narasi h-fit'>
                <p className='font-secondary font-medium sm:font-semibold text-white text-base md:text-xl lg:text-base xl:text-[20px] lg:leading-8 xl:leading-[34px] text-justify'>
                  Its been a while since you take a part at PSB, IPITS, Gerigi,
                  and OK2BK. Kepada mahasiswa 2022 kami ucapkan Selamat
                  mengarungi birunya laut di KM ITS. Jangan lengah dan tetaplah
                  berproses karena “nahkoda hebat tidak dilahirkan di lautan
                  yang tenang”. Persiapkan mental, pengalaman, dan keyakinan
                  karena langkah kalian sebagai “The Adventure Seeker” telah
                  dimulai.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className='absolute w-16 md:w-20 lg:w-24 xl:w-32 right-0 -bottom-16 md:-bottom-32'
          src='/page-staff/ikan-2.png'
          alt=''
        />
      </section>
      <section className='w-full min-h-[36rem] md:min-h-[40rem] lg:min-h-[24rem] 2xl:min-h-[60vh]'>
        <div className='mt-16 timeline-staff w-[90%] sm:w-10/12 h-fit mx-auto rounded-xl pb-16'>
          <div className='px-4 sm:px-8 py-4 bg-white w-fit font-secondary text-[#6297C9] text-sm sm:text-3xl font-semibold rounded-2xl lg:translate-x-8 mx-auto lg:mx-0 -translate-y-8'>
            Timeline Open Recruitment Staff
          </div>
          <div className='w-full sm:h-96 lg:h-48 flex justify-center items-center relative z-[1]'>
            <div className='bg-white mx-auto h-96 lg:h-1  w-[2px] sm:w-1 lg:w-10/12 xl:w-4/5 flex flex-col lg:flex-row justify-between items-center rounded-lg'>
              <div className='flex items-center justify-center md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:-translate-x-1 w-16'>
                <p className='hidden lg:block font-secondary text-lg font-semibold absolute text-white -translate-y-[200%] w-44 text-center'>
                  29-31 Agustus 2022
                </p>
                <img
                  className='relative w-8 md:w-16 lg:w-16 xl:w-20'
                  src='/page-staff/mutiara.png'
                  alt=''
                />

                <p className='hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[200%] w-48 text-center'>
                  Pendaftaran
                </p>
                <p className='block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[110%] w-max'>
                  29-31 Agustus 2022
                </p>
                <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[80%] sm:translate-x-[100%]  w-max'>
                  Pendaftaran
                </p>
              </div>
              <div className='flex items-center justify-center md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:-translate-x-1 w-16'>
                <p className='hidden lg:block font-secondary text-lg font-semibold absolute text-white -translate-y-[200%] w-44 text-center'>
                  3 September 2022
                </p>
                <img
                  className='relative w-8 md:w-16 lg:w-16 xl:w-20'
                  src='/page-staff/mutiara.png'
                  alt=''
                />

                <p className='hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[120%] w-48 text-center'>
                  Pengumuman
                  <br />
                  Lolos Berkas
                </p>
                <p className='block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[110%] w-max'>
                  3 September 2022
                </p>
                <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[80%] sm:translate-x-[100%]  w-max'>
                  Pengumuman
                  <br />
                  Lolos Berkas
                </p>
              </div>
              <div className='flex items-center justify-center md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:-translate-x-1 w-16'>
                <p className='hidden lg:block font-secondary text-lg font-semibold absolute text-white -translate-y-[200%] w-44 text-center'>
                  5-8 September 2022
                </p>
                <img
                  className='relative w-8 md:w-16 lg:w-16 xl:w-20'
                  src='/page-staff/mutiara.png'
                  alt=''
                />

                <p className='hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[200%] w-48 text-center'>
                  Screening
                </p>
                <p className='block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[110%] w-max'>
                  5-8 September 2022
                </p>
                <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[80%] sm:translate-x-[100%]  w-max'>
                  Screening
                </p>
              </div>
              <div className='flex items-center justify-center md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:-translate-x-1 w-16'>
                <p className='hidden lg:block font-secondary text-lg font-semibold absolute text-white -translate-y-[200%] w-44 text-center'>
                  11 September 2022
                </p>
                <img
                  className='relative w-8 md:w-16 lg:w-16 xl:w-20'
                  src='/page-staff/mutiara.png'
                  alt=''
                />

                <p className='hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[120%] w-48 text-center'>
                  Pengumuman
                  <br />
                  Lolos Staff
                </p>
                <p className='block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[110%] w-max'>
                  11 September 2022
                </p>
                <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[80%] sm:translate-x-[100%]  w-max'>
                  Pengumuman
                  <br />
                  Lolos Staff
                </p>
              </div>
              <div className='flex items-center justify-center md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:translate-x-1 w-16'>
                <p className='hidden lg:block font-secondary text-lg font-semibold absolute text-white -translate-y-[200%] w-44 text-center'>
                  16 September 2022
                </p>
                <img
                  className='relative w-8 md:w-16 lg:w-16 xl:w-20'
                  src='/page-staff/mutiara.png'
                  alt=''
                />

                <p className='hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[120%] w-48 text-center'>
                  Welcome Party
                  <br />
                  Staff
                </p>
                <p className='block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[110%] w-max'>
                  16 September 2022
                </p>
                <p className='block lg:hidden font-secondary text-sm sm:text-base sm:text-lg font-medium absolute text-white  translate-x-[80%] sm:translate-x-[100%]  w-max'>
                  Welcome Party
                  <br />
                  Staff
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full min-h-[34rem] md:h-[28rem] xl:h-[40rem] 2xl:min-h-[90vh] relative'>
        <img
          className='absolute w-16 lg:w-24 xl:w-32 left-0 -top-24 md:top-0'
          src='/page-staff/ikan-3.png'
          alt=''
        />
        <div className='w-full sm:w-10/12 mx-auto lg:pt-16 xl:pt-20'>
          <div className='flex lg:flex-row flex-col-reverse w-11/12 sm:w-5/6 lg:w-full mx-auto gap-12 lg:gap-2 2xl:gap-4 mt-8 xl:mt-0 justify-center items-center'>
            <div className='lg:w-[55%] 2xl:w-1/2 items-center justify-center '>
              <div className='bg-red-200 p-6 rounded-2xl narasi'>
                <p className='font-secondary font-medium sm:font-semibold text-white text-base md:text-xl lg:text-base xl:text-[20px] lg:leading-8 xl:leading-[34px] text-justify'>
                  Secara filosofis mungkin biru menggambarkan ketenangan, tetapi
                  hal tersebut tidak terpancar di dalam Laut ITS. Apalagi
                  baru-baru ini Dewa mengumumkan salah satu event terbesar yang
                  akan dilaksanakan yaitu Maba Cup 2022. Warga bawah laut sangat
                  senang mendengar kabar tersebut sehingga mereka berusaha
                  mempersiapkan kegiatan dengan baik dan matang. Sebagai “The
                  Adventure Seeker” Apakah Maba Cup 2022 adalah pijakan kalian
                  dalam berpetualang?
                </p>
              </div>
            </div>

            <div className='w-1/2 lg:w-[45%] 2xl:w-1/2 lg:p-16 xl:p-24 my-auto'>
              <img className='' src='/page-staff/whale.png' alt='' />
            </div>
            <img
              className='absolute w-10 md:w-16 lg:w-16 xl:w-20 2xl:w-24 right-0 top-4 md:top-auto md:bottom-0'
              src='/page-staff/seaweed.png'
              alt=''
            />
          </div>
        </div>
      </section>
      <section className='w-full xl:h-[36rem] 2xl:min-h-[20vh] pt-24 relative '>
        <img
          className='absolute w-10 md:w-16 lg:w-16 xl:w-20 2xl:w-24 top-0 left-0'
          src='/page-staff/terumbu-3.png'
          alt=''
        />
        <div className='w-11/12 md:w-10/12 mx-auto persyaratan-staff rounded-xl pb-8'>
          <div className='px-4 md:px-8 py-4 bg-white w-fit font-secondary text-[#3A5CA6] text-sm md:text-3xl font-semibold rounded-2xl md:translate-x-8 -translate-y-8 mx-auto md:mx-0'>
            Persyaratan Umum
          </div>
          <div className='font-secondary text-sm md:text-lg xl:text-xl font-medium text-white px-8 leading-7 md:leading-9 -translate-y-1 h-fit'>
            1. Mahasiswa ITS angkatan 2022 (dibuktikan dengan KRSM)
            <br />
            2. Follow akun Instagram dan Tiktok Maba Cup 2022
            <br />
            3. Share poster Maba Cup 2022 yang dapat diakses pada URL di akun
            utama Instagram pribadi
            <br />
            4. Upload twibbon dengan hashtag (nunggu publikasi) dan tag 5 orang
            teman dan Instagram Maba Cup
            <br />
            5. Twibbon dan ketentuan upload dapat diakses pada URL
            <br />
            6. CV yang memuat biodata, pengalaman, kelebihan kekurangan, dll
            (dibebaskan menggunakan format ATS friendly atau Creative)
            <br />
            7. Portofolio (diperuntukkan bagi divisi desain, dokumentasi, dan
            publikasi)
            <br />
          </div>
        </div>
      </section>
      <section className='w-full min-h-screen pt-24 relative'>
        <img
          className='absolute w-16 lg:w-20 xl:w-28 2xl:w-32 top-0 right-0'
          src='/page-staff/ubur.png'
          alt=''
        />
        <div className='w-10/12 mx-auto '>
          <h1 className='font-secondary text-white text-xl md:text-3xl mb-8 text-center md:text-left'>
            Pilihan Divisi &amp; Subdivisi Maba Cup 2022
          </h1>

          
            <div>
              <Accordion >
                <AccordionSummary
                  className='!bg-[#0E1954] '
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='text-white'>Acara</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-text z-10'>
                  <Typography className='text-white text-sm md:text-base'>
                    Dijuluki sebagai Konseptor, Divisi Acara bertanggung jawab
                    merancang, menyusun, dan mengembangkan konsep maupun susunan
                    acara Maba Cup 2022. Divisi ini menaungi 2 subdivisi yaitu
                    Event dan Kompetisi.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className='!bg-[#0E1954]'
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='text-white'>Desain</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-text '>
                  <Typography className='text-white text-sm md:text-base'>
                    Subdivisi Desain bertanggung jawab dengan segala kebutuhan
                    desain grafis dalam seluruh kegiatan Maba Cup 2022.
                    Subdivisi ini memegang kendali atas feeds instagram
                    @mabacupits.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className='!bg-[#0E1954]'
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='text-white'>Dokumentasi</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-text '>
                  <Typography className='text-white text-sm md:text-base'>
                    Subdivisi ini dikenal sebagai Tukang jepret aib dikala kamu
                    sedang lelah. Selain itu, bertanggung jawab dalam konten
                    video dan kebutuhan editing lainnya.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className='!bg-[#0E1954]'
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='text-white'>Dekorasi</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-text '>
                  <Typography className='text-white text-sm md:text-base'>
                    Gacuma brainstorming, divisi ini juga merealisasikan ide
                    mereka melalui instalasi visual yang keren lohh. Terampil
                    dan kreatif. Boleh banget buat modal isi portofolio
                    kaliann!!
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className='!bg-[#0E1954]'
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='text-white'>Fundraising</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-text '>
                  <Typography className='text-white text-sm md:text-base'>
                    Fundraising atau bahasa kunonya adalah Danus yang sering
                    terbesit pasti ialah jualan keliling. Tapi tenang aja,
                    Fundraising Maba Cup 2022 ini beda lho. Mereka membantu
                    mencukupi kebutuhan Maba Cup dengan berbagai inovasi
                    jualannya.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className='!bg-[#0E1954]'
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='text-white'>Sponsorship</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-text '>
                  <Typography className='text-white text-sm md:text-base'>
                    Cuan, cuan, dan cuan adalah motivasi Subdivisi Sponsorship
                    dalam menarik pihak sponsor. Divisi ini juga dijuluki
                    sebagai negosiator handal.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className='!bg-[#0E1954]'
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='text-white'>Eksternal</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-text '>
                  <Typography className='text-white text-sm md:text-base'>
                    Divisi anti ghosting yang selalu setia menghubungi dan
                    menjaga hubungan dengan para stakeholder untuk
                    keberlangsungan kegiatan Maba Cup 2022.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className='!bg-[#0E1954]'
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='text-white'>Publikasi</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-text '>
                  <Typography className='text-white text-sm md:text-base'>
                    Garda terdepan dalam penyebaran informasi seputar kegiatan
                    Maba Cup 2022, selain itu Divisi Publikasi juga berperan
                    dalam meningkatkan branding melalui Social Media.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className='!bg-[#0E1954]'
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='text-white'>Kamzin</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-text '>
                  <Typography className='text-white text-sm md:text-base'>
                    Divisi Kamzin merupakan garda terdepan dalam peminjaman,
                    perizinan, dan keamanan dalam kegiatan Maba Cup 2022. Divisi
                    ini deket banget sama Biro Sarpras loh...
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className='!bg-[#0E1954]'
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='text-white'>Kestari</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-text '>
                  <Typography className='text-white text-sm md:text-base'>
                    Selain berperan dalam mengelola data dan merekap
                    administrasi, divisi ini juga deket banget lo sama Microsoft
                    Excel dan teman-temannya.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className='!bg-[#0E1954]'
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='text-white'>Konsumsi</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-text '>
                  <Typography className='text-white text-sm md:text-base'>
                    Dijuluki sebagai Divisi Ibu Kedua, karena divisi ini care
                    banget sama panitia mulai dari memperhatikan jam makan dan
                    urusan konsumsi lainnya. Divisi konsumsi juga bertanggung
                    jawab dalam konsumsi juri.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className='!bg-[#0E1954]'
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='text-white'>Perlengkapan</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-text '>
                  <Typography className='text-white text-sm md:text-base'>
                    Divisi yang selalu ada dan memenuhi seluruh kebutuhan
                    kegiatan Maba Cup 2022 terutama dalam hal prasarana.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className='!bg-[#0E1954] '
                  expandIcon={<ExpandMoreIcon className='text-white' />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography className='text-white'>Medical</Typography>
                </AccordionSummary>
                <AccordionDetails className='accordion-text '>
                  <Typography className='text-white text-sm md:text-base'>
                    Bertanggung jawab terhadap kesehatan peserta dan kebutuhan
                    obat-obatan ringan selama kegiatan MABA CUP 2022.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
        </div>
      </section>
      <section className='w-full h-fit relative'>
        <img className='w-full' src='/page-staff/siluets.png' alt='' />
        <div className='w-full h-[28rem] bg-[#000A40] flex flex-col justify-center items-center'>
          <h1 className='font-secondary text-white font-semibold text-3xl md:text-5xl text-center px-8 md:px-0'>
            What are you waiting for ?
          </h1>
          <p className='font-secondary text-white text-xl mt-4 text-center px-6 md:px-0'>
            Join the adventure and explore yourself !
          </p>
          <button className=' px-6 py-3 mt-12 button-form text-white rounded'>
            Form Pendaftaran
          </button>
        </div>
      </section>
    </main>
  );
}
