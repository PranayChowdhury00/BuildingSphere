import React, { useEffect, useState } from "react";

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        fetch("https://server-site-six-eta.vercel.app/announcements") // Replace with your API endpoint
            .then((res) => res.json())
            .then((data) => setAnnouncements(data))
            .catch((error) => console.error("Error fetching announcements:", error));
    }, []);

    return (
        <div className="container mt-10 mx-auto p-6 bg-gray-100 rounded-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Announcements</h1>
            <ul className="space-y-4">
                {announcements.map((announcement, index) => (
                    <li key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-200">
                        <h3 className="text-xl font-semibold text-sky-500">{announcement.title}</h3>
                        <p className="text-gray-700 mt-2">{announcement.description}</p>
                        <p className="text-sm text-gray-500 mt-4">
                            <strong>Date:</strong> {new Date(announcement.createdAt).toLocaleString()}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Announcements;
