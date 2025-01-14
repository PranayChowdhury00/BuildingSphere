import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyProfile = () => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return (
      <div>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="py-5">
      <div className="card bg-base-100  md:w-96 shadow-xl">
        <figure>
          <img src={user?.photoURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>
            <strong>Name:</strong> {user?.displayName || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Agreement Accept Date:</strong> None
          </p>
          <div className="card-actions justify-end">
            <p>
              <strong>Apartment Info:</strong>
            </p>
            <ul>
              <li>Floor: None</li>
              <li>Block: None</li>
              <li>Room No: None</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
