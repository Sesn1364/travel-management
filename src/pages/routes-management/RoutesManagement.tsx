import CreateTrip from "../create-trip/CreateTrip";
import Login from "../login/Login";
import Registration from "../registration/Registration";


const RoutesManagement = [
    { path: "/", element: <Login /> },
    { path: "/registration", element: <Registration /> },
    { path: "/create-trip", element: <CreateTrip /> }
];

export default RoutesManagement