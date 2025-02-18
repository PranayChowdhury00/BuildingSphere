import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
          About BuildingSphere
        </h2>
        <p className="text-gray-700 text-lg text-center mb-6">
          BuildingSphere is a modern apartment booking platform designed to
          simplify the process of finding, booking, and managing rental
          apartments. Whether you're a tenant looking for a new home or a
          property owner managing rentals, our platform provides a seamless
          experience.
        </p>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium text-sky-500">For Tenants</h3>
            <p className="text-gray-700">
              Browse available apartments, apply for bookings, and make secure
              monthly payments with ease. Get access to verified listings and
              detailed property descriptions, ensuring transparency in your
              rental decisions.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium text-sky-500">For Property Owners</h3>
            <p className="text-gray-700">
              Manage rental listings, track payments, and oversee agreements
              efficiently through our member dashboard. Get insights into your
              rental performance and easily communicate with potential tenants.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium text-sky-500">Secure & Reliable</h3>
            <p className="text-gray-700">
              Our platform ensures secure transactions and verified listings for
              a hassle-free experience. We prioritize data security and user
              privacy, offering a trusted space for both renters and landlords.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium text-sky-500">24/7 Support</h3>
            <p className="text-gray-700">
              Our dedicated support team is available 24/7 to assist you with
              any queries related to bookings, payments, or technical issues.
              We are committed to providing excellent customer service.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium text-sky-500">Easy-to-Use Interface</h3>
            <p className="text-gray-700">
              BuildingSphere offers an intuitive and user-friendly interface,
              making it easy for users to navigate the platform, find
              apartments, and manage their bookings efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;