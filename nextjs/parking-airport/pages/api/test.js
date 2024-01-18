import { connectDB } from "@/utill/database";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("parking");
  let result = await db.collection("reserv").find().toArray();
  res.status(200).json(result);
}
/* 
  if (req.method === "GET") {
    try {
      const client = await connectDB;
      const db = client.db("parking");

      // phoneNum로 도큐먼트 가져오기
      const reservations = await db
        .collection("reserv")
        .find({ key: phoneNum })
        .toArray();

      res.status(200).json(reservations);
    } catch (error) {
      console.error("데이터를 가져오는 동안 오류 발생:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
  */
/* 
  // 주차장 API 호출
  const API_KEY =
    "5SVTXpDxj6L4yXqqxYzgW%2FoV%2FfKo4RrzYpL1JNuxk7vaSXA%2FwC11y%2BDdfjIrs6SRZ2lwAZuJGXy8TIPl2hAsvA%3D%3D";
  const URL = `http://apis.data.go.kr/B551177/StatusOfParking/getTrackingParking?serviceKey=${API_KEY}&type=json`;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL, {
          headers: {
            Accept: "application/json",
          },
        });
        console.log(res.data);
        setData(res.data);
        setError(null);
      } catch (err) {
        setError("데이터를 불러오는 중 에러가 발생");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <h2>loading...</h2>;
  if (error) return <h2>오류입니다.</h2>;
 */
