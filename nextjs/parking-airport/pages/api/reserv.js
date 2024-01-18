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
    }
  }
}
