import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Mabacup 2022</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/mabacup-logo.svg' />
      </Head>

      <main className=''>
        <p className='font-secondary '>Font Poppins</p>
        <p className='font-primary '>Font Poppins</p>
        <p className='font-primary_outline'>Font Poppins</p>
        <p className='font-primary_shadow'>Font Poppins</p>
      </main>
    </div>
  );
}
