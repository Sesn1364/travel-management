// CreateTrip Page

import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const CreateTrip = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);

  return (
    <>
      <h1 className="text-black">Welcome {user?.username}</h1>
    </>
  );
};

export default CreateTrip;
