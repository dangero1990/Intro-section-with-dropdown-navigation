import desktopHeroImg from '../assets/image-hero-desktop.png';
import audiophile from '../assets/client-audiophile.svg';
import databiz from '../assets/client-databiz.svg';
import maker from '../assets/client-maker.svg';
import meet from '../assets/client-meet.svg';
import mobileHeroImg from '../assets/image-hero-mobile.png';
import clsx from 'clsx';

type IconType = {
  icon: string;
  alt: string;
};

type IconsType = {
  icons: IconType[];
};

type MainType = {
  windowSize: number;
};

function Icon({ icons }: IconsType) {
  return icons.map((icon, index) => (
    <img
      key={index}
      src={icon.icon}
      alt={icon.alt}
      className='min-w-[0px] w-auto object-contain shrink grow'
    />
  ));
}

function Main({ windowSize }: MainType) {
  return (
    <main
      className={clsx('w-[80%] m-auto grid', {
        'grid-rows-2': windowSize <= 768,
        'grid-cols-2': windowSize > 768,
      })}
    >
      <img
        src={mobileHeroImg}
        alt='Hero Image'
        className='md:hidden'
      />
      <div
        className={clsx('grid grid-rows-[2fr,1fr,1fr,1fr]', {
          'place-items-start pr-32': windowSize > 768,
          'place-items-center text-center': windowSize <= 768,
        })}
      >
        <h1 className='font-b text-6xl mr-auto place-self-end'>Make remote work</h1>
        <p className='place-self-center'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button className='bg-AlmostBlack text-white py-4 px-8 rounded-xl w-max font-b'>Learn more</button>
        <div className='flex gap-8 w-[100%] place-self-end'>
          <Icon
            icons={[
              { icon: audiophile, alt: 'audiophile' },
              { icon: databiz, alt: 'databiz' },
              { icon: maker, alt: 'maker' },
              { icon: meet, alt: 'meet' },
            ]}
          />
        </div>
      </div>
      <img
        src={desktopHeroImg}
        alt='Hero Image'
        className={clsx('', {
          block: windowSize > 768,
          hidden: windowSize <= 768,
        })}
      />
    </main>
  );
}

export default Main;
