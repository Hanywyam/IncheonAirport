import React from "react";

const Parking2 = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div>
      {/* <h5>제2주차장</h5> */}
      <img src={path + "/images/parking_zone2.png"} alt="제2주차장-이미지" />
    </div>
  );
};

export default Parking2;
