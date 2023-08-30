import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { RootState } from "../store/store";
import { AppDispatch } from "../store/store";
import { uiActions } from "../store/uiSlice";
import Sidemenu from "../components/Sidemenu";

const Root = () => {
  const show = useSelector<RootState, boolean>(
    (state) => state.ui.showSidemenu
  );
  const dispatch = useDispatch<AppDispatch>();

  const sidemenuHandler = () => {
    dispatch(uiActions.setShowSidemenu());
  };
  return (
    <>
      <div className="flex gap-x-5 container my-5 mx-5">
        <button onClick={sidemenuHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <Header />
      </div>
      {show && <Sidemenu />} 
      <Outlet />
    </>
  );
};

export default Root;
