export default function handler(req, res) {
    // Генерируем 50 МБ чистого мусора
    const buffer = Buffer.alloc(50 * 1024 * 1024, 'X'); 

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    res.status(200).send(buffer);
}

