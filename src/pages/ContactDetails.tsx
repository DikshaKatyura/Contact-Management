import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContactItem from '../components/ContactItem';
import { RootState } from '../store/store';
import { contactType } from '../data/model';

const ContactDetails = () => {

    const param = useParams();
    const contacts = useSelector<RootState,contactType[]>(state => state.contact.list);
    const contactList = contacts.filter(item => item.id === param.contactId);
    
return (
    <>
    {contactList.map(item => <ContactItem key={item.id} items = {item}></ContactItem>)}
    </>
    
)
}

export default ContactDetails;