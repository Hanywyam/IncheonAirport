import { connectDB } from "@/utill/database";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("parking");
  let result = await db.collection("reserv").find().toArray();
  res.status(200).json(result);
}
