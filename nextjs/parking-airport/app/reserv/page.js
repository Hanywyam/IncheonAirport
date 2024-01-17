import Image from "next/image";
import reservStyle from "./page.module.css";

export default function Reserv() {
  return (
    <div>
      <h2 className={reservStyle.Title}>
        <em>Incheon Airport</em> 쉽고 편리한 주차 예약으로 즐거운 여행을
      </h2>
      <form action="/api/reserv" method="POST" className={reservStyle.form}>
        <label htmlFor="terminal" name="terminal">
          <select name="terminal" id="terminal">
            <option value="제1주차장">터미널 선택</option>
            <option value="제1주차장">제1주차장</option>
            <option value="제2주차장">제2주차장</option>
          </select>
        </label>

        <label htmlFor="parkingArea" name="parkingArea">
          <select name="parkingArea" id="parkingArea">
            <option value="예약주차장">주차장 선택</option>
            <option value="예약주차장">예약주차장</option>
          </select>
        </label>

        <label htmlFor="reservIn" name="reservIn">
          <input type="date" name="reservIn" placeholder="입차 일시" />
        </label>

        <label htmlFor="reservOut" name="reservOut">
          <input type="date" name="reservOut" placeholder="출차일시" />
        </label>

        <label htmlFor="carNum" name="carNum" style={{ width: 5 }}>
          <input
            style={{ width: 50 }}
            type="text"
            name="carNum"
            pattern="[0-9]{2}"
            placeholder="예) 00"
          />
          -
          <input
            style={{ width: 50 }}
            type="text"
            name="carNum"
            pattern="{1}"
            placeholder="가"
          />
          -
          <input
            style={{ width: 100 }}
            type="text"
            name="carNum"
            pattern="[0-9]{4}"
            placeholder="0000로 입력"
          />
        </label>

        <label htmlFor="phoneNum" name="phoneNum">
          <input
            type="tel"
            name="phoneNum"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            placeholder="예)010-0000-0000"
            required
          />
        </label>

        <label htmlFor="password" name="password">
          <input type="password" name="password" placeholder="4~15자리 입력" />
        </label>
        <button type="submit">확인</button>
      </form>
    </div>
  );
}
