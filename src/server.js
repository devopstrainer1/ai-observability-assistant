const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory stores
const telemetry = [];
const incidents = [];
const rules = [
  { id: 1, type: 'latency', thresholdMs: 500 },
  { id: 2, type: 'error_rate', threshold: 0.05 },
];

app.post('/api/telemetry', (req, res) => {
  const item = { id: telemetry.length + 1, ...req.body, ts: Date.now() };
  telemetry.push(item);

  // Evaluate rules
  for (const r of rules) {
    if (r.type === 'latency' && item.latencyMs >= r.thresholdMs) {
      incidents.push({ id: incidents.length + 1, ruleId: r.id, message: `High latency: ${item.latencyMs}ms`, ts: Date.now() });
    }
    if (r.type === 'error_rate' && item.errorRate >= r.threshold) {
      incidents.push({ id: incidents.length + 1, ruleId: r.id, message: `High error rate: ${item.errorRate}`, ts: Date.now() });
    }
  }

  res.json({ success: true });
});

app.get('/api/telemetry', (req, res) => res.json(telemetry.slice(-100)));
app.get('/api/incidents', (req, res) => res.json(incidents.slice(-100)));
app.get('/api/rules', (req, res) => res.json(rules));

app.get('/', (req, res) => res.send('AI Observability Assistant - backend running'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
