import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // In-memory leads storage (simulates background lead capture)
  const leads: any[] = [];

  // API Routes
  app.post('/api/inquiry', (req, res) => {
    const { name, email, type, date, message } = req.body;

    console.log('--- [Inquiry] New Message Received ---');
    console.log(`From: ${name} (${email})`);
    console.log(`Celebration Type: ${type}`);
    console.log(`Tentative Date: ${date}`);
    console.log(`Personal Message: ${message}`);
    console.log('------------------------------------');

    res.status(200).json({ success: true });
  });

  app.post('/api/leads', (req, res) => {
    const { name, email, quoteDetails } = req.body;
    
    // Store in "Background" leads database
    const newLead = { name, email, quoteDetails, timestamp: new Date() };
    leads.push(newLead);

    console.log('--- [Quote Lead] Captured ---');
    console.log(`Lead: ${name} (${email})`);
    console.log(`Estimated Total: ₹${quoteDetails.total.toLocaleString()}`);
    console.log(`Days Captured: ${quoteDetails.days.length}`);
    console.log('----------------------------');

    // Simulate sending email to customer
    // nodemailer logic would go here in production

    res.status(200).json({ success: true, message: 'Quote captured and email dispatched.' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
