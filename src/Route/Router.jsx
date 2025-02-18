import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import UserDashboard from "../Pages/UserDashboard/UserDashboard";
import MyProfile from "../Components/Announcements/MyProfile";
import Announcements from "../Components/Announcements/Announcements";
import MakePayment from "../Pages/MakePayment/MakePayment";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import PaymentHistory from "../Pages/PaymentPage/PaymentHistory";
import AdminProfile from "../Pages/AdminDashboard/AdminProfile/AdminProfile";
import MakeAnnouncement from "../Pages/AdminDashboard/MakeAnnouncement/MakeAnnouncement";
import AgreementRequests from "../Pages/AdminDashboard/AgreementRequest/AgreementRequests";
import ManageMembers from "../Pages/AdminDashboard/ManageMembers/ManageMembers";
import CouponsTable from "../Pages/AdminDashboard/CouponsTable/CouponsTable";
import Page404 from "../Page404/Page404";
import ContactUs from "../Pages/Contactus/ContactUs";
import MyPayments from "../Pages/MyPayments/MyPayments";
import About from "../Pages/About/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apartment",
        element: <Apartment></Apartment>,
      },
      {
        path:'/contactUs',
        element:<ContactUs></ContactUs>
      },
      {
        path:'/myPayments',
        element:<PrivetRoute><MyPayments></MyPayments></PrivetRoute>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <UserDashboard></UserDashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "profile",
        element: <MyProfile></MyProfile>, 
      },
      {
        path:'adminProfile',
        element:<AdminProfile></AdminProfile>
      },
      {
        path:'agreementRequest',
        element:<AgreementRequests></AgreementRequests>
      },
      {
        path:'makeAnnouncements',
        element:<MakeAnnouncement></MakeAnnouncement>
      },
      {
        path: "announcements",
        element: <Announcements></Announcements>, 
      },
      {
        path:'manage-members',
        element:<ManageMembers></ManageMembers>
      },
      {
        path:'manage-coupons',
        element:<CouponsTable></CouponsTable>
      },
      {
        path:'make-payment',
        element:<MakePayment></MakePayment>
      },
      {
        path:'payMentPage',
        element:<PaymentPage></PaymentPage>
      },
      {
        path:'payment-history',
        element:<PaymentHistory></PaymentHistory>
      }
    ],
  },
  {
    path:'*',
    element:<Page404></Page404>
  }
]);

export default router;
