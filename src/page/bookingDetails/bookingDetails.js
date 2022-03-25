import React from "react";
import { useLocation } from "react-router-dom";

function BookingDetails() {
  const location = useLocation();

  console.log(location);
  return (
    <>
      <div>BOOKING DETAILS</div>
      <div>{location.state.tripDetails.tripId}</div>
    </>
  );
}

export default BookingDetails;
