import assert from 'node:assert/strict';
import { AnalytixCore } from '@x12i/analytix';
import { registry } from '@x12i/analytix-catalox';
await registry.bootstrap();
const core = new AnalytixCore({ mockMode: true });
core.setMockSourceData('events', [
  { eventType: 'Accessed', createdAt: '2026-01-01T12:00:00.000Z', content: { informationType: 'example-document' } },
  { eventType: 'Downloaded', createdAt: '2026-01-01T13:00:00.000Z', content: { informationType: 'example-document' } },
]);
const result = await core.run('risk.events.byType', { from: '2026-01-01T00:00:00.000Z', to: '2026-01-02T00:00:00.000Z' });
assert.equal(result.analyticId, 'risk.events.byType');
assert(result.data.some(row => row.count === 2));
assert(core.getRuntimeStore().listExecutions().length > 0);
console.log(result);
