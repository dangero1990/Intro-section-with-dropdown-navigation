import desktopHeroImg from '../assets/image-hero-desktop.png';
import audiophile from '../assets/client-audiophile.svg';
import databiz from '../assets/client-databiz.svg';
import maker from '../assets/client-maker.svg';
import meet from '../assets/client-meet.svg';

type IconType = {
  icons: string[];
};

function Icon({ icons }: IconType) {
  return icons.map((icon: string, index: number) => (
    <img
      key={index}
      src={icon}
      alt=''
      className='w-auto object-contain'
    />
  ));
}

function Main() {
  return (
    <main className='w-[80%] m-auto grid'>
      <div>
        <h1 className='font-b text-4xl'>Make remote work</h1>
        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <div className='flex gap-8'>
          <Icon icons={[audiophile, databiz, maker, meet]} />
        </div>
      </div>
      <img
        src={desktopHeroImg}
        alt='Hero Image'
      />
    </main>
  );
}

export default Main;
