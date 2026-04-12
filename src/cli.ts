#!/usr/bin/env node
/**
 * Enterprise Agent Orchestration — CLI entry point
 */
import { createServer } from './index.js';

const args = process.argv.slice(2);
const port = parseInt(args.find((_, i, a) => a[i - 1] === '--port') ?? '3000', 10);
const host = args.find((_, i, a) => a[i - 1] === '--host') ?? '0.0.0.0';

console.log(`Starting enterprise-agent-orchestration on ${host}:${port}...`);
createServer({ port, host, verbose: true }).catch((err) => {
  console.error('Failed to start:', err);
  process.exit(1);
});
