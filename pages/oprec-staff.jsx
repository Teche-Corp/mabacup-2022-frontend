import Input from "../components/Input";
import { useForm, FormProvider } from "react-hook-form";
import { useEffect, useState } from "react";
import TextArea from "../components/TextArea";
import SelectInput from "../components/SelectInput";
import { DEVISI } from "../lib/constant";
import { FaCheck } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

export default function InformasiPribadi() {
  const [page, setPage] = useState(1);
  const methods = useForm();
  const { handleSubmit } = methods;
  const daftar = async (data) => {
    axios
      .post("http://128.199.198.56:8081/api/create_staff", data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setPage(4);
        }
      });
  };
  function nextPage() {
    if (page < 3) {
      setPage(page + 1);
    }
  }
  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  return (
    <>
      <section className='bg-[#B8D1EB] w-full min-h-screen flex jusify-center items-center '>
        <div className='mt-10 mb-10 w-11/12 md:w-3/4 lg:w-3/5 bg-white rounded-2xl sm:rounded-3xl mx-auto overflow-hidden'>
          <div className='form-staff w-full h-72 p-6 relative'>
            <img className='w-12 md:w-16' src='mabacup-white.png' alt='' />
            <h1 className='mt-4 font-secondary text-white font-semibold text-lg md:text-2xl relative z-10'>
              Form Pendaftaran <br />
              Open Recruitment Staff
            </h1>
            <p className='mt-4 text-white text-sm md:text-base w-full md:w-3/4 leading-5 relative z-10'>
              Halo Pendaftar MABACUP 2022!
              <br /> Sebelum melanjutkan pendaftaran dibawah, harap telah
              membaca ketentuan yang berlaku dan mengisikan form sesuai dengan
              ketentuan yang ada.
            </p>
            <img
              className='absolute w-48 top-12 right-8'
              src='/form-staff/ikan-form-staff.png'
              alt=''
            />
            <img
              className='absolute w-32 bottom-0 right-72'
              src='/form-staff/ikan-secondary-form-staff.png'
              alt=''
            />
            <img
              className='absolute bottom-0 right-0 w-64'
              src='/form-staff/building-form-staff.png'
              alt=''
            />
          </div>
          {/* <img
            className='flex justify-center items-center w-full'
            src='/form/heroForm.png'
            alt=''
          /> */}
          <div className='flex justify-center w-full mt-4 items-center'>
            <div className='flex justify-between h-[2px] w-[65%] bg-[#3959A5] items-center my-9'>
              {/* Steps */}
              <div
                className={`h-8 w-8  rounded-full bg flex items-center justify-center border-2 select-none ${
                  page <= 1 ? "bg-[#D3E0FF]" : "bg-[#3959A5]"
                } border-[#3959A5] relative`}
              >
                {page <= 1 ? (
                  <p className='font-secondary text-[#3959A5]'>1</p>
                ) : (
                  <FaCheck className='text-white' />
                )}
                <p
                  className={`absolute -bottom-8 font-secondary text-center text-sm w-40 ${
                    page === 1 ? "" : "text-[#616161]"
                  }`}
                >
                  Informasi Pribadi
                </p>
              </div>
              <div
                className={`h-8 w-8  rounded-full bg flex items-center justify-center border-2 select-none ${
                  page <= 2 ? "bg-[#D3E0FF]" : "bg-[#3959A5]"
                } border-[#3959A5] relative`}
              >
                {page <= 2 ? (
                  <p className='font-secondary text-[#3959A5]'>2</p>
                ) : (
                  <FaCheck className='text-white' />
                )}
                <p
                  className={`absolute -bottom-8 font-secondary text-center text-sm w-40 select-none ${
                    page === 2 ? "" : "text-[#616161]"
                  }`}
                >
                  Pertanyaan
                </p>
              </div>
              <div
                className={`h-8 w-8  rounded-full bg flex items-center justify-center border-2 select-none ${
                  page <= 3 ? "bg-[#D3E0FF]" : "bg-[#3959A5]"
                } border-[#3959A5] relative`}
              >
                {page <= 3 ? (
                  <p className='font-secondary text-[#3959A5]'>3</p>
                ) : (
                  <FaCheck className='text-white' />
                )}
                <p
                  className={`absolute -bottom-8 font-secondary text-center text-sm w-40 ${
                    page === 3 ? "" : "text-[#616161]"
                  }`}
                >
                  Informasi Pribadi
                </p>
              </div>
            </div>
          </div>
          <div className='bg-white w-[80%] md:w-[70%] mx-auto '>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(daftar)}>
                <div className={page === 1 ? "block" : "hidden"}>
                  <Input
                    type='text'
                    disabled={false}
                    id='nama'
                    label='Nama'
                    placeholder='Masukkan nama anda'
                    classNameL='font-secondary font-semibold text-[11px] md:text-[16px] mt-4'
                    classNameI='font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px] '
                    validate={{
                      required: "Nama tidak boleh kosong",
                    }}
                  />
                  <Input
                    type='text'
                    disabled={false}
                    id='nrp'
                    label='NRP'
                    placeholder='Masukkan NRP'
                    classNameL='font-secondary font-semibold text-[11px] md:text-[16px]'
                    classNameI='font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                    validate={{
                      required: "NRP tidak boleh kosong",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Harus berupa angka",
                      },
                    }}
                  />
                  <Input
                    type='text'
                    disabled={false}
                    id='email'
                    label='Email'
                    placeholder='Masukkan Email'
                    classNameL='font-secondary font-semibold text-[11px] md:text-[16px]'
                    classNameI='font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                    validation={{
                      required: "Email tidak boleh kosong",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email tidak valid",
                      },
                    }}
                  />
                  <Input
                    type='text'
                    disabled={false}
                    id='no_telp'
                    label='Whatsapp(+62) / ID Line'
                    placeholder='Nomor Telepon diawali +62'
                    classNameL='font-secondary font-semibold text-[11px] md:text-[16px]'
                    classNameI='font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                    validate={{
                      required: "Nomor Telepon tidak boleh kosong",
                      pattern: {
                        value: /^\+628[1-9][0-9]{7,11}$/,
                        message:
                          "Nomor Telepon harus diawali +62 dan memiliki panjang 12-16 karakter",
                      },
                    }}
                  />
                  <Input
                    type='text'
                    disabled={false}
                    id='fakultas'
                    label='Fakultas'
                    placeholder='Jawaban Anda'
                    classNameL='font-secondary font-semibold text-[11px] md:text-[16px]'
                    classNameI='font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                    validate={{
                      required: "Fakultas tidak boleh kosong",
                    }}
                  />
                  <Input
                    type='text'
                    disabled={false}
                    id='departemen'
                    label='Departemen'
                    placeholder='Jawaban Anda'
                    classNameL='font-secondary font-semibold text-[11px] md:text-[16px]'
                    classNameI='font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                    validate={{
                      required: "Departemen tidak boleh kosong",
                    }}
                  />
                </div>
                <div className={page === 2 ? "block" : "hidden"}>
                  <TextArea
                    id='pertanyaan'
                    label='Apa yang kamu ketahui tentang MABA CUP?'
                    classNameL='font-semibold text-[11px] md:text-[16px] mt-4'
                    classNameT='font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                    placeholder='Jawaban anda'
                    validate={{
                      required: "Jawaban tidak boleh kosong",
                    }}
                  />
                  <TextArea
                    id='motivasi'
                    label='Motivasi mendaftar menjadi staff Maba Cup 2022 '
                    classNameL='font-semibold text-[11px] md:text-[16px] mt-4'
                    classNameT='font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                    placeholder='Jawaban anda'
                    validate={{
                      required: "Jawaban tidak boleh kosong",
                    }}
                  />
                  <SelectInput
                    id='divisi_1'
                    label='Divisi Pilihan 1'
                    defops='Pilih Divisi'
                    classNameL='font-semibold text-[11px] md:text-[16px] font-secondary'
                    classNameS='font-normal border-2 mt-1 px-3 py-3 text-black rounded-lg w-full text-[11px] md:text-[16px] bg-white'
                    options={DEVISI}
                    validate={{
                      required: "Divisi tidak boleh kosong",
                    }}
                  />
                  <TextArea
                    id='alasan_1'
                    label='Alasan memilih pilihan 1'
                    classNameL='font-semibold text-[11px] md:text-[16px]'
                    classNameT='font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                    placeholder='Jawaban anda'
                    validate={{
                      required: "Jawaban tidak boleh kosong",
                    }}
                  />
                  <SelectInput
                    id='divisi_2'
                    label='Divisi Pilihan 2'
                    defops='Pilih Divisi'
                    classNameL='font-semibold text-[11px] md:text-[16px] font-secondary'
                    classNameS='font-normal border-2 mt-1 px-3 py-3 text-black rounded-lg w-full text-[11px] md:text-[16px] bg-white '
                    options={DEVISI}
                  />
                  <TextArea
                    id='alasan_2'
                    label='Alasan memilih pilihan 2'
                    classNameL='font-semibold text-[11px] md:text-[16px]'
                    classNameT='font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                    placeholder='Jawaban anda'
                  />
                  <TextArea
                    id='kesibukan'
                    label='Kesibukan Saat Ini '
                    classNameL='font-semibold text-[11px] md:text-[16px]'
                    classNameT='font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                    placeholder='Jawaban anda'
                  />
                </div>
                <div className={page === 3 ? "block" : "hidden"}>
                  <Input
                    type='text'
                    disabled={false}
                    id='link_bukti'
                    label='Link Gdrive Upload Twibbon, Share Poster MABA CUP,  Follow Instagram &amp; Tiktok'
                    placeholder='Jawaban Anda'
                    classNameL='font-secondary font-semibold text-[11px] md:text-[16px] mt-4'
                    classNameI='font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                    validate={{
                      required: true,
                    }}
                  />
                  <Input
                    type='text'
                    disabled={false}
                    id='link_cv'
                    label='Link CV ATS / Kreatif'
                    placeholder='Jawaban Anda'
                    classNameL='font-secondary font-semibold text-[11px] md:text-[16px]'
                    classNameI='font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                    validate={{
                      required: true,
                    }}
                  />
                  <div>
                    <Input
                      type='text'
                      disabled={false}
                      id='link_portfolio'
                      label='Link Portofolio'
                      placeholder='Jawaban Anda'
                      classNameL='font-secondary font-semibold text-[11px] md:text-[16px]'
                      classNameI='font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                      validate={{
                        required: true,
                      }}
                    />
                    <p className='font-secondary text-xs mt-2'>
                      <span className='text-red-500'>* Catatan </span>:
                      Dikhususkan untuk pendaftar yang mendaftar divisi Desain,
                      Dokum, dan Publikasi
                    </p>
                  </div>
                  <Input
                    type='text'
                    disabled={false}
                    id='link_krsm'
                    label='Link KRSM'
                    placeholder='Jawaban Anda'
                    classNameL='font-secondary font-semibold text-[11px] md:text-[16px]'
                    classNameI='font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                    validate={{
                      required: true,
                    }}
                  />
                  <div>
                    <Input
                      type='text'
                      disabled={false}
                      id='sponsor'
                      label='Apakah memiliki kenalan sponsorship?'
                      placeholder='Jawaban Anda'
                      classNameL='font-secondary font-semibold text-[11px] md:text-[16px]'
                      classNameI='font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]'
                      validate={{
                        required: true,
                      }}
                    />
                  </div>
                </div>
                <div className={page === 4 ? "block" : "hidden"}>
                  <div className='text-center'>
                    <h2 className='mt-8 font-secondary text-2xl sm:text-3xl font-bold'>
                      Form Pendaftaran MABACUP 2022 Berhasil Diisi!
                    </h2>
                    <p className='mt-4 font-secondary text-base sm:text-lg text-[#404040]'>
                      Terimakasih Telah Berpartisipasi bersama dengan MABACUP,
                      jangan lupa untuk pantengin terus instagram @MABACUP2022
                      untuk mendapatkan info selanjutnya!
                    </p>
                  </div>
                </div>
                <div
                  className={`flex justify-end gap-x-3 ${
                    page === 4 ? "hidden" : ""
                  }`}
                >
                  <div className={page === 1 ? "hidden" : ""}>
                    <p
                      className='font-secondary text-[#5189C4] border-2 border-[#5189C4] bg-white px-6 text-[11px] md:text-[16px] py-2 mt-5 rounded-md mb-10 cursor-pointer hover:text-white hover:bg-[#5189C4] hover:border-2 hover:border-solid hover:border-white'
                      onClick={() => prevPage()}
                    >
                      Kembali{" "}
                    </p>
                  </div>
                  <div className={page === 3 ? "hidden" : ""}>
                    <p
                      className='font-secondary text-white bg-[#5189C4] px-6 text-[11px] md:text-[16px] py-2 mt-5 rounded-md mb-10 cursor-pointer hover:text-[#5189C4] hover:bg-white border-2 border-solid border-[#5189C4]'
                      onClick={() => nextPage()}
                    >
                      Berikutnya{" "}
                    </p>
                  </div>
                  <div className={page === 3 ? "" : "hidden"}>
                    <button
                      className='font-secondary text-white bg-[#5189C4] px-6 text-[11px] md:text-[16px] py-2 mt-5 rounded-md mb-10 cursor-pointer hover:text-[#5189C4] hover:bg-white border-2 border-solid border-[#5189C4] '
                      type='submit'
                    >
                      Daftar{" "}
                    </button>
                  </div>
                </div>
                {page === 4 && (
                  <div>
                    <Link href={"/"}>
                      <a className='my-8 px-4 py-2 rounded-lg font-secondary text-white text-[16px] w-fit inline-block flex justify-center mx-auto bg-[#5189C4] hover:text-[#5189C4] hover:bg-white border-2 border-solid border-[#5189C4]'>
                        Kembali Ke Beranda
                      </a>
                    </Link>
                  </div>
                )}
              </form>
            </FormProvider>
          </div>
        </div>
      </section>
    </>
  );
}
