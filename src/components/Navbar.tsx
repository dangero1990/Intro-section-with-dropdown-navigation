import logo from '../assets/logo.svg';
import Dropdown from './Dropdown.tsx';
import todo from '../assets/icon-todo.svg';
import calendar from '../assets/icon-calendar.svg';
import reminders from '../assets/icon-reminders.svg';
import planning from '../assets/icon-planning.svg';
import menu from '../assets/icon-menu.svg';
import closeMenu from '../assets/icon-close-menu.svg';

function Navbar() {
  return (
    <nav className='w-full p-8 flex '>
      <img
        src={logo}
        alt='Logo'
        className='mr-12 w-auto object-contain relative'
      />
      <button className='absolute right-8 lg:hidden md:hidden'>
        <img
          src={menu}
          alt='open menu'
        />
      </button>
      <div className='w-full flex justify-between sm:hidden'>
        <ul className='flex gap-8 items-center'>
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
        <ul className='flex gap-8 items-center'>
          <li className='cursor-pointer hover:font-b'>
            <a href=''>Login</a>
          </li>
          <li>
            <button className='px-4 py-2 border-2 border-black rounded-xl'>Register</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
