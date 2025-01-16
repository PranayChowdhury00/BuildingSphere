import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  const [apartment, setApartment] = useState([]);
  const [members, setMembers] = useState([]);

  // Fetch admin data
  const {
    data: adminData = null,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["adminData", user?.email],
    queryFn: async () => {
      if (!user?.email) return null;
      const response = await axios.get("http://localhost:5000/register");
      return response.data.find((u) => u.email === user.email);
    },
    enabled: !!user?.email,
  });

  // Fetch members from the agreementsAdmin endpoint
  useEffect(() => {
    axios.get("http://localhost:5000/agreementsAdmin")
      .then((res) => {
        // Filter out only members
        const filteredMembers = res.data.filter(user => user.role === 'member');
        setMembers(filteredMembers);
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
      });

    axios.get("http://localhost:5000/apartments")
      .then((res) => {
        setApartment(res.data);
      })
      .catch((error) => {
        console.error("Error fetching apartments:", error);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>Error fetching admin data: {error.message}</p>
      </div>
    );
  }

  if (!adminData) {
    return (
      <div>
        <p>No admin data found for the current user.</p>
      </div>
    );
  }

  return (
    <div className="admin-profile container mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-5 text-sky-500">Admin Profile</h2>

      <div className="">
        {/* Admin card */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="p-7">
            <img
              className="w-[300px] h-[400px] rounded-xl"
              src={adminData.photoUrl}
              alt="Image"
            />
          </figure>
          <div className="card-body">
            <div className="flex">
              <p className="text-xl font-semibold "> <span className="text-sky-500">Name</span>: {adminData.name}</p>
              <p className="text-xl font-medium "><span className="text-sky-500">Email</span>: {adminData.email}</p>
            </div>
            <hr />
            <div className="">
              <p className="text-[17px] py-2 font-medium"><span className="text-sky-500">Total Room</span>: {apartment.length}</p>
              <p className="text-[17px] py-2 font-medium"><span className="text-sky-500">Percentage of available rooms</span>: null</p>
              <p className="text-[17px] py-2 font-medium"><span className="text-sky-500">Percentage of agreement/unavailable</span>: null</p>
              <p className="text-[17px] py-2 font-medium"><span className="text-sky-500">Total Users</span>: {members.length}</p>
              <p className="text-[17px] py-2 font-medium"><span className="text-sky-500">Total Members</span>: {members.length}</p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AdminProfile;
