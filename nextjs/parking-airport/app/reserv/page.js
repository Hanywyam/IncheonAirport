import Image from "next/image";
import reservStyle from "./page.module.css";

export default function Reserv() {
  return (
    <div>
      <h2 className={reservStyle.Title}>
        <em>Incheon Airport</em> 쉽고 편리한 주차 예약으로 즐거운 여행을
      </h2>
      <h3 style={{ textAlign: "center", width: "auto" }}>주차장 예약</h3>
      <div className={reservStyle.formCont}>
        <form action="/api/reserv" method="POST" className={reservStyle.form}>
          <label htmlFor="terminal">터미널 </label>
          <select name="terminal" id="terminal">
            <option value="제1주차장">제1주차장</option>
            <option value="제2주차장">제2주차장</option>
          </select>
          <label htmlFor="parkingArea">주차장 </label>
          <select name="parkingArea" id="parkingArea">
            <option value="예약주차장">예약주차장</option>
          </select>
          <label htmlFor="reservIn">예약 입차일시 </label>
          <input type="date" name="reservIn" placeholder="입차 일시" />
          <label htmlFor="reservOut">예약 출차일시 </label>
          <input type="date" name="reservOut" placeholder="출차 일시" />
          <label htmlFor="carNum">차량번호</label>
          <div className={reservStyle.flex}>
            <input
              style={{ width: 100 }}
              type="text"
              name="carNum"
              pattern="[0-9]{2}"
              placeholder="예) 00"
            />
            -
            <input
              style={{ width: 100 }}
              type="text"
              name="carNum"
              pattern="{1}"
              placeholder="가"
            />
            -
            <input
              style={{ width: 150 }}
              type="text"
              name="carNum"
              pattern="[0-9]{4}"
              placeholder="0000로 입력"
            />
          </div>
          <label htmlFor="phoneNum">휴대폰번호</label>
          <input
            type="tel"
            name="phoneNum"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            placeholder="예)010-0000-0000"
            required
          />
          <label htmlFor="password">비밀번호</label>
          <input type="password" name="password" placeholder="4~15자리 입력" />
          <button type="submit">확인</button>
        </form>
      </div>
    </div>
  );
}
