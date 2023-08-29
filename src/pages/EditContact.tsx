import {useSelector} from 'react-redux';
import { RootState } from '../store/store';
import { contactType } from '../data/model';
import ContactForm from "../components/ContactForm";

const EditContact = () => {
    const contacts = useSelector<RootState,contactType[]>(state => state.contact.list)

    return(
        <ContactForm contactList = {contacts}/>
    )
}

export default EditContact;