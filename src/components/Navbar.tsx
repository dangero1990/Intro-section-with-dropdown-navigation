import logo from '../assets/logo.svg';
import downArrow from '../assets/icon-arrow-down.svg';

function Navbar() {
  return (
    <nav className='w-full p-8 flex'>
      <img
        src={logo}
        alt='Logo'
        className='mr-12 w-auto object-contain'
      />
      <div className='w-full flex justify-between'>
        <ul className='flex gap-8 items-center'>
          <li>
            Features
            <img
              src={downArrow}
              className='inline ml-2'
            ></img>
          </li>
          <li>
            Company
            <img
              src={downArrow}
              className='inline ml-2'
            ></img>
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <ul className='flex gap-8 items-center'>
          <li>Login</li>
          <li>
            <button className='px-4 py-2 border-2 border-black rounded-xl'>Register</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
