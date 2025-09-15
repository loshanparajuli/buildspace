const App = () => {
  return (
    <main className='w-full max-w-screen-2xl bg-black relative  h-[100dvh]'>
        {/* icon part*/}
        <div className="fixed top-0 left-0 z-30 p-4">
          <img src="/flowerboom.svg" alt="FlowerBoom Logo" width="44" height="44" />
        </div>

        {/* main content */}
    <div className="flex  flex-col-reverse md:flex-row w-full h-full md:items-center md:justify-center">
     
        {/* left part */}
      <div className='text-white lg:px-10 p-[24px]  lg:p-0 lg:pb-10 w-[100%] xl:w-[39%] h-auto md:h-full flex items-start sm:items-end'>
        <div className=' flex flex-col items-center lg:items-start justify-start gap-4 lg:gap-6'>
          <div className="flex flex-col sm:flex-row sm:gap-2  lg:gap-0 lg:flex-col">
            <h1 className='text-[34px] md:text-[40px] lg:text-[64px] font-extrabold whitespace-nowrap leading-9 md:leading-10 lg:leading-16 text-center sm:text-left tracking-tighter'>hi. this is {" "} </h1>
            <h1 className='text-[34px] md:text-[40px] lg:text-[64px] font-extrabold leading-9 md:leading-10 lg:leading-16 text-center sm:text-left tracking-tighter'>flowerBOOM.</h1>
          </div>
          <p className='text-md font-medium text-[14px] sm:text-[16px] lg:text-[17px] leading-5 lg:leading-6 text-center md:text-left text-[#9E9E9E]'>we are the creative agency behind the most popular internet content that gets screened watched by thousands if not by couple of millions on the internet.</p>
          <div className='w-full flex flex-col md:flex-row items-center justify-center lg:justify-start gap-2.5 md:gap-4 text-[16px] lg:text-[20px]'>
            <button className='px-[24px] py-[12px] lg:py-[10px] w-full bg-white text-black font-bold cursor-pointer'>case study</button>
            <button className='px-[24px] py-[12px] lg:py-[10px] border border-gray-500/40 w-full text-white font-bold hover:bg-white/10 transition-colors duration-300 cursor-pointer'>book a call</button>
          </div> 
        </div>
      </div>

      {/* right part */}
      <div className='text-white w-[100%] xl:w-[61%] h-[100vh] relative'>
        <div className='w-full h-full  absolute bg-black/40'></div>
        <video src="/flowerboomVideo.mp4"  className='w-full h-full object-cover' autoPlay loop muted></video>
      </div>
    </div>
    </main>
  )
}

export default App
