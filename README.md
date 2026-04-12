# Enterprise Agent Orchestration

![npm](https://img.shields.io/npm/v/@phoenix-assistant/enterprise-agent-orchestration)
![CI](https://github.com/phoenix-assistant/enterprise-agent-orchestration/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

> Kubernetes-style orchestration for AI agents with scheduling, scaling, and health checks

## Installation

```bash
npm install @phoenix-assistant/enterprise-agent-orchestration
```

## Quick Start

```bash
npx @phoenix-assistant/enterprise-agent-orchestration --port 3000
```

```typescript
import { createServer } from '@phoenix-assistant/enterprise-agent-orchestration';

const { server, close } = await createServer({ port: 3000 });
```

## API

### `createServer(config?)`

Start the server.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `port` | `number` | `3000` | Server port |
| `host` | `string` | `0.0.0.0` | Server host |
| `verbose` | `boolean` | `false` | Enable logging |

### Endpoints

| Path | Method | Description |
|------|--------|-------------|
| `/health` | GET | Health check |
| `/api/status` | GET | Service status |

## Development

```bash
npm install
npm test
npm run build
```

## License

MIT © [Phoenix Assistant](https://github.com/phoenix-assistant)
