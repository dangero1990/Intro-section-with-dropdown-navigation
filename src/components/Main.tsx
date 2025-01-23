import desktopHeroImg from '../assets/image-hero-desktop.png';
import audiophile from '../assets/client-audiophile.svg';
import databiz from '../assets/client-databiz.svg';
import maker from '../assets/client-maker.svg';
import meet from '../assets/client-meet.svg';

function Main() {
  return (
    <main>
      <div>
        <h1 className='font-b text-4xl'>Make remote work</h1>
        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
      </div>
      <img
        src={desktopHeroImg}
        alt=''
      />
    </main>
  );
}

export default Main;
