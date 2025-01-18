# BuildingSphere

**BuildingSphere** is an apartment booking platform where users can browse apartments, apply for bookings, and make monthly payments. The system provides different dashboards for **Users**, **Members**, and **Admins** with role-based access to features like managing profiles, agreements, and payments.

## Table of Contents
- [Purpose](#purpose)
- [Live URL](#live-url)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Installation Instructions](#installation-instructions)
- [Contributing](#contributing)
- [License](#license)

## Purpose
The purpose of **BuildingSphere** is to provide a user-friendly platform for apartment bookings, payment management, and role-based access for users, members, and administrators. The platform allows users to apply for apartments, manage their rentals and payments, while admins can oversee the entire system. The application is built to be scalable, secure, and responsive.

## Live URL
[Visit BuildingSphere](https://assignment-12-77319.web.app/) 

# Admin email: pranaydas@gmail.com
# Admin password: Pranay2580@#

## Key Features
- **User Authentication**: Seamless login experience with options for email/password or social login (Google or GitHub).
- **Role-based Dashboards**: Distinct dashboards for **User**, **Member**, and **Admin** that offer personalized features and functionality.
- **Apartment Booking**: Users can view detailed apartment information, including rent, availability, features, and apply for bookings.
- **Payment System**: Members can track rent payments, make monthly payments, and apply discount coupons to reduce costs.
- **Admin Features**: Admins have full control over the platform, including managing users, members, apartments, payments, and announcements.
- **Search & Pagination**: Users can filter apartments based on rent range and location, with paginated results for easy navigation.
- **Responsive UI**: Fully responsive and mobile-first design, optimized for desktop, tablet, and mobile devices.
- **JWT Authentication**: Secure login with **JWT (JSON Web Tokens)** for token-based user authorization and access control.
- **Admin Dashboard**: Admins can add, update, and remove apartments, manage users, and issue coupons.

## Technologies Used
### Frontend
- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling dynamic routing and navigation.
- **Tailwind CSS**: A utility-first CSS framework for custom, responsive designs.

### Backend
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web application framework for Node.js, designed for building RESTful APIs.
- **JWT**: For secure user authentication and token management.

### Database
- **MongoDB**: NoSQL database for storing user and apartment data.

### Authentication
- **Firebase Authentication**: For handling email/password, Google, and GitHub authentication.

### Payment Integration
- (Add payment API details if integrated, e.g., Stripe, PayPal)

### NPM Packages
- `react-router-dom`: For client-side routing and navigation.
- `firebase`: Firebase authentication SDK for handling user login and registration.
- `react-toastify`: For showing notifications, like success or error messages.
- `axios`: For making HTTP requests to interact with the backend API.
- `jwt-decode`: For decoding JWT tokens to retrieve user roles and permissions.
- `react-dropzone`: For handling file uploads like apartment images.
- `react-slick`: For image carousels and sliders (e.g., apartment gallery).
- (Add other packages used in your project)

## Screenshots
Here are some screenshots showcasing the core features of the project:
## Home Page
![Home Screenshot](https://raw.githubusercontent.com/Programming-Hero-Web-Course4/b10a12-client-side-PranayChowdhury00/refs/heads/main/Home.png?token=GHSAT0AAAAAAC3L2EHQSKNAHDIMJW2BJFKOZ4KPVFA)

### Apartment Listing
![Apartment Listing Screenshot](https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-PranayChowdhury00/blob/main/apartment.png?raw=true)

### Member Dashboard
![Member Dashboard Screenshot](https://raw.githubusercontent.com/Programming-Hero-Web-Course4/b10a12-client-side-PranayChowdhury00/refs/heads/main/Member.png?token=GHSAT0AAAAAAC3L2EHRFZGSZQP25IMHAPHEZ4KPVSQ)

### Admin Dashboard
![Admin Dashboard Screenshot](https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-PranayChowdhury00/blob/main/admin.png?raw=true)

### Mobile View of Homepage
![Mobile View Screenshot](https://raw.githubusercontent.com/Programming-Hero-Web-Course4/b10a12-client-side-PranayChowdhury00/refs/heads/main/MobileVew.png?token=GHSAT0AAAAAAC3L2EHQQ2WM2EOTTL6J6NFEZ4KPRSA)

## Installation Instructions
To set up **BuildingSphere** on your local machine, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/YOUR-USERNAME/BuildingSphere.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd BuildingSphere
    ```

3. **Install Backend Dependencies**:
    Navigate to the backend directory (if separate) and install dependencies:
    ```bash
    cd backend
    npm install
    ```

4. **Install Frontend Dependencies**:
    Navigate to the frontend directory and install dependencies:
    ```bash
    cd frontend
    npm install
    ```

5. **Set Up Environment Variables**:
    - Create `.env` files in both frontend and backend directories with the required environment variables.
    - For Firebase Authentication and other services, add your configuration to `.env`.

6. **Run the Application**:
    - **Backend**: Start the backend server:
      ```bash
      npm start
      ```
    - **Frontend**: Start the frontend development server:
      ```bash
      npm start
      ```

7. Visit `http://localhost:3000` to view the application running on your local machine.

## Contributing
We welcome contributions to **BuildingSphere**! If you have ideas for improvements or bug fixes, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Submit a pull request with a detailed description of your changes.

## License
This project is licensed under the **Pranay Chowdhury**.

---

Feel free to open an issue or submit a pull request if you have any questions or suggestions!
