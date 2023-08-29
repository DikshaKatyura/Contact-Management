import {useSelector} from 'react-redux';
import ContactsList from "./ContactsList";
import { RootState } from '../store/store';
import { contactType } from '../data/model';


const Contacts = () => {
    const contacts = useSelector<RootState,contactType[]>(state => state.contact.list)

    return(
        <>
            <ContactsList contactList={contacts}/>       
        </>
    );
}

export default Contacts;

