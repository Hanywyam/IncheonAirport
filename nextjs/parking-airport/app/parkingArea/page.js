import pAreaStyle from "./page.module.css";
import ParkingZone from "./ParkingZone";

export default function ParkingArea() {
  // 주차장 API 호출
  const API_KEY =
    "5SVTXpDxj6L4yXqqxYzgW%2FoV%2FfKo4RrzYpL1JNuxk7vaSXA%2FwC11y%2BDdfjIrs6SRZ2lwAZuJGXy8TIPl2hAsvA%3D%3D";
  const URL = `http://apis.data.go.kr/B551177/StatusOfParking/getTrackingParking?serviceKey=${API_KEY}&numOfRows=17&type=json`;

  return (
    <div>
      <h2 className={pAreaStyle.Title}>
        <em>Incheon Airport</em> 여행의 시작과 끝을 안전하게
      </h2>
      <h3>주차장 터미널별 실시간 현황</h3>
      <ParkingZone URL={URL} />
    </div>
  );
}
