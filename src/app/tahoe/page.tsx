import Spinner from '@/components/spinner';
import { InfoIcon } from 'lucide-react';
import localFont from 'next/font/local';

const pricedown = localFont({ src: '/pricedown.otf' });

export default function Home() {
  return (
    <section
      className='w-full h-[100svh] bg-cover bg-no-repeat bg-center bg-black relative'
      style={{
        backgroundImage: `url('/grand-theft-tahoe.png')`,
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
          TAHOE
        </h1>
        <div className='absolute bottom-0 flex flex-col md:flex-row justify-between w-full'>
          <div className='font-sans text-white flex'>
            <div className='bg-black bg-opacity-60 border-none text-white p-2 m-3'>
              <div className='flex items-center max-w-md'>
                <InfoIcon className='text-lg mr-2 flex-shrink-0 self-start' />
                <p className='text-left'>
                  In Tahoe, it’s not just about the ski slopes; it&apos;s about
                  the après-ski too. After tearing up the powder, swap those
                  skis for a fireside at a lakeside lodge. Remember, in these
                  parts, it&apos;s not the altitude that&apos;ll take your
                  breath away, it&apos;s the views. Keep your camera ready and
                  your getaway car parked, because you never know when
                  you&apos;ll need to make a quick escape to the next panoramic
                  spot.
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
