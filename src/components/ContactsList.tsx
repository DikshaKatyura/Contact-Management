import {FC} from 'react';
import {Link} from 'react-router-dom';
import ContactsBaseNav from './ContactsBaseNav';
import { contactType } from '../data/model';

const ContactsList:FC<{contactList : contactType[]}> = (props) => {
    
return(

    <>
    {!props.contactList.length && <div className='flex justify-center mt-20'>
        <p className='font-bold text-lg'>No Contact Found!</p>
        </div>}
   <div className="flex justify-center mt-20 ">
        <ul className='grid grid-cols-2 gap-x-5'>
            {props.contactList.map(item => <div key={item.id}><Link to={item.id} >
                
                    <div className='rounded border border-[#f59e0b] py-8 px-10 my-4 mx-auto'>
                    <p>{item.firstname} {item.lastname}</p>
                    <div className='flex flex-col gap-y-2'>
                    <ContactsBaseNav id = {item.id}/>
                    </div>
                    </div>
                
            </Link></div>)}
        </ul>
    </div>
    </>
);
}

export default ContactsList;