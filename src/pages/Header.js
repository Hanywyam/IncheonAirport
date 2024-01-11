import React from "react";
import headerstyle from "../assets/style/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <header className={headerstyle.header}>
      <h1 className={headerstyle.logo}>
        <Link to="/">
          <img src={path + "/images/logo.jpg"} alt="" />
          <em>인천국제공항</em>
        </Link>
      </h1>

      <nav className={headerstyle.navigation}>
        {/* <li>주차요금 안내</li> */}
        <Link to="/parking">주차장 실시간 현황</Link>
        <Link to="/reserv">주차장 예약</Link>
        <Link to="/booking">예약 조회/변경/취소</Link>
      </nav>
    </header>
  );
};

export default Header;
