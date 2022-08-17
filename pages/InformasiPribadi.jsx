import Input from "../components/Input";
import {useForm, FormProvider} from 'react-hook-form';
import { useState } from "react";
export default function InformasiPribadi() {
  const [page, setPage] = useState(1);
  const methods = useForm();
  const { handleSubmit } = methods;
  function daftar (data){
    console.log(data);
  }
  return (
    <>
      <section className="bg-[#B8D1EB] w-full min-h-screen flex jusify-center items-center">
        <div className="mt-10 mb-10 w-3/4 md:w-1/2 bg-white rounded-3xl mx-auto">
          <img className="flex justify-center items-center w-full" src="/form/heroForm.png" alt="" />
          <img className="w-3/4 mx-auto pt-5" src="/form/1.png" alt="" />
          <div className="bg-white w-3/5 mx-auto">
            <FormProvider {...methods}>
              <form action={handleSubmit(daftar)}>
                <div className={page === 1 ? "block" : "hidden" }>
                  <Input
                    type='text'
                    disabled={false}
                    id='nama'
                    label="Nama"
                    placeholder="Masukkan nama anda"
                    classNameL="font-secondary font-semibold text-[11px] md:text-[16px]"
                    classNameI="font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]"
                    validate={{
                      required: true,
                    }}
                  />
                  <Input
                    type='text'
                    disabled={false}
                    id='nrp'
                    label="NRP"
                    placeholder="Masukkan NRP"
                    classNameL="font-secondary font-semibold text-[11px] md:text-[16px]"
                    classNameI="font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]"
                    validate={{
                      required: true,
                    }}
                  />
                  <Input
                    type='text'
                    disabled={false}
                    id='nomor_wa'
                    label="Whatsapp(+62) / ID Line"
                    placeholder="Jawaban Anda"
                    classNameL="font-secondary font-semibold text-[11px] md:text-[16px]"
                    classNameI="font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]"
                    validate={{
                      required: true,
                    }}
                  />
                  <Input
                    type='text'
                    disabled={false}
                    id='faculty'
                    label="Fakultas"
                    placeholder="Jawaban Anda"
                    classNameL="font-secondary font-semibold text-[11px] md:text-[16px]"
                    classNameI="font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]"
                    validate={{
                      required: true,
                    }}
                  />
                  <Input
                    type='text'
                    disabled={false}
                    id='department'
                    label="Departemen"
                    placeholder="Jawaban Anda"
                    classNameL="font-secondary font-semibold text-[11px] md:text-[16px]"
                    classNameI="font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-full text-[11px] md:text-[16px]"
                    validate={{
                      required: true,
                    }}
                  />
                  <div className={page === 2 ? 'block': 'hidden'}>

                  </div>
                </div>
                <div className="w-fit mx-auto">
                  <button className="font-secondary text-white bg-[#5189C4] px-6 text-[11px] md:text-[16px] py-2 mt-5 rounded-full mb-10" onClick={(prev) => setPage(prev +1)}
                  onSubmit="button">Berikutnya</button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>

      </section>
    </>
  )
}