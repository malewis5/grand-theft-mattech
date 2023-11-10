import Spinner from '@/components/spinner';
import { InfoIcon } from 'lucide-react';
import localFont from 'next/font/local';

const pricedown = localFont({ src: '/pricedown.otf' });

const locations = [
  {
    slug: 'california',
    image: '/grand-theft-california.png',
    tooltip:
      "Hit the Pacific Coast Highway with your essentials: a high-def camera for those scenic shots, enough drinks to keep you cool, and comfortable kicks for any roadside explorations. Snag a sleek convertible to cruise the coastline in style. Keep an eye on the road, and don't forget to save your game – those breathtaking Pacific views are a once-in-a-lifetime loot!",
  },
  {
    slug: 'tahoe',
    image: '/grand-theft-tahoe.png',
    tooltip:
      "In Tahoe, it’s not just about the ski slopes; it's about the après-ski too. After tearing up the powder, swap those skis for a fireside at a lakeside lodge. Remember, in these parts, it's not the altitude that'll take your breath away, it's the views. Keep your camera ready and your getaway car parked, because you never know when you'll need to make a quick escape to the next panoramic spot.",
  },
  {
    slug: 'utah',
    image: '/grand-theft-utah.png',
    tooltip:
      "Gear up for Utah's epic terrain with essentials: a trusty camera, hydration for the desert, and solid boots for exploring. Rent a rugged ride for the unbeaten paths and keep your map handy—unlike Los Santos, you don't get a second chance to witness Utah's natural masterpieces!",
  },
  {
    slug: 'death-valley',
    image: '/grand-theft-death-valley.png',
    tooltip:
      "Gear up for Death Valley's extreme environment with key essentials: a durable camera, ample water for the arid climate, and robust boots for tough terrains. Rent a sturdy vehicle for rugged landscapes and keep your map close—unlike virtual worlds, Death Valley's stark beauty offers no respawns or reloads!",
  },
];

export default function Home({ params }: { params: { slug: string } }) {
  return (
    <section
      className='w-full h-[100svh] bg-cover bg-no-repeat bg-center bg-black relative'
      style={{
        backgroundImage: `url('/grand-theft-${params.slug}.png')`,
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
          {params.slug.toUpperCase()}
        </h1>
        <div className='absolute bottom-0 flex flex-col md:flex-row justify-between w-full'>
          <div className='font-sans text-white flex'>
            <div className='bg-black bg-opacity-60 border-none text-white p-2 m-3'>
              <div className='flex items-center max-w-md'>
                <InfoIcon className='text-lg mr-2 flex-shrink-0 self-start' />
                <p className='text-left'>
                  {
                    locations.find((location) => location.slug === params.slug)
                      ?.tooltip
                  }
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
