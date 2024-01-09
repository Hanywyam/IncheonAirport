import React from "react";
import headerstyle from "../assets/style/header.module.css";

const Header = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <header className={headerstyle.header}>
      <h1 className={headerstyle.logo}>
        <a href="/">
          <em>인천국제공항</em>
        </a>
      </h1>

      <nav className={headerstyle.navigation}>
        {/* <li>주차요금 안내</li> */}
        <li>주차장 실시간 현황</li>
        <li>주차장 예약</li>
        <li>예약 조회/변경/취소</li>
      </nav>
    </header>
  );
};

export default Header;
