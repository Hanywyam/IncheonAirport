import React from "react";

const CheckInfo = () => {
  return (
    <div>
      <h2>
        <em>Incheon Airport</em> 공항의 역사를 새로 쓰다
      </h2>
      <h3>예약 조회</h3>
      <form>
        <label htmlFor="">
          <input type="checkbox" /> 차량번호
          <input type="checkbox" /> 휴대폰번호
          <input type="checkbox" /> 예약번호
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>

        <label htmlFor="">
          <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default CheckInfo;
