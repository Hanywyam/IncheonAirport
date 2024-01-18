import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    try {
      const db = client.db("parking");
      let result = await db
        .collection("reserv")
        .deleteOne({ _id: new ObjectId(req.body) });

      if (result.deletedCount > 0) {
        // 삭제가 성공했을 때 응답 보내기
        return res.status(200).json({ message: "삭제완료" });
      } else {
        // 삭제가 실패했을 때 응답 보내기
        return res.status(400).json({ message: "삭제실패" });
      }
    } catch (err) {
      console.error("삭제 중 오류:", err);
      res.status(500).json({ message: "서버 오류" });
    }
  }
}
