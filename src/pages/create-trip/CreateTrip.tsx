// CreateTrip Page

import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const CreateTrip = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      <h1 className="text-black">Welcome {user?.username}</h1>
    </>
  );
};

export default CreateTrip;
