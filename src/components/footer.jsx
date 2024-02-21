import React from  'react'

function Footer() {
    return (
<div
id="FOOTER"
className="bg-[rgba(52,_255,_85,_0.1)] flex justify-between items-center w-full h-24 py-4 px-4 "
>
<div className="text-center text-2xl text-[#75ff52]">
  Copyright © 2024 Elevate Golf Fitting
</div>
<div className="flex items-center text-2xl text-[#75ff52] gap-1 my-2">
  <span>All Rights Reserved</span>
  <div>|</div>
  <a href="#" className="underline">
    Terms and Conditions
  </a>
  <div>|</div>
  <a href="#" className="underline">
    Privacy Policy
  </a>
</div>
</div>
    )
}

export default Footer