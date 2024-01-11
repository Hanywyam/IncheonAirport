import { useEffect, useState } from "react";
import pAreaStyle from "../assets/style/parkingArea.module.css";
import Parking1 from "../components/Parking1";
import Parking2 from "../components/Parking2";
import axios from "axios";

const ParkingArea = () => {
  // 주차장별 버튼 설정
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

  // 주차장 API 호출
  const API_KEY =
    "5SVTXpDxj6L4yXqqxYzgW%2FoV%2FfKo4RrzYpL1JNuxk7vaSXA%2FwC11y%2BDdfjIrs6SRZ2lwAZuJGXy8TIPl2hAsvA%3D%3D";
  const URL = `http://apis.data.go.kr/B551177/StatusOfParking/getTrackingParking?serviceKey=${API_KEY}`;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL, {
          headers: {
            Accept: "application/json",
          },
        });
        console.log(res.data);
        setData(res.data);
        setError(null);
      } catch (err) {
        setError("데이터를 불러오는 중 에러가 발생");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <h2>loading...</h2>;
  if (error) return <h2>오류입니다.</h2>;

  return (
    <div>
      <h2 className={pAreaStyle.Title}>
        <em>Incheon Airport</em> 여행의 시작과 끝을 안전하게
      </h2>
      <div className={pAreaStyle.tmnalContn}>
        <button
          onClick={() => toggleTab(1)}
          className={showTab1 ? pAreaStyle.ActiveBtn : ""}>
          제1주차장
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={showTab2 ? pAreaStyle.ActiveBtn : ""}>
          제2주차장
        </button>
        <div className={pAreaStyle.tmnalWrap}>
          {showTab1 && <Parking1 data={data} />}
          {showTab2 && <Parking2 data={data} />}
        </div>
      </div>
    </div>
  );
};

export default ParkingArea;
