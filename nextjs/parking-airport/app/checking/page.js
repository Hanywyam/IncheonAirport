// "use client";
// import { useEffect, useState } from "react";
import Image from "next/image";
import CheckInfo from "./page.module.css";
import { connectDB } from "@/utill/database";
/* 
async function fetchData() {
  // API 요청을 통해 몽고디비에서 데이터 가져오기
  const response = await fetch("/api/reserv", {
    method: "POST",
    // 필요한 경우 다양한 설정을 추가할 수 있습니다.
  });

  if (!response.ok) {
    throw new Error("데이터를 가져오는데 실패했습니다.");
  }

  const data = await response.json();
  return data;
}
 */

export default function Checking() {
  /* 
  const [reservationData, setReservationData] = useState([]);

  useEffect(() => {
    // 페이지가 로드될 때 데이터를 가져오도록 useEffect 사용
    fetchData()
      .then((data) => {
        setReservationData(data);
      })
      .catch((error) => {
        console.error("데이터를 가져오는 동안 오류 발생:", error.message);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행
 */
  return (
    <div>
      <h2 className={CheckInfo.Title}>
        <em>Incheon Airport</em> 공항의 역사를 새로 쓰다
      </h2>

      <table className={CheckInfo.table}>
        <thead>
          <tr>
            <th>예약번호</th>
            <th>터미널</th>
            <th>예약주차장</th>
            <th>차량번호</th>
            <th>이용예정일시</th>
            <th>상태</th>
            <th>변경/취소</th>
          </tr>
        </thead>
        <tbody>
          {/* 
          {reservationData.map((reservation) => (
            <tr key={reservation._id}>
              <td>{reservation._id}</td>
              <td>{reservation.terminal}</td>
              <td>{reservation.parkingArea}</td>
              <td>{reservation.carNumber}</td>
              <td>{reservation.usageDateTime}</td>
              <td>{reservation.status}</td>
              <td>
                <button>변경</button>
                <button>취소</button>
              </td>
            </tr>
          ))}
          */}
        </tbody>
      </table>
    </div>
  );
}
