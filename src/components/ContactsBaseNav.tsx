import {Link} from 'react-router-dom';

const ContactsBaseNav = ({id} : {id : string}) =>{
    return(
        <footer>
            <Link to={`${id}/edit`}><button className='py-3 px-3 bg-[#ea580c] no-underline rounded'>Edit</button></Link>
            <button className='py-3 px-3 bg-[#dc2626] no-underline rounded'>Delete</button>
        </footer>
    )
}

export default  ContactsBaseNav;