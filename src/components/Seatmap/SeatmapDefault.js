import React, { useState } from "react";
import "./SeatmapDefault.css";

import { Image } from "antd";

import senior from "../../assets/images/senior-citizen.png";
import available from "../../assets/images/emptySeat.png";
// import selected from "../../assets/images/selected.png";
// import booked from "../../assets/images/bookedSeat.png";
import seat from "../../assets/images/seat.png";

function SeatmapDefault() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatsTaken] = useState([5, 6, 7]);
  return (
    <>
      <div className="front-label">Front</div>

      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={senior} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => console.log(e.target.textContent)}
            >
              1
            </div>
          </div>
          <div className="seat-div">
            <Image src={senior} alt="" preview={false} />
            <div
              className="seat-number"
              onClick={(e) => console.log(e.target.textContent)}
            >
              2
            </div>
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

      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={seat} alt="" preview={false} />
            <div className="seat-number">5</div>
          </div>
          <div className="seat-div">
            <Image src={seat} alt="" preview={false} />
            <div className="seat-number">6</div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">7</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">8</div>
          </div>
        </div>
      </div>

      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">9</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">10</div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">11</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">12</div>
          </div>
        </div>
      </div>

      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">13</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">14</div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">15</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">16</div>
          </div>
        </div>
      </div>

      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">17</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">18</div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">19</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">20</div>
          </div>
        </div>
      </div>

      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">21</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">22</div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">23</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">24</div>
          </div>
        </div>
      </div>

      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">25</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">26</div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">27</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">28</div>
          </div>
        </div>
      </div>

      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">29</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">30</div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">31</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">32</div>
          </div>
        </div>
      </div>

      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">33</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">34</div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">35</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">36</div>
          </div>
        </div>
      </div>

      <div className="seats-row">
        <div className="dual-seat-left">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">37</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">38</div>
          </div>
        </div>
        <div className="dual-seat-right">
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">39</div>
          </div>
          <div className="seat-div">
            <Image src={available} alt="" preview={false} />
            <div className="seat-number">40</div>
          </div>
        </div>
      </div>

      <div className="seats-row">
        <div className="seat-div">
          <Image src={available} alt="" preview={false} />
          <div className="seat-number">41</div>
        </div>
        <div className="seat-div">
          <Image src={available} alt="" preview={false} />
          <div className="seat-number">42</div>
        </div>
        <div className="seat-div middle-seat">
          <Image src={available} alt="" preview={false} />
          <div className="seat-number">43</div>
        </div>

        <div className="seat-div">
          <Image src={available} alt="" preview={false} />
          <div className="seat-number">44</div>
        </div>
        <div className="seat-div">
          <Image src={available} alt="" preview={false} />
          <div className="seat-number">45</div>
        </div>
      </div>
    </>
  );
}

export default SeatmapDefault;
