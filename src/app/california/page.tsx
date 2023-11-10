import Spinner from '@/components/spinner';
import { Card, CardContent } from '@/components/ui/card';
import { InfoIcon } from 'lucide-react';
import localFont from 'next/font/local';

const pricedown = localFont({ src: '/pricedown.otf' });

export default function Home() {
  return (
    <section
      className='w-full h-[100svh] bg-cover bg-no-repeat bg-center bg-black relative'
      style={{
        backgroundImage: `url('/grand-theft-california.png')`,
      }}
    >
      <div className='container h-full flex flex-col items-center justify-center text-center p-4'>
        <h1
          className={`text-6xl md:text-9xl font-bold text-white ${pricedown.className} text-stroke`}
        >
          MatTech:
        </h1>

        <h1
          className={`text-6xl md:text-9xl font-bold text-white ${pricedown.className} text-stroke`}
        >
          CALIFORNIA
        </h1>
        <div className='absolute bottom-0 flex flex-col md:flex-row justify-between w-full'>
          <div className='font-sans text-white flex'>
            <div className='bg-black bg-opacity-60 border-none text-white p-2 m-3'>
              <div className='flex items-center max-w-md'>
                <InfoIcon className='text-lg mr-2 flex-shrink-0 self-start' />
                <p className='text-left'>
                  Gear up for Utah&apos;s epic terrain with essentials: a trusty
                  camera, hydration for the desert, and solid boots for
                  exploring. Rent a rugged ride for the unbeaten paths and keep
                  your map handy—unlike Los Santos, you don’t get a second
                  chance to witness Utah&apos;s natural masterpieces!
                </p>
              </div>
            </div>
          </div>
          <div className='font-sans text-white m-3 flex items-end justify-end'>
            <div className='flex items-center'>
              <h2 className='mr-2'>Loading Story Mode</h2>
              <Spinner />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
