import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { AppDispatch } from '../store/store';
import { contactActions } from '../store/contactSlice';

const ContactsBaseNav = ({id} : {id : string}) =>{
    const dispatch = useDispatch<AppDispatch>();

    const deleteContactHandler =(event : any) =>{
        dispatch(contactActions.deleteContact(id));
        event.stopPropagation();
    }


    return(
        <footer className='flex gap-x-5 mt-4'>
            <Link to={`${id}/edit`} onClick={(e) => e.stopPropagation()} className='py-[0.95rem] px-[2rem] bg-[#ea580c] rounded'>
                <button>Edit</button></Link>
            <button onClick={deleteContactHandler} className='py-3 px-5 bg-[#dc2626] hover:bg-[#f59e0b] rounded'>Delete</button>
        </footer>
    )
}

export default  ContactsBaseNav;