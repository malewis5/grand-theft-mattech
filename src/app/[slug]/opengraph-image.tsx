import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Grand Theft MatTech';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

const getPricedown = async () => {
  const response = await fetch(new URL('./pricedown.otf', import.meta.url));
  const pricedown = await response.arrayBuffer();

  return pricedown;
};
// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url('https://grand-theft-mattech.vercel.app/grand-theft-${params.slug}.png')`,
        }}
      >
        <h1
          style={{
            fontFamily: 'pricedown',
            fontSize: '4rem',
            color: 'white',
            margin: 0,
            textShadow:
              '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000',
          }}
        >
          MatTech:
        </h1>

        <h1
          style={{
            fontFamily: 'pricedown',
            fontSize: '4rem',
            color: 'white',
            textShadow:
              '-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000',
            margin: 0,
          }}
        >
          {params.slug.toUpperCase()}
        </h1>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'pricedown',
          data: await getPricedown(),
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
