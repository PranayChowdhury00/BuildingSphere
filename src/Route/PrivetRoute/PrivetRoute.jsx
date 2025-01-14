import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate} from "react-router-dom";



const PrivetRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext);
    // const location = useLocation();

    if(loader){
        return <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;