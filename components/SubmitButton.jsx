
import { useState } from 'react';
export default function SubmitButton() {
  const [showModal, setShowModal] = useState(false);

 

  return (
    <>
      <div
				className='font-secondary text-white bg-[#5189C4] px-6 text-[11px] md:text-[16px] py-2 mt-5  mb-10 cursor-pointer hover:text-[#5189C4] hover:bg-white border-2 border-solid border-[#5189C4] '
				onClick={() => setShowModal(true)}
      >
        Daftar
      </div>

      {showModal && (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur'>
            <div className='relative md:w-auto my-6 mx-auto  '>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col max-w-[90%] bg-white '>
                {/*header*/}
                <div className='relative w-full p-4'>
                  <h3 className='text-xl font-semibold items-center text-center'>
										Konfirmasi Pendaftaran
                  </h3>
                  <span
                    className='absolute right-5 top-1 text-xl font-bold cursor-pointer'
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </span>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
								{/*body*/}
								<div className='relative p-4 w-full text-center'>
									<p>Apakah anda yakin data yang anda masukan sudah benar ?</p>
								</div>

                {/*footer*/}
                <div className='flex items-center justify-end  border-t border-solid border-[#F5F5F5] bg-[#F5F5F5] rounded-b gap-x-2 py-2 px-1'>
                  <button
                    className='bg-none text-blue-500 background-transparent font-bold uppercase w-1/3 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-md hover:bg-gray-100  border border-blue-500'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Batal
                  </button>
                  <button
                    className='bg-nst-orange text-white bg-blue-500  font-bold uppercase text-sm w-1/3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-gray-400 hover:text-white'
                    type='submit'
                  >
                    Daftar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      )}
    </>
  );
}
