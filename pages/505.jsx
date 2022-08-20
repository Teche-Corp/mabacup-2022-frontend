import Head from "next/head";

export default function Error505() {
  return (
    <>
      <Head>
        <title>505</title>
        <meta name='description' content='Maba Cup merupakan event tahunan yang diselenggarakan oleh Departemen Event Lembaga Minat Bakat ITS. Memiliki motto “Dari maba, oleh maba, dan untuk maba”, event ini terdiri dari pelatihan manajerial dan berbagai perlombaan.' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="NwW-YP_XvE9FoX0hDVTkQescB9ExbBnbA5wjDySEu3U" />
        <link rel='icon' href='/mabacup-logo.svg' />
      </Head>
      <div className="bg-[url('/505.png')] h-screen w-screen bg-cover bg-center">
        <div className="flex flex-col justify-center items-center text-center text-white gap-y-6 pt-52 xl:pt-72">
          <h1 className="text-5xl md:text-8xl font-primary font-bold">505</h1>
          <h2 className="text-xl md:text-4xl font-secondary font-medium">Internal Service Error</h2>
        </div>
      </div>
    </>
  )
}
