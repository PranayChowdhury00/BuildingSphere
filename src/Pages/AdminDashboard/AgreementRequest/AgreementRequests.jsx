import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AgreementRequests = () => {
  const { user } = useContext(AuthContext);
  const [agreements, setAgreements] = useState([]);

  useEffect(() => {
    const fetchAgreements = async () => {
      const response = await fetch(`http://localhost:5000/agreementsAdmin`);
      const data = await response.json();
      setAgreements(data);
    };

    fetchAgreements();
  }, []);

  const handleAccept = async (id) => {
    try {
      // Check the current status of the agreement
      const currentAgreement = agreements.find((agreement) => agreement._id === id);
      if (currentAgreement?.status === 'approved') {
        Swal.fire('Already Accepted!', 'This agreement has already been accepted.', 'info');
        return;
      }
  
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to accept this agreement?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, accept it!',
      });
  
      if (result.isConfirmed) {
        const response = await fetch(`http://localhost:5000/agreements/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            role: 'member',
            status: 'approved',
          }),
        });
  
        if (response.ok) {
          const updatedAgreement = await response.json();
          setAgreements((prev) =>
            prev.map((agreement) =>
              agreement._id === id ? { ...agreement, ...updatedAgreement } : agreement
            )
          );
          Swal.fire('Accepted!', 'The agreement has been accepted.', 'success');
        } else {
          Swal.fire('Error!', 'Failed to accept the agreement.', 'error');
        }
      }
    } catch (error) {
      Swal.fire('Error!', 'Something went wrong.', 'error');
      console.error('Error:', error);
    }
  };
  

  const handleReject = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to reject this agreement?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, reject it!',
      });

      if (result.isConfirmed) {
        const response = await fetch(`http://localhost:5000/agreements/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setAgreements((prev) => prev.filter((agreement) => agreement._id !== id));
          Swal.fire('Rejected!', 'The agreement has been rejected.', 'success');
        } else {
          Swal.fire('Error!', 'Failed to reject the agreement.', 'error');
        }
      }
    } catch (error) {
      Swal.fire('Error!', 'Something went wrong.', 'error');
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl text-sky-500 font-bold text-center mb-6">Agreement Requests</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">User Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Floor No</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Block Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Apartment No</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Rent</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Request Date</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {agreements.map((agreement) => (
              <tr key={agreement.email} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{agreement.name}</td>
                <td className="border border-gray-300 px-4 py-2">{agreement.email}</td>
                <td className="border border-gray-300 px-4 py-2">{agreement.floorNo}</td>
                <td className="border border-gray-300 px-4 py-2">{agreement.blockName}</td>
                <td className="border border-gray-300 px-4 py-2">{agreement.apartmentNo}</td>
                <td className="border border-gray-300 px-4 py-2">{agreement.rent}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(agreement.requestDate).toLocaleString()}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleAccept(agreement._id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2 mb-2"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(agreement._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgreementRequests;
