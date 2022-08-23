import Head from "next/head"
export default function Header ({title =''}){

return (
  <Head>
    <title>{title}</title>
    <meta
      name='description'
      content='Maba Cup merupakan event tahunan yang diselenggarakan oleh Departemen Event Lembaga Minat Bakat ITS. Memiliki motto “Dari maba, oleh maba, dan untuk maba”, event ini terdiri dari pelatihan manajerial dan berbagai perlombaan.'
    />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <meta
      name='google-site-verification'
      content='NwW-YP_XvE9FoX0hDVTkQescB9ExbBnbA5wjDySEu3U'
    />
    <link rel='icon' href='/mabacup-logo.svg' />
  </Head>
  )
}