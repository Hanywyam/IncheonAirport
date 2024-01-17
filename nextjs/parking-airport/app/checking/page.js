import Image from "next/image";
import CheckInfo from "./page.module.css";
import { connectDB } from "@/utill/database";

export default async function Checking() {
  const client = await connectDB;
  const db = client.db("parking");
  let result = await db.collection("reserv").find().toArray();

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
          {result ? (
            result.map((reservation) => (
              <tr key={reservation._id}>
                <td>{reservation._id}</td>
                <td>{reservation.terminal}</td>
                <td>{reservation.parkingArea}</td>
                <td>{reservation.carNum}</td>
                <td>
                  {reservation.reservIn} ~ {reservation.reservOut}
                </td>
                <td>예약완료</td>
                <td>
                  <button>변경</button>
                  <button>취소</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">검색 결과가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
