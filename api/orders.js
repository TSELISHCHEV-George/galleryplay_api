// Минимальный эндпоинт-заглушка для проверки рантайма Node 22 на Vercel.
// Если ты видишь {"ok": true, "path": "/api/orders"} — конфиг работает.
export default function handler(req, res) {
  res.status(200).json({ ok: true, path: "/api/orders" });
}
