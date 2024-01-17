import cors from "cors";

const corsMiddleware = cors({
  methods: ["GET", "POST", "OPTIONS"],
});

export default async function handler(req, res) {
  // CORS 미들웨어를 사용하여 CORS를 활성화
  await corsMiddleware(req, res);

  // 실제 API 로직

  // 응답
  res.status(200).json({ message: "Hello, CORS is configured!" });
}
