import { useState } from "react";
import pAreaStyle from "../assets/style/parkingArea.module.css";
import Parking1 from "../components/Parking1";
import Parking2 from "../components/Parking2";

const ParkingArea = () => {
  const [showTab1, setShowTab1] = useState(true);
  const [showTab2, setShowTab2] = useState(false);

  const toggleTab = (tabNum) => {
    if (tabNum === 1) {
      setShowTab1(true);
      setShowTab2(false);
    } else {
      setShowTab1(false);
      setShowTab2(true);
    }
  };

  return (
    <div>
      <h2 className={pAreaStyle.Title}>
        <em>Incheon Airport</em> 여행의 시작과 끝을 안전하게
      </h2>
      <div className={pAreaStyle.tmnalContn}>
        <button onClick={() => toggleTab(1)} className={showTab1 ? pAreaStyle.ActiveBtn : ''}>제1주차장</button>
        <button onClick={() => toggleTab(2)} className={showTab2 ? pAreaStyle.ActiveBtn : ''}>제2주차장</button>
        <div className={pAreaStyle.tmnalWrap}>
          {showTab1 && <Parking1 />}
          {showTab2 && <Parking2 />}
        </div>
      </div>
    </div>
  );
};

export default ParkingArea;
