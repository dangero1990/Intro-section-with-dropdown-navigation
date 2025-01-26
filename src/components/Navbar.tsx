import logo from '../assets/logo.svg';
import Dropdown from './Dropdown.tsx';
import todo from '../assets/icon-todo.svg';
import calendar from '../assets/icon-calendar.svg';
import reminders from '../assets/icon-reminders.svg';
import planning from '../assets/icon-planning.svg';
import menu from '../assets/icon-menu.svg';
import closeMenu from '../assets/icon-close-menu.svg';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const checkScreenSize = () => {
      setWindowSize(window.innerWidth);
    };

    windowSize <= 768 ? setMenuOpen(false) : setMenuOpen(true);

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [windowSize]);

  return (
    <nav className='w-full p-8 flex'>
      <img
        src={logo}
        alt='Logo'
        className='mr-12 w-auto object-contain relative'
      />
      <button className='absolute right-8 md:hidden z-10'>
        <img
          src={!menuOpen ? menu : closeMenu}
          alt='menu control'
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </button>
      <div className={menuOpen && windowSize <= 768 ? 'bg-AlmostBlack w-screen h-screen top-0 left-0 absolute opacity-50' : 'hidden'}></div>
      <div
        className={clsx('md:w-full md:flex md:justify-between', {
          'absolute flex-col z-3 bg-white w-1/2 h-screen top-0 right-0 p-4': windowSize <= 768,
          hidden: !menuOpen,
        })}
      >
        <ul
          className={clsx('flex gap-8 md:items-center', {
            'flex-col mt-24 p-4': windowSize <= 768,
          })}
        >
          <Dropdown
            header='Features'
            list={[
              { icon: todo, item: 'Todo List' },
              { icon: calendar, item: 'Calendar' },
              { icon: reminders, item: 'Reminders' },
              { icon: planning, item: 'Planning' },
            ]}
          />
          <Dropdown
            header='Company'
            list={[{ item: 'History' }, { item: 'Our team' }, { item: 'Blog' }]}
          />
          <li className='cursor-pointer hover:font-b'>
            <a href=''>Careers</a>
          </li>
          <li className='cursor-pointer hover:font-b'>
            <a href=''>About</a>
          </li>
        </ul>
        <ul
          className={clsx('flex md:gap-8 items-center', {
            'flex-col gap-4 p-2': windowSize <= 768,
          })}
        >
          <li className='cursor-pointer hover:font-b'>
            <a href=''>Login</a>
          </li>
          <li className='w-full'>
            <button className='px-4 py-2 border-2 border-black rounded-xl w-full'>Register</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
