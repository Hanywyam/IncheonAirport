import React from "react";

const Parking1 = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div>
      {/* <h5>제 1주차장</h5> */}
      <img src={path + "/images/parking_zone1.png"} alt="제1주차장-이미지" />
    </div>
  );
};

export default Parking1;
