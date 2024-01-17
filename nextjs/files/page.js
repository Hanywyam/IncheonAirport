"use client";
import pAreaStyle from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ParkingArea() {
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
  const URL = `http://apis.data.go.kr/B551177/StatusOfParking/getTrackingParking?serviceKey=${API_KEY}&type=json`;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
        });
        console.log(res.data);
        setData(res.data);
        setError(null);
      } catch (err) {
        setError("데이터를 불러오는 중 에러가 발생");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [data]);

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
          {showTab1 && <Parking1 key={data._id} data={data} />}
          {showTab2 && <Parking2 key={data._id} data={data} />}
        </div>
      </div>
    </div>
  );
}

function Parking1(props) {
  return (
    <div>
      <ul>
        <li>{props.data.floor}</li>
        <li>{props.data.parking}</li>
        <li>{props.data.parkingarea}</li>
        <li>{props.data.datetm}</li>
      </ul>
    </div>
  );
}
function Parking2(props) {
  return <></>;
}
