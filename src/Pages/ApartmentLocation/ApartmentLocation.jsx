import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet styles
import { FaLocationArrow } from 'react-icons/fa'; // For location icon

const ApartmentLocation = () => {
  const apartmentLocation = {
    lat: 40.7128, // Latitude of the apartment
    lng: -74.0060, // Longitude of the apartment
    address: "123 Apartment Street, Cityville",
    directions: "Take exit 15 from the highway and continue straight for 3 miles."
  };

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-sky-500 mb-6">
          Apartment Location and Directions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Address:</strong> {apartmentLocation.address}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Directions:</strong> {apartmentLocation.directions}
            </p>
            <div className="text-center">
              <a
                href={`https://www.google.com/maps?q=${apartmentLocation.lat},${apartmentLocation.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-sky-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300"
              >
                <FaLocationArrow className="mr-2" />
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="h-80">
            <MapContainer
              center={[apartmentLocation.lat, apartmentLocation.lng]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ width: "100%", height: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker
                position={[apartmentLocation.lat, apartmentLocation.lng]}
                icon={
                  new Icon({
                    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Red_dot.svg",
                    iconSize: [30, 30],
                    iconAnchor: [15, 30],
                    popupAnchor: [0, -30],
                  })
                }
              >
                <Popup>
                  <strong>Apartment Location</strong>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentLocation;
