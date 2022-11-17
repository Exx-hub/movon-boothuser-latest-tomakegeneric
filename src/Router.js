import { Routes, Route } from "react-router-dom";

import Login from "./page/login";
import MainLayout from "./layout/MainLayout";
import BookTicket from "./page/bookTicket";
import BookingDetails from "./page/bookingDetails/bookingDetails";

import UserProfileModule from "./page/userProfileModule";
import TransactionHistory from "./page/transactionHistory";
import About from "./page/about";
import ProtectedRoutes from "./layout/ProtectedRoutes";

const AppNavigator = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<BookTicket />} />
          <Route path="booking-details/:tripId" element={<BookingDetails />} />
          <Route path="profile" element={<UserProfileModule />} />
          <Route path="transactions" element={<TransactionHistory />} />
          <Route path="about" element={<About />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppNavigator;
