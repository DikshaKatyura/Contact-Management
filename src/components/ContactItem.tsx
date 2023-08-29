import { contactType } from "../data/model";

const ContactItem = ({items} : {items : contactType}) => {
    return (
        <div className="flex flex-col items-center max-w-2xl border border-gray-600 rounded py-10 px-10 my-10 mx-auto">
        <p className="font-bold text-lg py-2">First Name : <span className="font-normal text-base">{items.firstname}</span></p>
        <p className="font-bold text-lg py-2">Last Name : <span className="font-normal text-base">{items.lastname}</span></p>
        <p className="font-bold text-lg py-2">IsActive : <span className="font-normal text-base">{items.isActive  ? 'Active' : 'Not Active'}</span></p>
        </div>
    )
}

export default ContactItem;