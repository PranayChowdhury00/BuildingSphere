import React, { useEffect, useState } from "react";

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        // Simulate fetching announcements
        fetch("/api/announcements") // Replace with your API endpoint
            .then((res) => res.json())
            .then((data) => setAnnouncements(data))
            .catch((error) => console.error("Error fetching announcements:", error));
    }, []);

    return (
        <div>
            <h1>Announcements</h1>
            <ul>
                {announcements.map((announcement, index) => (
                    <li key={index}>
                        <h3>{announcement.title}</h3>
                        <p>{announcement.content}</p>
                        <p><strong>Date:</strong> {announcement.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Announcements;
