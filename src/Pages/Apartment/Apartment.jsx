import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Apartment = () => {
  const { user } = useContext(AuthContext);
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [disabledApartments, setDisabledApartments] = useState([]);
  const [appliedApartment, setAppliedApartment] = useState(null);

  const { data: apartments = [], isLoading, isError, error } = useQuery({
    queryKey: ['apartments'],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/apartments");
      return response.data;
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");

  useEffect(() => {
    setFilteredApartments(apartments);
  }, [apartments]);

  const handleSearch = () => {
    const min = parseInt(minRent, 10);
    const max = parseInt(maxRent, 10);

    if (!min || !max || min > max) {
      Swal.fire({
        icon: "error",
        title: "Invalid Rent Range",
        text: "Please provide a valid rent range.",
      });
      return;
    }

    const filtered = apartments.filter(
      (apartment) => apartment.rent >= min && apartment.rent <= max
    );
    setFilteredApartments(filtered);
    setCurrentPage(1);
  };

  const handleShowAll = () => {
    setFilteredApartments(apartments);
    setMinRent("");
    setMaxRent("");
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleAgreementBtn = async (id) => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Please Login",
        text: "You need to log in to submit an agreement.",
      });
      return;
    }

    if (appliedApartment) {
      Swal.fire({
        icon: "error",
        title: "Agreement Already Submitted",
        text: "You can only apply for one apartment.",
      });
      return;
    }

    const apartment = apartments.find((apartment) => apartment._id === id);

    const agreementData = {
      name: user?.displayName || "Anonymous",
      email: user?.email || "No email provided",
      floorNo: apartment.floorNo,
      blockName: apartment.blockName,
      apartmentNo: apartment.apartmentNo,
      rent: apartment.rent,
      status: "pending",
      role: "user",
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/agreements",
        agreementData
      );

      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Agreement Submitted!",
          text: "Your agreement request has been successfully submitted.",
          showConfirmButton: false,
          timer: 1500,
        });

        setDisabledApartments((prev) => [...prev, id]);
        setAppliedApartment(apartment.apartmentNo);
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed!",
        text: "Failed to submit your agreement request. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentApartments = filteredApartments.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredApartments.length / itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Available Apartments
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 mb-6">
        <input
          type="number"
          placeholder="Min Rent"
          value={minRent}
          onChange={(e) => setMinRent(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded"
        />
        <input
          type="number"
          placeholder="Max Rent"
          value={maxRent}
          onChange={(e) => setMaxRent(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
        <button
          onClick={handleShowAll}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentApartments.map((apartment) => {
          const isDisabled =
            disabledApartments.includes(apartment._id) ||
            appliedApartment === apartment.apartmentNo;

          return (
            <div
              key={apartment._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={apartment.image}
                alt={`Apartment ${apartment.apartmentNo}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Apartment {apartment.apartmentNo}
                </h3>
                <p className="text-gray-600">Floor: {apartment.floorNo}</p>
                <p className="text-gray-600">Block: {apartment.blockName}</p>
                <p className="text-gray-600">Rent: ${apartment.rent}</p>
                <button
                  onClick={() => handleAgreementBtn(apartment._id)}
                  className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded-md ${
                    isDisabled ? "bg-gray-500 cursor-not-allowed" : ""
                  }`}
                  disabled={isDisabled}
                >
                  {isDisabled ? "Agreement Submitted" : "View Agreement"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 mx-1 bg-gray-200 rounded"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-3 py-1 mx-1 bg-gray-200 rounded"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Apartment;
