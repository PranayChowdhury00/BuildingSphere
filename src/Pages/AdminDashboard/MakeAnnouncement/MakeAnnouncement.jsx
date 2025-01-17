import React, { useState } from "react";
import axios from "axios";

const MakeAnnouncement = () => {
  const [title, setTitle] = useState(""); // State for title
  const [description, setDescription] = useState(""); // State for description
  const [loading, setLoading] = useState(false); // State for loading
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure fields are not empty
    if (!title || !description) {
      setErrorMessage("Both fields are required.");
      return;
    }

    setLoading(true);
    try {
      // Send POST request to create the announcement
      const response = await axios.post("https://server-site-six-eta.vercel.app/announcements", {
        title,
        description,
      });

      if (response.status === 200) {
        setSuccessMessage("Announcement made successfully!");
        setTitle(""); // Clear title field
        setDescription(""); // Clear description field
      }
    } catch (err) {
      setErrorMessage("Failed to create announcement.");
      console.error("Error creating announcement:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="make-announcement container mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-5">Make Announcement</h2>

      {/* Display success or error messages */}
      {successMessage && (
        <div className="text-green-500 text-center mb-4">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="text-red-500 text-center mb-4">{errorMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="announcement-form space-y-4">
        <div className="form-group">
          <label htmlFor="title" className="font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter announcement title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter announcement description"
            rows="5"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Make Announcement"}
        </button>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
