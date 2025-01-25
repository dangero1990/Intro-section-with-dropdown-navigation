import desktopHeroImg from '../assets/image-hero-desktop.png';
import audiophile from '../assets/client-audiophile.svg';
import databiz from '../assets/client-databiz.svg';
import maker from '../assets/client-maker.svg';
import meet from '../assets/client-meet.svg';

type IconType = {
  icon: string;
  alt: string;
};

type IconsType = {
  icons: IconType[];
};

function Icon({ icons }: IconsType) {
  return icons.map((icon, index) => (
    <img
      key={index}
      src={icon.icon}
      alt={icon.alt}
      className='min-w-[0px] w-auto object-contain shrink'
    />
  ));
}

function Main() {
  return (
    <main className='w-[80%] m-auto grid grid-cols-2'>
      <div className='grid grid-rows-[2fr,1fr,1fr,1fr] place-items-start pr-32'>
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
        className=''
      />
    </main>
  );
}

export default Main;
