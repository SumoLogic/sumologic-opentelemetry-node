# Sumo Logic OpenTelemetry Node

An all-in-one runner for node.js projects used to enable OpenTelemetry auto-instrumentation.

It contains all supported detectors, propagators and auto-instrumentation plugins.

## Usage

Instead of running your script like `node index.js`, do `npx @sumologic/opentelemetry-node index.js`.

Your `index.js` file will run automatically with a started [`@opentelemetry/sdk-node`](https://www.npmjs.com/package/@opentelemetry/sdk-node).

Remember to provide configuration using environment variables:

- `OTEL_EXPORTER_OTLP_TRACES_ENDPOINT` - source URL of your traces collector
- `OTEL_SERVICE_NAME` - a logical service name that represents its business logic
- `OTEL_RESOURCE_ATTRIBUTES` - extra attributes attached to all spans

e.g. `OTEL_SERVICE_NAME=api OTEL_RESOURCE_ATTRIBUTES="application=default,deployment=test" OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=https://... npx @sumologic/opentelemetry-node index.js`.

To speed up `npx @sumologic/opentelemetry-node` command, you can do `npm i -g @sumologic/opentelemetry-node`.

## Instrumented packages

This package enables all officially supported core and contrib auto-instrumentation plugins defined in [@opentelemetry/auto-instrumentations-node](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node), that is:

- [@opentelemetry/instrumentation-dns](https://www.npmjs.com/package/@opentelemetry/instrumentation-dns)
- [@opentelemetry/instrumentation-http](https://www.npmjs.com/package/@opentelemetry/instrumentation-http)
- [@opentelemetry/instrumentation-grpc](https://www.npmjs.com/package/@opentelemetry/instrumentation-grpc)
- [@opentelemetry/instrumentation-express](https://www.npmjs.com/package/@opentelemetry/instrumentation-express)
- [@opentelemetry/instrumentation-koa](https://www.npmjs.com/package/@opentelemetry/instrumentation-koa)
- [@opentelemetry/instrumentation-graphql](https://www.npmjs.com/package/@opentelemetry/instrumentation-graphql)
- [@opentelemetry/instrumentation-ioredis](https://www.npmjs.com/package/@opentelemetry/instrumentation-ioredis)
- [@opentelemetry/instrumentation-redis](https://www.npmjs.com/package/@opentelemetry/instrumentation-redis)
- [@opentelemetry/instrumentation-pg](https://www.npmjs.com/package/@opentelemetry/instrumentation-pg)
- [@opentelemetry/instrumentation-mongodb](https://www.npmjs.com/package/@opentelemetry/instrumentation-mongodb)
- [@opentelemetry/instrumentation-mysql](https://www.npmjs.com/package/@opentelemetry/instrumentation-mysql)

## Manual instrumentation

In order to create spans manually, install `@opentelemetry/api` package: `npm i @opentelemetry/api@^1.0.4`.

Example:

```javascript
const opentelemetry = require('@opentelemetry/api');

const tracer = opentelemetry.trace.getTracer('default');
const span = tracer.startSpan('operation');
span.end();
```
