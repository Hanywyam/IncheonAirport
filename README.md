# ✈ IncheonAirport

### 인천공항 주차장 실시간 주차 현황 및 장기주차 예약 시스템 Incheon Airport parking area information and reservation application

<!-- ### [⬇프로젝트 보러가기](#프로젝트-보러가기-1) -->

# :boom: Project Timeline

## 240110-20

- Next.js 공부 및 프로젝트 적용
- mongoDB 적용 `npm i mongdb`
- 예약 데이터 연결 완료 -> 조회한 데이터 가져오기가 안됨.

> 문제 1 : mongoDB의 데이터 중 특정 값 조회하여 가져오기
>
> > 'child_process'에대한 아래와 같은 에러가 발생...

```
Failed to compile
./node_modules/mongodb/lib/client-side-encryption/mongocryptd_manager.js:34:24
Module not found: Can't resolve 'child_process'

https://nextjs.org/docs/messages/module-not-found

Import trace for requested module:
./node_modules/mongodb/lib/client-side-encryption/auto_encrypter.js
./node_modules/mongodb/lib/index.js
./utill/database.js
./app/checking/confirm.js
```

- [오류참고1](https://stackoverflow.com/questions/77773159/how-to-query-database-using-react-redux-toolkit-in-nextjs14)
- [오류참고2](https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/)
- [오류참고3](https://www.mongodb.com/community/forums/t/performance-improvement-for-nextjs-mongodb-app/212889/1)
- [오류참고4](https://stackoverflow.com/questions/70034774/nextjs-fetching-data-from-mongodb-using-getserversideprops)

> 문제 2 : openAPI 연결 중 CORS 오류가 난다!
>
> > api를 연결했는데 자꾸 cors 오류가 난다. `rewrites`에 cors설정을 해도 같은 오류가 반복되었다.

```
// pages.js
 useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
        });
        // 이하 생략
}}}

// 서버 오류
Access to XMLHttpRequest at '(http://apis.data.go.kr/B551177/StatusOfParking/getTrackingParking?serviceKey=5SVTXpDxj6L4yXqqxYzgW%2FoV%2FfKo4RrzYpL1JNuxk7vaSXA%2FwC11y%2BDdfjIrs6SRZ2lwAZuJGXy8TIPl2hAsvA%3D%3D&type=json)' from origin '(http://localhost:3000)' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

> > > CORS설정을 헤더에 넣어보기도 하고, header의 내용을 지워보기도 해봤지만 계속 같은 오류의 반복이었다. 그러던 중 헤더 자체를 지워 `axios.get(URL)`로 변경했을 뿐인데..해결되었다.

## 240110

- 주차장 실시간 현황 API 연결
  - Install packages
    - react-router-dom
    - axios

> 문제 1 : 사용하는 API 데이터포맷도 XML 이었다.
>
> > 유형은 [xml, json]이었지만, default=xml로 작성되어 있었다. json만 다뤄봐서 xml은 생소했다. <!-- [TCPschool:xml](https://www.tcpschool.com/xml/intro) -->
> >
> > > type값을 이용하여 json으로 변경해서 사용해보자! <br/> xml, json 두타입을 제공하는 API의 경우, 기본설정이 xml이라도 타입값을 이용하여 json으로 변경이 가능하다!
> > > 문제 2 : Next.js는 백엔드 라이브러리인줄 알았는데..
>
> > 이번 작업에서 백앤드에서는 노드js를 사용해보려고 했다. API연결을 백으로 해야한다면, 지금 사용하면 되겠다 싶어 알아보았는데 JavaScript의 또다른 라이브러리로 '리액트를 기반으로하는 라이브러리'인 Next.js. React와는 또다른 라이브러리로 구조를 다시 작업해야 한다.
> >
> > > Next.js를 공부해보자!

## 240109

- HTML/CSS 뼈대 만들기

> 문제 1 : css 폰트 적용이 안된다.
>
> > 포트폴리오 작업때와 같이 index.css에 font-face를 넣고 index.js에 연결되어있는데, 로컬 폰트가 적용이 안됨.

> 문제 2 : 로고 적용이 원활하게 되지 않는다.
>
> > h1에 background로 넣어보려고 했는데, 사이즈가 제대로 적용이 안됨.
> >
> > > h1에 img태그를 넣어 로컬이미지를 불러 적용. 넘치는 부분은 overflow:hidden으로 가려서 해결.

- 구성
  - 메인페이지
  - ~~요금안내~~
  - 주차장 실시간 현황
  - 주차장 예약
  - 예약 조회/변경/취소
- 실시간 현황 API 연결
- 데이터베이스 연결, 관리

## 240108

### 목표

- 인천공항 주차장 실시간 현황 및 장기주차 예약시스템

### 프로젝트 선정 이유

- 코로나 이후 해외여행에 대한 갈망이 높아져 이용객이 많아진 소식을 듣고 나또한 비행기를 타고 여행하고 싶다는 욕구가 생겨 이 프로젝트를 구상하게 되었다.
- 인천공항 주차장의 주차장별 실시간 차량 현황 안내, 장기 주차 예약 시스템 제작을 구상.
- 기본 UI는 인천공항의 주차 안내 시스템을 바탕으로 제작할 예정.
- API는 실시간 주차현황을 가져와 사용하고, 장기 주차 예약 시스템은 가상의 주차장을 설계하여 구성할 계획.
- [인천국제공항](https://www.airport.kr/ap/ko/index.do)<br>
- [인천국제공항 주차 예약](https://parking.airport.kr/reserve)

### 프로토타입 제작

## 240106

### 개인 프로젝트 구상

- 지금까지 배운 내용을 바탕으로 개인 프로젝트 제작.

##### 1안) KBL api를 이용한 농구 경기 일정 확인 및 예약 어플리케이션

<details>
<summary>[내용 열기/접기]</summary>

- [API](https://betsapi.com/lt/2148/Korea-KBL)
- 한국 프로 농구 경기 일정 확인과 농구 경기 예약 어플리케이션 제작을 구상.
- 현재 농구 시즌으로 평소 농구경기 보는 것을 좋아해 생각해본 어플리케이션.
- 찾은 API 중 1개는 한국, 1개는 외국 API로 한국 API는 20년 이후 업데이트가 멈췄고, 외국 API 월 10달러의 유료 서비스 였음.
- 작업 후 지속적인 유지가 어려울 것 같아 보류.

</details>

##### 2안) 경기도 동물병원 위치 정보 안내 및 병원 예약 시스템

<details>
<summary>[내용 열기/접기]</summary>

- [API](https://data.gg.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=Y5M0CVS8XM2C821G09A813809578&infSeq=3&order=&loc=&searchWord=%EB%8F%99%EB%AC%BC%EB%B3%91%EC%9B%90+%ED%98%84%ED%99%A9)
- 경기도 내 동물병원 위치(지도), 정보 안내 및 병원 예약 시스템 제작을 구상.
- 현재 고양이를 반려하고 있어 생각해본 어플리케이션.
- UI디자인부터 xml API 공부도 함께 필요한데, 프로젝트 기간이 한정적이라 추후 두번째 개인 프로젝트로 제작 구상 중.

</details>

##### **3안) 인천공항 주차장 실시간 현황 및 장기주차 예약시스템**

- [API](https://www.data.go.kr/data/15095047/openapi.do)
- 인천공항 주차장의 주차장별 실시간 차량 현황 안내, 장기 주차 예약 시스템 제작을 구상.
- 기본 UI는 인천공항의 주차 안내 시스템을 바탕으로 제작할 예정.
- API는 실시간 주차현황을 가져와 사용하고, 장기 주차 예약 시스템은 가상의 주차장을 설계하여 구성할 계획.

<!--
# 💫프로젝트 보러가기

### [⬆ Go to Top](#-team-nunettine) -->
