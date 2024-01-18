"use client";
import axios from "axios";
import pAreaStyle from "./page.module.css";
import { useEffect, useState } from "react";

export default function ParkingZone({ URL }) {
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

  // 주차장 API
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL);
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
  }, []);

  if (loading) return <h2>loading...</h2>;
  if (error) return <h2>오류입니다.</h2>;
  return (
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
        {showTab1 && <Parking2 />}
        {showTab2 && <Parking2 />}
      </div>
    </div>
  );
}

function Parking1({ data }) {
  return (
    <div>
      {data.map((itm, idx) => {
        return (
          <ul key={idx}>
            <li>주차 층수: {itm.floor}</li>
            <li>주차 수: {itm.parking}</li>
            <li>잔여 주차 수: {itm.parkingarea}</li>
            <li>업데이트 날짜: {itm.datetm}</li>
          </ul>
        );
      })}
    </div>
  );
}

function Parking2(props) {}
