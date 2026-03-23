import React from 'react'

function Home() {
  return (
    <div>
    <div class="bg-white py-16 px-4 sm:px-10 bg-gradient-to-r from-white via-pink-50 to-purple-50">
      <div class="max-w-screen-xl mx-auto">
        <div class="max-w-screen-md">
          <h1 class="text-slate-900 xl:text-6xl md:text-5xl text-4xl font-bold !leading-tight">The Most Modern Card Platform for Debit</h1>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 lg:gap-12 mt-6">
          <div>
            <p class="text-slate-600 text-base leading-relaxed">Explore a curated collection of ready-to-use components and design blocks, empowering you to create stunning, responsive interfaces with ease. Streamline your workflow and discover the future of web development.</p>
            <div class="mt-8 flex gap-6 items-center flex-wrap">
              <button type='button'
                class="bg-[#55F5A3] hover:bg-green-400 transition-all text-slate-900 font-semibold text-[15px] rounded-full px-6 py-3 cursor-pointer">Getting Started</button>
              <a href="javascript:void(0)" class="text-slate-900 text-[15px] font-semibold underline max-sm:block whitespace-nowrap">API Documentation</a>
            </div>

            <div class="mt-16 flex flex-wrap gap-x-8 gap-y-6">
              <img src="https://readymadeui.com/images/brand-logo1.webp" class="w-28 shrink-0" alt="brand-logo1" />
              <img src="https://readymadeui.com/images/brand-logo2.webp" class="w-28 shrink-0" alt="brand-logo2" />
              <img src="https://readymadeui.com/images/brand-logo3.webp" class="w-28 shrink-0" alt="brand-logo3" />
              <img src="https://readymadeui.com/images/brand-logo4.webp" class="w-28 shrink-0" alt="brand-logo4" />
            </div>
          </div>

          <div class="aspect-[7/4]">
            <img src='https://readymadeui.com/images/kpis-dashboard-img.webp' class="shrink-0 w-full h-full rounded-md object-contain" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
