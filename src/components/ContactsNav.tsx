import {NavLink} from 'react-router-dom';

const ContactsNav = () =>{
    const active : string = 'py-3 px-3 bg-[#0e7490] no-underline rounded';
    const inactive : string = 'py-3 p-3 bg-[#374151] no-underline rounded hover:bg-[#0e7490]';
    const activeClassHandler=({isActive} : {isActive : boolean}) =>{
        return isActive ? active : inactive;
    }
    return (
        <header className='flex justify-center mt-10'>
      <nav>
        <ul className='flex gap-x-5'>
          <li>
            <NavLink to="/contacts" end className={activeClassHandler}>All Contacts</NavLink>
          </li>
          <li>
            <NavLink to={'new'} className={activeClassHandler}>New Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    )
}

export default ContactsNav;