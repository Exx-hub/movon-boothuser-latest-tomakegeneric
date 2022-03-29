import { Layout, Image, Input } from "antd";
import React from "react";
import "./bookingDetails.css";
import { useLocation } from "react-router-dom";
import senior from "../../assets/images/senior-citizen.png";
import available from "../../assets/images/emptySeat.png";
import selected from "../../assets/images/selected.png";
import booked from "../../assets/images/bookedSeat.png";

function BookingDetails() {
  const location = useLocation();

  console.log(location);
  return (
    <Layout className="booking-details-container">
      <Layout className="booking-details-left">
        <div className="legend">
          <div>
            <Image src={senior} alt="" preview={false} />
            Senior
          </div>
          <div>
            <Image src={booked} alt="" preview={false} />
            Seat Taken
          </div>
          <div>
            <Image src={available} alt="" preview={false} />
            Available
          </div>
          <div>
            <Image src={selected} alt="" preview={false} />
            Selected
          </div>
        </div>
        <div className="seat-map">SEAT MAP</div>
      </Layout>
      <Layout className="booking-details-right">
        <div className="trip-info">
          <h2>Trip Info:</h2>
          <div>
            <span>Trip ID:</span> TPtgRQxHoVjM
          </div>
          <div>
            <span>Start Station: </span> DLTB GMA
          </div>
          <div>
            <span>End Station:</span> DLTB Legazpi
          </div>
          <div>
            <span>Travel Date: </span> 29/03/2022 11:59 PM
          </div>
          <div>
            <span>Selected Bus: </span> 00-00-11
          </div>
        </div>
        <div className="ticket-info">
          <h2>Ticket Info:</h2>
          <div>
            <span>Fare per Seat: </span> ₱567.00
          </div>
          <div>
            <span>Selected Seats:</span> --
          </div>
          <div>
            <span>Source: </span> DLTB GMA
          </div>
          <div>
            <span>Destination: </span> DLTB Legazpi
          </div>
          <div>
            <span>No. of Tickets: </span> 0
          </div>
          <div>
            <span>Total Fare: </span> ₱ 0.00
          </div>
        </div>
        <div className="contact-details">
          <h2>Contact Details:</h2>
          <div>Email</div>
          <Input />
          <div>Mobile Number</div>
          <Input />
        </div>
        <div className="passenger-details">
          <h2>Passenger Details:</h2>
          <Input placeholder="Enter Full Name" />
          {/* <Input placeholder="Enter Full Name" /> */}
          {/* <Input placeholder="Enter Full Name" /> */}
          {/* <Input placeholder="Enter Full Name" /> */}
          {/* <Input placeholder="Enter Full Name" /> */}
        </div>
      </Layout>
    </Layout>
  );
}

export default BookingDetails;
