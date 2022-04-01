import React, { useState, useEffect } from "react";
import "./SeatmapDefault.css";

import { Image } from "antd";

import senior from "../../assets/images/senior-citizen.png";
import available from "../../assets/images/emptySeat.png";
import selected from "../../assets/images/selected.png";
import booked from "../../assets/images/bookedSeat.png";

// import available from "../../assets/images/seat.png";

function SeatmapDefault(props) {
  // const [selectedSeats, setSelectedSeats] = useState([]);
  // console.log(selectedSeats);
  // const [seatsTaken] = useState(["6", "7"]);
  // const [seniorSeats] = useState([]);

  // useEffect(() => {
  //   console.log(selectedSeats);
  // }, [selectedSeats]);

  const { selectedSeats, seatsTaken, setSelectedSeats } = props;

  const selectSeat = (seatNumber) => {
    let filtered;
    if (
      !selectedSeats.includes(seatNumber) &&
      !seatsTaken.includes(seatNumber)
    ) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    } else if (selectedSeats.includes(seatNumber)) {
      filtered = selectedSeats.filter((num) => num !== seatNumber);
      setSelectedSeats(filtered);
    }
  };

  return (
    <>
      <div className="front-label">Front</div>

      {/* 1-4  */}
      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={senior} alt="" preview={false} />
            <div className="seat-number">1</div>
          </div>
          <div className="seat-div">
            <Image src={senior} alt="" preview={false} />
            <div className="seat-number">2</div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={senior} alt="" preview={false} />
            <div className="seat-number">3</div>
          </div>
          <div onClick={(e) => console.log(e)} className="seat-div">
            <Image src={senior} alt="" preview={false} />
            <div className="seat-number">4</div>
          </div>
        </div>
      </div>

      {/* 5-8 */}
      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image
              src={
                seatsTaken.includes("5")
                  ? booked
                  : selectedSeats.includes("5")
                  ? selected
                  : available
              }
              alt=""
              preview={false}
              // className={
              //   seatsTaken.includes("5")
              //     ? "reserved"
              //     : selectedSeats.includes("5")
              //     ? "selected"
              //     : "available"
              // }
            />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              5
            </div>
          </div>
          <div
            className={
              seatsTaken.includes("6") ? "seat-div no-cursor" : "seat-div"
            }
          >
            <Image
              src={
                seatsTaken.includes("6")
                  ? booked
                  : selectedSeats.includes("6")
                  ? selected
                  : available
              }
              alt=""
              preview={false}
            />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              6
            </div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div
            className={
              seatsTaken.includes("7") ? "seat-div no-cursor" : "seat-div"
            }
          >
            <Image
              src={
                seatsTaken.includes("7")
                  ? booked
                  : selectedSeats.includes("7")
                  ? selected
                  : available
              }
              alt=""
              preview={false}
            />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              7
            </div>
          </div>
          <div className="seat-div">
            <Image
              src={
                seatsTaken.includes("8")
                  ? booked
                  : selectedSeats.includes("8")
                  ? selected
                  : available
              }
              alt=""
              preview={false}
            />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              8
            </div>
          </div>
        </div>
      </div>

      {/* 9-12 */}
      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              9
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              10
            </div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              11
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              12
            </div>
          </div>
        </div>
      </div>

      {/* 13-16 */}
      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              13
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              14
            </div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              15
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              16
            </div>
          </div>
        </div>
      </div>

      {/* 17-20 */}
      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              17
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              18
            </div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              19
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              20
            </div>
          </div>
        </div>
      </div>

      {/* 21-24 */}
      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              21
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              22
            </div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              23
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              24
            </div>
          </div>
        </div>
      </div>

      {/* 25-28 */}
      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              25
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              26
            </div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              27
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              28
            </div>
          </div>
        </div>
      </div>

      {/* 29-32 */}
      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              29
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              30
            </div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              31
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              32
            </div>
          </div>
        </div>
      </div>

      {/* 33-36 */}
      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              33
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              34
            </div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              35
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              36
            </div>
          </div>
        </div>
      </div>

      {/* 37-40 */}
      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              37
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              38
            </div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              39
            </div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => selectSeat(e.target.textContent)}
            >
              40
            </div>
          </div>
        </div>
      </div>

      {/* 41-45 last row  */}
      <div className="seats-row">
        <div className="seat-div">
          <Image src={available} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            41
          </div>
        </div>
        <div className="seat-div">
          <Image src={available} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            42
          </div>
        </div>
        <div className="seat-div middle-seat">
          <Image src={available} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            43
          </div>
        </div>

        <div className="seat-div">
          <Image src={available} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            44
          </div>
        </div>
        <div className="seat-div">
          <Image src={available} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            45
          </div>
        </div>
      </div>
    </>
  );
}

export default SeatmapDefault;
