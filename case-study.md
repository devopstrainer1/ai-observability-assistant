# AI Observability Assistant — Case Study

Overview

This weekend project demonstrates a minimal AI Observability Assistant. The goal is to show how to capture model telemetry, define alerting rules, and present incidents in a simple UI so engineers can quickly triage issues.

Highlights

- Simulated telemetry producer that sends latency and error-rate events
- Rules engine that evaluates thresholds and generates incidents
- UI to view live telemetry and incidents

Screenshots

- submission/screen1.png — Telemetry dashboard
- submission/screen2.png — Incident detail

Architecture

- Express server exposes a few endpoints: /api/telemetry, /api/incidents, /api/rules
- Frontend polls these endpoints and renders a simple dashboard

Implementation notes and tradeoffs

- In-memory store chosen for speed; production should use durable storage
- Rule engine is intentionally simple (threshold based)
- No auth in demo; production would require org/user boundaries

Run it locally

npm install
npm run dev

Open http://localhost:3000

