export default function handler(req, res) {
    // Забираем первый IP из цепочки прокси-серверов Vercel
    const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress;

    // Отдаем как чистый текст с переносом строки для красивого curl
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send(`${ip}\n`);
}
