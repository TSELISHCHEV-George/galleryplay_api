// минимальный обработчик для проверки
export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json([]);
  }
  return res.status(405).json({ error: 'Method Not Allowed' });
}
