import React from  'react'

function NavLog() {
    return (
            <div
        id="NAV"
        className="bg-[rgba(52,_255,_85,_0.1)] flex items-center justify-between px-10 py-14 w-full h-24 gap-8"
      >
        <div className="text-4xl font-medium text-[#75ff52]">
          ELEVATE GOLF FITTING
        </div>
        <div className='flex items-center col-row gap-14 pr-10'>
        <div className="text-3xl text-[#75ff52]">
            ABOUT US
          </div>
          <div className="text-3xl text-[#75ff52]">
            HOME
          </div>
          </div>
        </div>
    )
}

export default NavLog