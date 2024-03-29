import footerstyle from "../assets/style/footer.module.css";

const Footer = () => {
  return (
    <footer className={footerstyle.footerContn}>
      <address>
        <p>
          인천광역시 중구 제2터미널대로 338 예약주차 관리팀 : 032-743-3460~1
        </p>
        <p>
          Copyright Incheon International Airport Corporation. All rights
          reserved.
        </p>
      </address>

      <ul className={footerstyle.footerList}>
        <li>이용안내</li>
        <li>개인정보처리방침</li>
        <li>공지사항</li>
        <li>QNA</li>
      </ul>
    </footer>
  );
};

export default Footer;
