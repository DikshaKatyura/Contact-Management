import { FC } from "react";
import { useNavigate } from "react-router-dom";
import ContactsBaseNav from "./ContactsBaseNav";
import { contactType } from "../data/model";

const ContactsList: FC<{ contactList: contactType[] }> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      {!props.contactList.length && (
        <div className="flex justify-center mt-20">
          <p className="font-bold text-lg">No Contact Found!</p>
        </div>
      )}
      <div className="flex justify-center mt-20 ">
        <ul className="grid grid-cols-2 gap-x-5">
          {props.contactList.map((item) => (
            <div key={item.id} onClick={() => navigate(item.id)}>
              <div className="rounded border border-[#f59e0b] py-8 px-10 my-4 mx-auto">
                <p className="capitalize font-semibold text-base text-center">
                  {item.firstname} {item.lastname}
                </p>
                <div className="flex flex-col gap-y-2">
                  <ContactsBaseNav id={item.id} />
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactsList;
