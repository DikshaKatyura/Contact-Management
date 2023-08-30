import { useRef, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { uiActions } from "../store/uiSlice";
import { contactActions } from "../store/contactSlice";
import { contactType } from "../data/model";
import { AppDispatch, RootState } from "../store/store";

const style = {
  display: "block",
  width: "100%",
};
const ContactForm: FC<{ contactList?: contactType[] }> = (props) => {
  const isActive = useSelector<RootState, string>((state) => state.ui.isActive);
  const isFormError = useSelector<RootState, boolean>(state => state.ui.formError);
  const dispatch = useDispatch<AppDispatch>();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const [firstName,setFirstName] = useState();
  
  const params = useParams();
  const navigate = useNavigate();

  const contacts = props.contactList?.filter(
    (item) => item.id === params.contactId
  );

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    const formData: contactType = {
      id: Math.random().toString(),
      firstname: firstNameRef.current!.value,
      lastname: lastNameRef.current!.value,
      isActive: isActive,
    };
    dispatch(contactActions.addContacts(formData));
    navigate("/contacts");
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col max-w-2xl my-4 mx-auto"
    >
      <label style={style} className="m-2" htmlFor="fullname">
        Full Name
      </label>
      <input
        style={style}
        className="m-2 p-1.5"
        type="text"
        id="fullname"
        ref={firstNameRef}
        defaultValue={contacts?.[0].firstname || ""}
      />
      <label style={style} className="m-2" htmlFor="lastname">
        Last Name
      </label>
      <input
        style={style}
        className="m-2 p-1.5"
        type="text"
        id="lastname"
        ref={lastNameRef}
        defaultValue={contacts?.[0].lastname || ""}
      />
      <div className="flex flex-col">
        <p>Status</p>
        <div className="pt-5">
          <div className="flex">
            <label style={style} className="m-2 flex" htmlFor="active">
              Active
            </label>
            <input
              style={style}
              className="m-2"
              type="radio"
              id="active"
              name="isactive"
              onChange={() => dispatch(uiActions.setIsActive("active"))}
              checked={contacts?.[0].isActive === "active" || undefined}
            />
          </div>
          <div className="flex">
            <label style={style} className="m-2 flex" htmlFor="inactive">
              In-Active
            </label>
            <input
              style={style}
              className="m-2"
              type="radio"
              id="inactive"
              name="isactive"
              onChange={() => dispatch(uiActions.setIsActive("inactive"))}
              checked={contacts?.[0].isActive === "inactive" || undefined}
            />
          </div>
        </div>
      </div>

       {isFormError && <div>
            <p className="text-lg font-semibold text-red">Form cannot be empty!</p>
        </div>}

        <div className="flex justify-evenly">
      <button
            
            type="submit"
            className="py-3 px-3 bg-[#d97706] w-24 my-20 rounded hover:bg-[#f59e0b]"
            >
        ADD
      </button>
      <button
        type="submit"
        className="py-3 px-3 bg-[#dc2626] w-24 my-20 rounded hover:bg-[#ef4444]"
        onClick={() => navigate('..')}
        >
        CANCEL
      </button>
          </div>
    </form>
  );
};

export default ContactForm;
