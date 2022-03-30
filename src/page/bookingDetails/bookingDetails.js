import React, { useState } from "react";
import { Layout, Image, Input, Button } from "antd";
import "./bookingDetails.css";
import { useLocation } from "react-router-dom";
import senior from "../../assets/images/senior-citizen.png";
import available from "../../assets/images/emptySeat.png";
import selected from "../../assets/images/selected.png";
import booked from "../../assets/images/bookedSeat.png";

const { Content } = Layout;

function BookingDetails() {
  const location = useLocation();

  console.log(location);
  const { tripDetails } = location.state;

  const [noOfSeats, setNoOfSeats] = useState(5);
  return (
    <Layout>
      <Content className="booking-details-container">
        <div className="booking-details-left">
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
        </div>
        <div className="booking-details-right">
          <div className="trip-info">
            <h2>Trip Info:</h2>
            <div>
              <span>Trip ID:</span> {tripDetails.tripId}
            </div>
            <div>
              <span>Start Station: </span> {tripDetails.startStation}
            </div>
            <div>
              <span>End Station:</span> {tripDetails.endStation}
            </div>
            <div>
              <span>Travel Date: </span> {tripDetails.startDate}
            </div>
            <div>
              <span>Selected Bus: </span> {tripDetails.selectedBus}
            </div>
            <div>
              <span>Seats Left: </span> {tripDetails.seatsLeft}
            </div>
          </div>
          <div className="ticket-info">
            <h2>Booking Info:</h2>
            <div>
              <span>Fare per Seat: </span> ₱567.00
            </div>
            <div>
              <span>Selected Seats:</span> --
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
            <Input placeholder="Customer's Email Address" />
            <div>Mobile Number</div>
            <Input placeholder="Customer's Mobile Number" />
          </div>
          <div className="passenger-details">
            <h2>Passenger Details:</h2>

            <Input placeholder="Passenger 1 Full Name" />
            {noOfSeats > 1 && <Input placeholder="Passenger 2 Full Name" />}
            {noOfSeats > 2 && <Input placeholder="Passenger 3 Full Name" />}
            {noOfSeats > 3 && <Input placeholder="Passenger 4 Full Name" />}
            {noOfSeats > 4 && <Input placeholder="Passenger 5 Full Name" />}
            <Button className="book-button">Book</Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default BookingDetails;
