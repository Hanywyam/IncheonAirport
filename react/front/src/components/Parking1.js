import React from "react";

const Parking1 = ({ data }) => {
  const path = process.env.PUBLIC_URL;
  return (
    <div>
      {/* <h5>제 1주차장</h5> */}
      <img src={path + "/images/parking_zone1.png"} alt="제1주차장-이미지" />
      <ul>
        {/* {data.map((pk) => (
            <li key={pk.parking}>
              <h6>{pk.floor}</h6>
              <p>{pk.parking}</p>
              <p>{pk.parkingarea}</p>
            </li>
          ))} */}
      </ul>
    </div>
  );
};

export default Parking1;
