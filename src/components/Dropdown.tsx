import downArrow from '../assets/icon-arrow-down.svg';
import upArrow from '../assets/icon-arrow-up.svg';
import { useState } from 'react';

type ItemType = {
  icon?: string;
  item: string;
};

type DropdownType = {
  header: string;
  list: ItemType[];
};

function Dropdown({ header, list }: DropdownType) {
  const [clicked, setClicked] = useState(false);
  return (
    <li
      className='relative'
      onClick={() => setClicked(!clicked)}
    >
      <a className='cursor-pointer hover:font-b'>{header}</a>
      <img
        src={clicked ? upArrow : downArrow}
        className='inline ml-2'
      ></img>
      <ul className={!clicked ? 'hidden' : 'block md:absolute md:right-0 md:top-8 w-max md:p-4 bg-white rounded-xl mt-4'}>
        {list.map((item: ItemType, index: number) => (
          <li
            key={index}
            className='p-2 cursor-pointer hover:font-b'
          >
            {item.icon && (
              <img
                src={item.icon}
                alt={`${item.item} icon`}
                className='inline mr-4'
              />
            )}
            <a href=''>{item.item}</a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Dropdown;
