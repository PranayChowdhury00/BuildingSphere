import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageMembers = () => {
  const [agreements, setAgreements] = useState([]);
  const [manageMember, setManageMember] = useState([]);

  // Fetch the agreements and filter the members
  useEffect(() => {
    const fetchAgreements = async () => {
      const response = await fetch(`http://localhost:5000/agreementsAdmin`);
      const data = await response.json();
      setAgreements(data);
      // Filter and set the members in the state
      const members = data.filter((agreement) => agreement.role === 'member');
      setManageMember(members);
    };

    fetchAgreements();
  }, []);

  const handleRemove = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/agreementsChangeByAdmin/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            
          },
          body: JSON.stringify({
            role: 'user',
            status: 'pending',
            
          }),
        }
      );
  
      if (response.ok) {
        // Remove the member from the local state
        setManageMember((prevMembers) =>
          prevMembers.filter((member) => member._id !== id)
        );
  
        // Show success alert
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Member has been successfully removed.',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Failed to remove the member. Please try again.',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error('Error removing member:', error);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'An error occurred while removing the member.',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  

  return (
    <div className='mt-8'>
      <h1 className='text-sky-500 font-semibold text-2xl py-4'>Manage Members</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">User Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {manageMember.length > 0 ? (
              manageMember.map((member) => (
                <tr key={member._id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.email}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleRemove(member._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">No members found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMembers;
