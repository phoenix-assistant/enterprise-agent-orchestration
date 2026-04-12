import { describe, it } from 'node:test';
import assert from 'node:assert';
import { createServer, getHealth } from '../src/index.js';

describe('Enterprise Agent Orchestration', () => {
  it('should return health status', () => {
    const health = getHealth();
    assert.strictEqual(health.status, 'healthy');
    assert.strictEqual(health.version, '0.1.0');
    assert.ok(health.timestamp);
  });

  it('should create server', async () => {
    const { server, close } = await createServer({ port: 0, verbose: false });
    assert.ok(server);
    close();
  });
});
