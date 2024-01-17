"use client";
import CheckInfo from "./page.module.css";
import { connectDB } from "@/utill/database";
import { useState } from "react";

export default function Confirm({ reserv }) {
  const [phoneNum, setPhoneNum] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    if (searchResult) {
      console.log("Found Document:", searchResult);
      setResult([searchResult]);
    } else {
      console.log("Document not found for phone number:", phoneNum);
      setResult(null);
    }

    setResult(null);
  };

  return (
    <form action="/api/reserv" method="GET">
      <label htmlFor="searchPhoneNum">휴대폰 번호 검색: </label>
      <input
        type="tel"
        id="searchPhoneNum"
        value={phoneNum}
        onChange={(e) => setPhoneNum(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </form>
  );
}

export async function getStaticProps(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const reservations = await db
      .collection("reserv")
      .find({ key: phoneNum })
      .toArray();

    res.status(200).json(reservations);
    return {
      props: { reservations: JSON.parse(JSON.stringify(reservations)) },
    };
  } catch (err) {
    console.error(err);
  }
}
