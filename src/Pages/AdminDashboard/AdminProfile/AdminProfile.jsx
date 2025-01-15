import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);

  const { data: adminData = null, isLoading, isError, error } = useQuery({
    queryKey: ["adminData", user?.email], // Unique query key based on the user's email
    queryFn: async () => {
      if (!user?.email) return null; // Handle case where user or email is unavailable
      const response = await axios.get("http://localhost:5000/register");
      return response.data.find((u) => u.email === user.email);
    },
    enabled: !!user?.email, // Query runs only if `user.email` is available
  });

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
      <h2 className="text-3xl font-bold text-center mb-5">Admin Profile</h2>
      <div className="profile-info flex justify-center items-center gap-5">
        <img
          src={adminData.photoUrl || "/default-image.jpg"}
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
