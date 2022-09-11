import axios from "axios";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import Header from "../components/Header";
import Loading from "./Loading";

export default function Announcement() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    axios
      .get(`https://mabacup-its.com:8081/api/pengumuman/${value}`)
      .then((res) => {
        if (res.data.data.status === "accepted") {
          setPage(2);

          setData(res?.data.data);
          toast.success("Selamat anda diterima");
        } else if (res.data.data.status === "rejected") {
          setPage(3);
          setData(res?.data.data);
          toast.error("Maaf anda tidak lolos");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handleKembali = () => {
    setValue("");
    setPage(1);
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        handleClick();
        setLoading(false);
      }, 5000);
    }
  }, [loading]);

  if (loading) return <Loading />;
  return (
    <>
      <Header title='Pengumuman | Mabacup ITS 2022' />
      <Toaster
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <div className='min-h-screen w-screen bg-[#E1EFF2] flex flex-col '>
        {/*  */}
        <div className='form-staff w-full h-48 p-6 relative flex flex-col md:flex-row items-center gap-2 md:gap-12 px-12'>
          <img className='w-16 md:w-28' src='/mabacup.svg' alt='Mabacup' />
          <h1 className='text-center md:text-left mt-4 font-secondary text-white font-semibold text-xl md:text-4xl relative z-10'>
            Pengumuman Lolos Staff <br />
            Mabacup 2022
          </h1>

          <img
            className='absolute md:w-48 w-24 top-0 right-8'
            src='/form-staff/ikan-form-staff.png'
            alt=''
          />
          <img
            className='absolute md:w-32 w-16 bottom-0 right-72'
            src='/form-staff/ikan-secondary-form-staff.png'
            alt=''
          />
          <img
            className='absolute bottom-0 right-0 md:w-64 w-32'
            src='/form-staff/building-form-staff.png'
            alt=''
          />
        </div>
        <div
          className={`${
            page === 1 ? "block" : "hidden"
          } w-10/12 lg:w-1/2 h-1/2 mx-auto my-auto bg-white rounded-xl overflow-hidden`}
        >
          <div className='bg-[#C5D8EB] h-max w-full '>
            <div className='flex items-center h-full md:pl-6 py-4 p-4'>
              <h1 className='text-[#5189C4] font-secondary font-bold text-lg md:text-xl'>
                Selamat datang, silakan cari NRP kamu disini !
              </h1>
            </div>
          </div>
          <div className='md:px-12 px-6 py-6 flex flex-col gap-4'>
            <h1 className='font-secondary font-medium'>Masukkan NRP Anda</h1>
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder='Masukkan NRP Disini'
              className='border-2 w-full h-12 pl-2 rounded-lg'
              type='text'
            />
            <button
              onClick={() => setLoading(true)}
              className='font-secondary w-max bg-[#5189C4] border-2 border-[#5189C4] rounded-lg text-white px-6 py-3 hover:border-[#5189C4] hover:bg-white hover:text-[#5189C4]'
            >
              Lihat hasil seleksi
            </button>
          </div>
        </div>
        <div
          className={`${
            page === 2 ? "block" : "hidden"
          } md:w-4/5 w-[90%] h-max mx-auto  bg-white rounded-xl overflow-hidden md:my-20 my-10 `}
        >
          <div className='bg-[#C0DBCE] md:h-22 h-30 px-6 py-6'>
            <h1 className='text-[#43936C] font-secondary md:text-2xl text-xl font-semibold '>
              Selamat! Kamu terpilih untuk menjadi staff Maba Cup 2022
            </h1>
          </div>
          <div className=' h-full md:p-10 p-6'>
            <h1 className='font-secondary md:text-3xl text-2xl font-semibold'>
              {data.nama}
            </h1>
            <div>
              <table className='table-auto border-spacing-4 p-4 mt-4'>
                <tbody>
                  <tr>
                    <td className='text-neutral-500'>NRP</td>
                    <td className='text-neutral-500'>
                      :{" "}
                      <span className='text-black font-semibold'>
                        {data.nrp}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-neutral-500'>
                      Asal Departemen &nbsp; &nbsp;
                    </td>
                    <td className='text-neutral-500'>
                      :{" "}
                      <span className='text-black font-semibold'>
                        {data.departemen}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-neutral-500'>Divisi / Subdivisi</td>
                    <td className='capitalize text-neutral-500'>
                      :{" "}
                      <span className='text-black font-semibold'>
                        {data.divisi_diterima}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <p className='mt-4 text-base text-[#404040]'>
                Petualangan sesungguhnya telah dimulai! Kalian &apos;The
                Adventure Seeker&apos; adalah ratusan dari ribuan pendaftar yang
                berhasil. Sampai jumpa di Welcome Party Maba Cup 2022 dan kami
                tunggu kontribusi nyata kamu!
                <br />
                Untuk menambah euforia petualangan kamu mempunyai misi untuk
                menghubungi Kadiv atau Kasubdiv divisi masing-masing, jangan
                sampai salah divisi yaa!
                <br />
                <Link
                  className='cursor-pointer'
                  href={
                    "https://drive.google.com/file/d/1EArLceOPW75TDzlejppsGEh2KfC-6iB4/view?usp=drivesdk"
                  }
                >
                  <span className='font-semibold cursor-pointer underline text-[#276CB6] mt-2'>
                    https://mabacup-its.com/KontakKadivKasubdiv
                  </span>
                </Link>
              </p>
            </div>
            <button
              onClick={handleKembali}
              className='px-3 py-2 rounded-lg mt-8 bg-[#5189C4] text-white border-2 border-[#5189C4] hover:text-[#5189C4] hover:bg-white'
            >
              Kembali ke laman pencarian
            </button>
          </div>
        </div>

        {/* Ditolak */}
        <div
          className={`${
            page === 3 ? "block" : "hidden"
          } md:w-4/5 w-[90%] h-max mx-auto my-auto bg-white rounded-xl overflow-hidden `}
        >
          <div className='bg-[#FFCECB] md:h-20 h-30 px-6 py-6'>
            <h1 className='text-[#CB3A31] font-secondary md:text-2xl text-xl font-semibold '>
              Tetap semangat dan jangan putus asa yaa!
            </h1>
          </div>
          <div className=' h-full md:p-10 p-4'>
            <h1 className='font-secondary md:text-3xl text-2xl font-semibold '>
              {data.nama}
            </h1>
            <div>
              <table className='table-auto border-spacing-4 md:p-4 p-2 mt-4'>
                <tbody>
                  <tr>
                    <td className='text-neutral-500'>NRP</td>
                    <td className='text-neutral-500'>
                      :{" "}
                      <span className='text-black font-semibold'>
                        {data.nrp}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-neutral-500'>
                      Asal Departemen &nbsp; &nbsp;
                    </td>
                    <td className='text-neutral-500'>
                      :{" "}
                      <span className='text-black font-semibold'>
                        {data.departemen}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='mt-4 text-base text-[#404040]'>
              Kamu hebat karena mau mencoba! Terimakasih telah tertarik dan
              menunjukkan performa terbaik di Maba Cup 2022. Kami tunggu
              kontribusi kamu di event Maba Cup selanjutnya..
              <br />
            </p>

            <button
              onClick={handleKembali}
              className='px-4 py-3 rounded-lg mt-10 md:mt-8 lg:mt-10 bg-[#5189C4] text-white border-2 border-[#5189C4] hover:text-[#5189C4] hover:bg-white'
            >
              Kembali ke laman pencarian
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
