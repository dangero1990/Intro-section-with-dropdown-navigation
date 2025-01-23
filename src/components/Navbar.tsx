import logo from '../assets/logo.svg';
import Dropdown from './Dropdown.tsx';
import todo from '../assets/icon-todo.svg';
import calendar from '../assets/icon-calendar.svg';
import reminders from '../assets/icon-reminders.svg';
import planning from '../assets/icon-planning.svg';

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
          <li className='hover:font-b'>Careers</li>
          <li className='hover:font-b'>About</li>
        </ul>
        <ul className='flex gap-8 items-center'>
          <li className='hover:font-b'>Login</li>
          <li>
            <button className='px-4 py-2 border-2 border-black rounded-xl'>Register</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
