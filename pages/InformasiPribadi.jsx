import Input from "../components/Input";
import {useForm, FormProvider} from 'react-hook-form';
export default function InformasiPribadi() {
  const methods = useForm();
  const { handleSubmit } = methods;
  return (
    <>
      <section className="bg-[#B8D1EB] w-screen flex justify-center">
        <div className="mt-10 w-3/4 md:w-1/2 bg-white rounded-3xl mx-auto">
          <img className="flex justify-center items-center w-full" src="/heroForm.png" alt="" />
          <div className="bg-white">
            <FormProvider {...methods}>
              <form action="">
                <Input
                  type='text'
                  disabled={false}
                  id='nama'
                  label="Nama"
                  placeholder="Masukkan nama anda"
                  classNameL="font-secondary font-semibold text-[16px]"
                  classNameI="font-secondary font-normal border-2 mt-1 px-3 py-2 text-black rounded-lg w-3/5 text-[16px] mx-auto"
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
                  classNameL="font-secondary font-semibold text-[16px]"
                  classNameI="font-secondary font-normal border-2 mt-1 px-3 py-2 text-black rounded-lg w-3/5 text-[16px] mx-auto"
                  validate={{
                    required: true,
                  }}
                />
                <Input
                  type='text'
                  disabled={false}
                  id='nomor_wa'
                  label="Nomor Whatsapp (+62) / ID Line"
                  placeholder="Jawaban Anda"
                  classNameL="font-secondary font-semibold text-[16px]"
                  classNameI="font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-3/5 text-[16px] mx-auto"
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
                  classNameL="font-secondary font-semibold text-[16px]"
                  classNameI="font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-3/5 text-[16px] mx-auto"
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
                  classNameL="font-secondary font-semibold text-[16px]"
                  classNameI="font-secondary font-normal border-2 mt-1 px-3 py-1 text-black rounded-lg w-3/5 text-[16px] mx-auto"
                  validate={{
                    required: true,
                  }}
                />
                <button className="font-secondary text-white bg-[#5189C4] px-6 text-[16px] py-2 mt-10">Berikutnya</button>
              </form>
            </FormProvider>
          </div>
        </div>

      </section>
    </>
  )
}