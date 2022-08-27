export default function Loading() {
  return (
    <div className='w-full h-screen loading-page'>
      <div className='flex flex-col items-center justify-center min-h-screen bg-dark text-light '>
        <img className='w-24 animate-spin' src='/loading-spin.png' alt='' />
        <img
          className='absolute top-1/2 -translate-y-[120%] w-16'
          src='/loading-img.png'
          alt=''
        />
        <p className='font-secondary text-white font-medium mt-8'>Loading...</p>
      </div>
    </div>
  );
}
