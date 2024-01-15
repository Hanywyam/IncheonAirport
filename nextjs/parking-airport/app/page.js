import homestyle from "./page.module.css";

export default async function Home() {
  return (
    <div className={homestyle.homeContn}>
      <h2>
        <em>Incheon Airport</em>공항의 역사를 새로 쓰다
      </h2>
    </div>
  );
}
