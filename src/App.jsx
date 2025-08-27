import React from 'react'

const App = () => {
  return (
    <div className="flex bg-black w-full h-screen items-center justify-center">
      <div className='text-white w-[30%] h-full border border-blue-200 flex items-end'>
        <div className='px-10 py-15 flex flex-col items-start justify-start gap-4'>
          <h1 className='text-6xl font-bold'>hi. this is <br />flowerBOOM</h1>
          <p className='text-md text-gray-200 w-[80%]'>we are the creative agency behind the most popular internet content that gets screened watched by thousands if not by couple of millions on the internet.</p>
          <div className='w-full flex items-center justify-start gap-4'>
            <button className='px-10 py-3 bg-white text-black text-[20px] font-semibold cursor-pointer'>case study</button>
            <button className='px-10 border border-gray-500/40 py-3 text-white text-[20px] font-semibold hover:bg-white/20 transition-colors duration-300 cursor-pointer'>book a call</button>
          </div> 
        </div>
      </div>
      <div className='text-white w-[70%] h-full border border-pink-200'><iframe width="560" height="315" src="https://www.youtube.com/embed/gDwmYYKzin0?si=LO66IAkmibyexPBO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    </div>
      
  )
}

export default App