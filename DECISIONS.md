# DECISIONS

## Project Goal
Create a small, well-documented public case study that showcases product thinking and a working prototype of an AI Observability Assistant — a tool that helps engineers monitor, debug, and investigate AI model behavior and telemetry.

## Scope
- Minimal backend that ingests simulated telemetry events
- Simple rule engine to evaluate alert conditions
- Basic React UI to view telemetry and alerts
- Focus on clarity, documentation, and reproducibility over completeness

## Tech Stack
- Node.js, Express.js
- TypeScript
- React (Vite) for frontend demo
- SQLite (if persistence needed) or in-memory store for simplicity

## Design Choices
- Use in-memory data for quick demo and easier local setup
- Keep code small and well-documented for recruiters
- Provide clear README and case-study narrative

## Next steps
- Add more telemetry types (predictions, latencies, error traces)
- Integrate with real model endpoints or log collectors
- Add auth, roles, and multi-tenant support
