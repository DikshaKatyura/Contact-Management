import {useRef ,FC} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {useParams,useNavigate} from 'react-router-dom'
import { uiActions } from '../store/uiSlice';
import { contactActions } from '../store/contactSlice';
import { contactType } from '../data/model';
import { AppDispatch, RootState } from '../store/store';


const style = {
    display : 'block',
    width : '100%'
}
const ContactForm:FC<{contactList ?: contactType[]}> = (props) => {
    const isActive = useSelector<RootState,string>((state) => state.ui.isActive);
    const dispatch = useDispatch<AppDispatch>();
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const params = useParams();
    const navigate = useNavigate();

    const contacts = props.contactList?.filter(item => item.id === params.contactId);
    console.log(contacts);
    
    

    const isActiveChangeHandler = () =>{
        dispatch(uiActions.setIsActive('active')); 
    }

    const isInactiveChangeHandler = () =>{
        dispatch(uiActions.setIsActive('inactive'));
    }

    const onSubmitHandler = (event:any) => {
        event.preventDefault();
        const formData:contactType ={
            id : Math.random().toString(),
            firstname : firstNameRef.current!.value,
            lastname : lastNameRef.current!.value,
            isActive : isActive
        }        
        dispatch(contactActions.addContacts(formData));
        navigate('/contacts');
        
    }
    return(
        <form onSubmit={onSubmitHandler} className="flex flex-col max-w-2xl my-4 mx-auto">
        <label style={style} className="m-2" htmlFor="fullname">Full Name</label>
        <input style={style} className="m-2 p-1.5" type="text" id="fullname" ref={firstNameRef} defaultValue={contacts?.[0].firstname || ''}/>
        <label style={style} className="m-2" htmlFor="lastname">Last Name</label>
        <input style={style} className="m-2 p-1.5" type="text" id="lastname" ref={lastNameRef} defaultValue={contacts?.[0].lastname || ''}/>
        <div className="flex flex-col">
             <p>Status</p>
             <div className="pt-5">
                <div className="flex">
                <label style={style} className="m-2 flex" htmlFor="active">Active</label>
                <input style={style} className="m-2" type="radio" id="active" name='isactive'  onChange={isActiveChangeHandler} checked = {contacts?.[0].isActive === 'active' || undefined} />
                </div>
                <div className="flex">
                <label style={style} className="m-2 flex" htmlFor="inactive">In-Active</label>
                <input style={style} className="m-2" type="radio" id="inactive" name='isactive' onChange={isInactiveChangeHandler}  checked = {contacts?.[0].isActive === 'inactive' || undefined }/>
                </div>
             </div>
        </div>
        <button type='submit' className='py-3 p-3 bg-[#f59e0b] w-20 my-20 mx-auto rounded hover:bg-[#d97706]'>ADD</button>
    </form>
    )
}

export default ContactForm;