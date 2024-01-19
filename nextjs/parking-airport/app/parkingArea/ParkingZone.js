"use client";
import axios from "axios";
import Image from "next/image";
// import PZone1 from "/public/svg/Parkingzone1.svg";
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
        console.log(res.data.response.body.items);
        setData(res.data.response.body.items);
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
        제1터미널
      </button>
      <button
        onClick={() => toggleTab(2)}
        className={showTab2 ? pAreaStyle.ActiveBtn : ""}>
        제2터미널
      </button>

      {/* <div>
        <PZone1 width={1000} height={700} />
      </div> */}

      <div className={pAreaStyle.tmnalWrap}>
        {showTab1 && (
          <Parking1 data={data} idx={[0, 1, 2, 8, 9, 10, 11, 12, 13, 14]} />
        )}
        {showTab2 && <Parking2 data={data} idx={[3, 4, 5, 6, 7, 15, 16]} />}
      </div>
    </div>
  );
}

function Parking1({ data, idx }) {
  // console.log(data.datetm);
  return (
    <div className={pAreaStyle.parkingCont}>
      <div className={pAreaStyle.parkingImg}>
        <Image
          src="/map_incheon_airport_glance01_ko.png"
          width={580}
          height={320}
        />
      </div>
      <div className={pAreaStyle.parkingTxt}>
        {data
          .filter((a, i) => idx.includes(i))
          .map((itm, idx) => {
            const totalParking = parseInt(itm.parkingarea);
            const remainingParkingArea = parseInt(itm.parking);
            const ratio = Math.max(
              0,
              remainingParkingArea > 0
                ? Math.floor(totalParking - remainingParkingArea)
                : 0
            );
            const displayValue = ratio === 0 ? "만차" : `${ratio}대`;

            return (
              <table key={idx} className={pAreaStyle.parkingWrap}>
                <th>{itm.floor}</th>
                <td>{displayValue}</td>
              </table>
            );
          })}
      </div>
    </div>
  );
}

function Parking2({ data, idx }) {
  return (
    <div className={pAreaStyle.parkingCont}>
      <div className={pAreaStyle.parkingImg}>
        <Image
          src="/map_incheon_airport_glance02_ko.png"
          width={580}
          height={320}
        />
      </div>
      <div className={pAreaStyle.parkingTxt}>
        {data
          .filter((a, i) => idx.includes(i))
          .map((itm, idx) => {
            const totalParking = parseInt(itm.parkingarea);
            const remainingParkingArea = parseInt(itm.parking);
            const ratio = Math.max(
              0,
              remainingParkingArea > 0
                ? Math.floor(totalParking - remainingParkingArea)
                : 0
            );
            const displayValue = ratio === 0 ? "만차" : `${ratio}대`;

            return (
              <table key={idx} className={pAreaStyle.parkingWrap}>
                <th>{itm.floor}</th>
                <td>{displayValue}</td>
              </table>
            );
          })}
      </div>
    </div>
  );
}
