import Layout from "../components/Layout";
import { useState } from "react";
import Link from "next/link";

export default function PosterCompetition() {
  const [showNav, setShowNav] = useState(false);
  return (
    <Layout showNav={showNav} setShowNav={setShowNav}>
      <main className="page-oprec-staff overflow-hidden">
        <section className="w-full h-screen sm:h-[24rem] bg-red-300">
          <div className="page-staff w-full h-full p-16 relative flex flex-col items-center md:items-start overflow-hidden">
            <h1 className="mt-16 font-secondary text-white font-semibold text-2xl md:text-4xl lg:text-5xl text-center sm:text-left relative z-10">
              Essay &amp; Poster Competition
            </h1>
            <h1 className="lg:mt-4 xl:mt-8 text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left relative z-10">
              Maba Cup 2022
            </h1>
            <img
              className="absolute w-36 md:w-52 lg:w-64 xl:w-72 top-80 md:top-0 right-6 md:right-12 lg:right-0"
              src="/form-staff/ikan-form-staff.png"
              alt=""
            />
            <img
              className="absolute w-32 md:w-32 lg:w-48 xl:w-64 -bottom-24 right-[80%] md:right-[25%]"
              src="/page-staff/ikan.png"
              alt=""
            />
            <img
              className="hidden md:block absolute bottom-0 right-0 md:w-72 lg:w-80 xl:w-[26rem]"
              src="/page-staff/building.png"
              alt=""
            />
            <img
              className="block md:hidden absolute bottom-0 right-0 w-52 opacity-30"
              src="/page-staff/building-mobile.png"
              alt=""
            />
          </div>
        </section>

        <section className="w-full min-h-[30rem] md:min-h-[37rem] lg:min-h-[24rem] xl:min-h-[30rem] 2xl:min-h-[75vh] relative">
          <img
            className="absolute right-0 -top-16 w-10 md:w-20 lg:w-24 xl:w-28 2xl:w-36"
            src="/page-staff/terumbu-1.png"
            alt=""
          />
          <img
            className="hidden md:block absolute left-0 -top-16 md:w-12 lg:w-16 xl:w-24 2xl:w-28"
            src="/page-staff/ikan-1.png"
            alt=""
          />
          <img
            className="absolute left-0 bottom-32 md:-bottom-8 w-6 md:w-10 lg:w-16 xl:w-24 2xl:w-32"
            src="/briu.png"
            alt=""
          />
          <div className="w-full sm:w-10/12 mx-auto ">
            <div className="flex lg:flex-row flex-col-reverse w-11/12 md:w-5/6 lg:w-full mx-auto gap-12 lg:gap-2 2xl:gap-4 mt-16 xl:mt-12 justify-center items-center">
              <div className=" w-1/2 lg:w-[40%] xl:w-[45%] 2xl:w-1/2 lg:p-16 xl:p-24">
                <img className="" src="/page-staff/diver.png" alt="" />
              </div>
              <div className="lg:w-[60%] xl:w-[55%] 2xl:w-1/2 flex items-center justify-center ">
                <div className="bg-red-200 p-6 md:py-12 xl:py-16 rounded-2xl narasi w-full h-full flex flex-col items-center">
                  <h1 className="text-white font-secondary font-semibold text-2xl md:text-4xl">
                    Daftar Sekarang !!
                  </h1>
                  <p className="text-center md:text-left text-white mt-6 font-secondary font-medium text-sm md:text-base">
                    Pendaftaran ditutup pada: 27 November 2022 23:59 PM{" "}
                  </p>
                  <Link
                    href={
                      "https://docs.google.com/forms/d/e/1FAIpQLSdjp8N1SAvVp0gPGRfhYN_X2rwf2Z2lNioegxWqLR7Prm3BnQ/viewform"
                    }
                  >
                    <button className="text-white font-secondary mt-8 bg-[#5189C4] w-2/3 h-12 rounded-md font-medium">
                      Form Pendaftaran
                    </button>
                  </Link>
                  <Link
                    href={
                      "https://drive.google.com/file/d/1mWt97VSEXuJtkSthF9_XKERBGBHFfADW/view?usp=sharing"
                    }
                  >
                    <button className="text-[#5189C4] font-secondary mt-4 bg-white w-2/3 h-12 rounded-md font-medium">
                      Unduh Guidebook
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute w-16 md:w-20 lg:w-24 xl:w-32 right-0 -bottom-16 md:-bottom-32"
            src="/page-staff/ikan-2.png"
            alt=""
          />
        </section>
        <section className="w-full min-h-[22rem] md:min-h-[20rem] lg:min-h-[24rem] xl:min-h-[28rem] 2xl:min-h-[58vh] relative">
          <div className="mt-16 timeline-staff w-[90%] sm:w-10/12 h-fit mx-auto rounded-xl p-6 md:p-8 lg:p-12 xl:p-16">
            <p className="text-white font-secondary text-sm md:text-base lg:text-xl lg:leading-7 xl:leading-9 text-center">
              Ide-ide cemerlang kadang muncul di saat-saat yang tidak terduga
              nih. Daripada ide-ide itu terlewat begitu saja, yuk tuangkan ke
              dalam tulisan! Lomba Essay & Poster mengajak kalian berpetualang
              dan menemukan inspirasi untuk menyempurnakan gagasan kalian!
              Setelah menulis essay, kalian akan mempresentasikan isi tulisan
              kalian dalam bentuk poster yang menarik. Kami tunggu unggahan
              karya-karya brilian teman-teman!
            </p>
          </div>
          <img
            className="absolute w-20 md:w-24 lg:w-24 xl:w-32 -rotate-[30deg] bottom-0 -right-4"
            src="/about/mutiara.png"
            alt=""
          />
        </section>
        <section className="w-full min-h-[36rem] md:min-h-[38rem] lg:min-h-[26rem] xl:min-h-[28rem] 2xl:min-h-[60vh] relative">
          <img
            className="absolute w-10 md:w-16 lg:w-16 xl:w-20 2xl:w-24 left-0 top-4 md:top-auto"
            src="/main-event/seaweed2.png"
            alt=""
          />
          <div className="mt-16 timeline-staff w-[90%] sm:w-10/12 h-fit mx-auto rounded-xl pb-16">
            <div className="px-4 sm:px-8 py-4 bg-white w-fit font-secondary text-[#6297C9] text-sm sm:text-3xl font-semibold rounded-2xl lg:translate-x-8 mx-auto lg:mx-0 -translate-y-8">
              Timeline Kompetisi
            </div>
            <div className="w-3/4 mx-auto sm:h-96 lg:h-48 flex justify-center items-center relative z-[1]">
              <div className="bg-white mx-auto h-96 lg:h-1  w-[2px] sm:w-1 lg:w-10/12 xl:w-4/5 flex flex-col lg:flex-row justify-between items-center rounded-lg">
                <div className="flex items-center justify-center -translate-y-2 md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:-translate-x-1 w-16 ">
                  <p className="hidden lg:block font-secondary text-md font-semibold absolute text-white -translate-y-[100%] w-40 text-center">
                    22 Oktober -5 November 2022
                  </p>
                  <img
                    className="relative w-8 md:w-16 lg:w-16 xl:w-20"
                    src="/page-staff/mutiara.png"
                    alt=""
                  />
                  <p className="hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[200%] w-48 text-center">
                    Pengumpulan Karya
                  </p>
                  <p className="inline-block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[50%] sm:-translate-x-[60%] md:w-64 sm:w-64 w-48">
                    22 Oktober - 5 November 2022
                  </p>
                  <p className="inline-block lg:hidden font-secondary text-sm sm:text-base font-medium absolute text-white  translate-x-[100%] sm:translate-x-[100%]">
                    Pengumpulan Karya
                  </p>
                </div>
                <div className="flex items-center justify-center md:-translate-x-0 md:-translate-y-1 lg:translate-y-0 lg:-translate-x-1 w-16">
                  <p className="hidden lg:block font-secondary text-md font-semibold absolute text-white -translate-y-[200%] w-52 text-center">
                    5-11 November 2022
                  </p>
                  <img
                    className="relative w-8 md:w-16 lg:w-16 xl:w-20"
                    src="/page-staff/mutiara.png"
                    alt=""
                  />

                  <p className="hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[200%] w-48 text-center">
                    Penjurian
                  </p>
                  <p className="block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[85%] w-max">
                    5-11 November 2022
                  </p>
                  <p className="inline-block lg:hidden font-secondary text-sm sm:text-base font-medium absolute text-white  translate-x-[120%] sm:translate-x-[130%]">
                    Penjurian
                  </p>
                </div>
                <div className="flex items-center justify-center md:-translate-x-0 md:-translate-y-0 lg:translate-y-0 lg:translate-x-0 w-16">
                  <p className="hidden lg:block font-secondary text-md font-semibold absolute text-white -translate-y-[200%] w-52 text-center">
                    12 November 2022
                  </p>
                  <img
                    className="relative w-8 md:w-16 lg:w-16 xl:w-20"
                    src="/page-staff/mutiara.png"
                    alt=""
                  />

                  <p className="hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[200%] w-48 text-center">
                    Pengumuman 10 Besar
                  </p>
                  <p className="block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[85%] w-max">
                    12 November 2022
                  </p>
                  <p className="block lg:hidden font-secondary text-sm sm:text-base font-medium absolute text-white translate-x-[90%] sm:translate-x-[100%] w-max">
                    Pengumuman 10 <br></br>Besar
                  </p>
                </div>
                <div className="flex items-center justify-center md:-translate-x-0 md:-translate-y-0 lg:translate-y-0 lg:translate-x-0 w-16">
                  <p className="hidden lg:block font-secondary text-md font-semibold absolute text-white -translate-y-[200%] w-52 text-center">
                    19 November 2022
                  </p>
                  <img
                    className="relative w-8 md:w-16 lg:w-16 xl:w-20"
                    src="/page-staff/mutiara.png"
                    alt=""
                  />

                  <p className="hidden lg:block font-secondary text-lg font-medium absolute text-white translate-y-[200%] w-48 text-center">
                    Final
                  </p>
                  <p className="block lg:hidden font-secondary text-sm sm:text-lg font-medium sm:font-semibold absolute text-white text-center -translate-x-[70%] sm:-translate-x-[85%] w-max">
                    19 November 2022
                  </p>
                  <p className="block lg:hidden font-secondary text-sm sm:text-base font-medium absolute text-white translate-x-[200%] sm:translate-x-[230%] w-max">
                    Final
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full md:h-[44rem] lg:h-[38rem] xl:h-[36rem] 2xl:min-h-[16vh] pt-24 relative ">
          <img
            className="absolute w-10 md:w-16 lg:w-16 xl:w-20 2xl:w-24 bottom-16 left-0"
            src="/page-staff/terumbu-3.png"
            alt=""
          />
          <div className="w-11/12 md:w-10/12 mx-auto persyaratan-staff rounded-xl pb-8">
            <div className="px-4 md:px-8 py-4 bg-white w-fit font-secondary text-[#3A5CA6] text-sm md:text-3xl font-semibold rounded-2xl md:translate-x-8 -translate-y-8 mx-auto md:mx-0">
              Persyaratan Umum
            </div>
            <div className="font-secondary text-sm md:text-lg xl:text-xl font-medium text-white px-2 md:px-16 lg:px-24 -translate-y-1 h-fit">
              <ol className="list-inside md:list-outside leading-7 md:leading-9 list-decimal">
                <li>Setiap kelompok terdiri dari 1-3 peserta</li>
                <li>Peserta merupakan mahasiswa baru ITS angkatan 2022</li>
                <li>
                  Anggota kelompok tidak diperbolehkan berasal dari departemen
                  yang berbeda
                </li>
                <li>
                  Peserta diwajibkan untuk mengikuti tema yang sudah ditentukan
                </li>
                <li>
                  Setiap peserta wajib menerapkan peraturan yang telah
                  ditetapkan
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="w-full xl:h-[24rem] 2xl:min-h-[20vh] pt-24 relative">
          <img
            className="absolute w-12 md:w-16 lg:w-20 xl:w-28 2xl:w-32 top-0 md:-top-16 right-0"
            src="/page-staff/ubur.png"
            alt=""
          />

          <div className="w-11/12 md:w-10/12 mx-auto persyaratan-staff rounded-xl pb-8 relative ">
            <div className="px-4 md:px-8 py-4 bg-white w-fit font-secondary text-[#3A5CA6] text-sm md:text-3xl font-semibold rounded-2xl md:translate-x-8 -translate-y-8 mx-auto md:mx-0">
              Contact Person
            </div>
            <div className="font-secondary text-sm md:text-lg xl:text-xl font-medium text-white px-4 md:px-24 -translate-y-1 h-fit">
              <p>
                Apabila terdapat pertanyaan lebih lanjut dapat menghubungi
                Contact Person berikut :
              </p>
              <div className="flex items-center gap-4 mt-8 h-fit">
                <img src="/line.svg" alt="" />
                <p>081310416186/nau_way</p>
                <p>(Naura)</p>
              </div>
              <div className="flex items-center gap-4 mt-4 h-fit">
                <img src="/line.svg" alt="" />
                <p>081332012482/devanief</p>
                <p>(Devani)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-fit relative">
          <img className="w-full" src="/page-staff/siluets.png" alt="" />
        </section>
      </main>
    </Layout>
  );
}
