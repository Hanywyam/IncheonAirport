import { connectDB } from "@/utill/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.password == "") {
      res.status(500).json("내용을 입력해 주세요.");
    }
    try {
      const client = await connectDB;
      const db = client.db("parking");
      let result = await db.collection("reserv").insertOne(req.body);
      return res.status(200).redirect(302, "/checking");
    } catch (err) {
      console.log(err);
    } finally {
      await client.close();
    }
  }
  
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
}
