import React from "react";

const ReservDays = () => {
  return (
    <div>
      <form>
        <fieldset>예약일자</fieldset>
        <label htmlFor="tmnal">
         터미널 <input type="text" id="tmnal" />
        </label>

        <label htmlFor="parkingZone">
         주차장 <input type="text" id="parkingZone" />
        </label>

        <label htmlFor="reservIn">
         예약 입차일시 <input type="text" id="reservIn" />
        </label>

        <label htmlFor="reservOut">
         예약 출차일시 <input type="text" id="reservOut" />
        </label>
      </form>

      <div>
        <img src alt="선택한 터미널 이미지" />
      </div>
    </div>
  );
};

export default ReservDays;
