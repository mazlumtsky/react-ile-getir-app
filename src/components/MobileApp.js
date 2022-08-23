import React from 'react'

export default function MobileApp() {
  return (
    <div className='container mx-auto  md:px-14 lg:px-24 2xl:px-28'>

    <div className='bg-primary-brand-color bg-mobile-app flex items-center justify-between rounded-md text-white mt-7'>
      <div className='flex flex-col gap-y-3 p-10'>
        <h3 className='text-2xl font-bold tracking-tighter'>Getir'i indirin!</h3>
        <p className='font-semibold'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>

        <nav className='mt-5  md:flex gap-x-2  '>
          <a href='#'  className='transition-all hover:scale-105  '>
            <img   src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' />
          </a>
          <a href='#' className='transition-all hover:s cale-105 '>
            <img className='my-2 md:my-0 ' src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' />
          </a>
          <a href='#' className='transition-all hover:scale-105 '>
            <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' />
          </a>
        </nav>
      </div>
      <picture className="pt-6 hidden md:block sm:self-end">
        <img  src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" />
      </picture>
    </div>
    </div>
  )
}
