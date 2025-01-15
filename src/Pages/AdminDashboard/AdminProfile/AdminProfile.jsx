import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AdminProfile = () => {
    const {user}=useContext(AuthContext);
    const [adminData, setAdminData] = useState(null);
    useEffect(()=>{
        const fetchAdminData = async () => {
        try{
            if(user){
                const response = await axios.get(`http://localhost:5000/register`);
                const admin = response.data.find((u) => u.email === user.email);
                setAdminData(admin);
            }
        }
        catch (err) {
            console.log("Error fetching admin data:", err);
          }
        };
        fetchAdminData();

    },[user])
    if (!adminData) {
        return (
          <div>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ); // Show loading spinner while fetching admin data
      }
    return (
        <div className="admin-profile container mx-auto p-5">
        <h2 className="text-3xl font-bold text-center mb-5">Admin Profile</h2>
        <div className="profile-info flex justify-center items-center gap-5">
          <img
            src={adminData.photoUrl || "/default-image.jpg"} // If no image is provided, show a default image
            alt="Admin"
            className="w-32 h-32 rounded-full border-2 border-gray-300"
          />
          <div className="text-left">
            <p className="text-xl font-semibold">Name: {adminData.name}</p>
            <p className="text-lg">Email: {adminData.email}</p>
          </div>
        </div>
      </div>
    );
};

export default AdminProfile;