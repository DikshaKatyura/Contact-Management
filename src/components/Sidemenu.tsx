import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { AppDispatch } from '../store/store';
import { uiActions } from '../store/uiSlice';
import Header from './Header';

type sidemenuType = {
    name : string,
    path : string
}

const sidemenu :sidemenuType[] = [
    {
        name : 'dashboard',
        path : ''
    },
    {
        name : 'contacts',
        path : 'contacts'
    },
    {
        name : 'Create Contact',
        path  :'contacts/new'
    }
]

const Sidemenu = () => {
    const dispatch = useDispatch<AppDispatch>();

    const style = {
        backgroundColor:' rgba(0, 0, 0, 0.75)'
    }
    
    
    const sidemenuHandler = () =>{
        dispatch(uiActions.setShowSidemenu());
    }
    return(
        
         <>
        <div style={style} className='h-screen w-screen z-10 absolute top-0' onClick={sidemenuHandler}>

       
        <div className='w-[32%] h-screen bg-black pt-5 pl-5 z-11'>
      <Header />
            <ul className='mt-5 gap-y-2'>
                {sidemenu.map(menu => <li className='p-4 text-sm font-semibold text-[#f59e0b]' key={menu.path}>
                    <Link to={menu.path} relative='path'>{menu.name}</Link>
                </li>)}
            </ul>
        </div>
        </div>
        
        </>
    );
}


export default Sidemenu;