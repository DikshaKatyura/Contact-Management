import {Outlet} from 'react-router-dom';
import ContactsNav from '../components/ContactsNav';

const ContactsRoot =() =>{
    return (
        <>
        <ContactsNav/>
        <Outlet />
        </>
    );
}

export default ContactsRoot;