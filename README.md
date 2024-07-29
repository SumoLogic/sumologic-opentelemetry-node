# Sumo Logic OpenTelemetry Node

An all-in-one runner for node.js projects used to enable OpenTelemetry auto-instrumentation.

It contains all supported detectors, propagators and auto-instrumentation plugins.

## Usage

Instead of running your script like `node index.js`, do `npx @sumologic/opentelemetry-node index.js`.

Your `index.js` file will run automatically with a started [`@opentelemetry/sdk-node`](https://www.npmjs.com/package/@opentelemetry/sdk-node).

Remember to provide configuration using environment variables:

- `OTEL_EXPORTER_OTLP_ENDPOINT` - source URL of your traces collector
- `OTEL_SERVICE_NAME` - a logical service name that represents its business logic
- `OTEL_RESOURCE_ATTRIBUTES` - extra attributes attached to all spans

e.g. `OTEL_SERVICE_NAME=api OTEL_RESOURCE_ATTRIBUTES="application=default,deployment=test" OTEL_EXPORTER_OTLP_ENDPOINT=https://... npx @sumologic/opentelemetry-node index.js`.

To speed up `npx @sumologic/opentelemetry-node` command, you can do `npm i -g @sumologic/opentelemetry-node`.

## Instrumented packages

This package enables all officially supported core and contrib auto-instrumentation plugins defined in [@opentelemetry/auto-instrumentations-node](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node), that is:

- [opentelemetry/instrumentation-amqplib](https://www.npmjs.com/package/@opentelemetry/instrumentation-amqplib)
- [opentelemetry/instrumentation-aws-lambda](https://www.npmjs.com/package/@opentelemetry/instrumentation-aws-lambda)
- [opentelemetry/instrumentation-aws-sdk](https://www.npmjs.com/package/@opentelemetry/instrumentation-aws-sdk)
- [opentelemetry/instrumentation-bunyan](https://www.npmjs.com/package/@opentelemetry/instrumentation-bunyan)
- [opentelemetry/instrumentation-cassandra-driver](https://www.npmjs.com/package/@opentelemetry/instrumentation-cassandra-driver
- [opentelemetry/instrumentation-connect](https://www.npmjs.com/package/@opentelemetry/instrumentation-connect)
- [opentelemetry/instrumentation-cucumber](https://www.npmjs.com/package/@opentelemetry/instrumentation-cucumber
- [opentelemetry/instrumentation-dataloader](https://www.npmjs.com/package/@opentelemetry/instrumentation-dataloader)
- [opentelemetry/instrumentation-dns](https://www.npmjs.com/package/@opentelemetry/instrumentation-dns)
- [opentelemetry/instrumentation-express](https://www.npmjs.com/package/@opentelemetry/instrumentation-express)
- [opentelemetry/instrumentation-fastify](https://www.npmjs.com/package/@opentelemetry/instrumentation-fastify)
- [opentelemetry/instrumentation-fs](https://www.npmjs.com/package/@opentelemetry/instrumentation-fs)
- [opentelemetry/instrumentation-generic-pool](https://www.npmjs.com/package/@opentelemetry/instrumentation-generic-pool)
- [opentelemetry/instrumentation-graphql](https://www.npmjs.com/package/@opentelemetry/instrumentation-graphql)
- [opentelemetry/instrumentation-grpc](https://www.npmjs.com/package/@opentelemetry/instrumentation-grpc)
- [opentelemetry/instrumentation-hapi](https://www.npmjs.com/package/@opentelemetry/instrumentation-hapi)
- [opentelemetry/instrumentation-http](https://www.npmjs.com/package/@opentelemetry/instrumentation-http)
- [opentelemetry/instrumentation-ioredis](https://www.npmjs.com/package/@opentelemetry/instrumentation-ioredis)
- [opentelemetry/instrumentation-knex](https://www.npmjs.com/package/@opentelemetry/instrumentation-knex)
- [opentelemetry/instrumentation-koa](https://www.npmjs.com/package/@opentelemetry/instrumentation-koa)
- [opentelemetry/instrumentation-lru-memoizer](https://www.npmjs.com/package/@opentelemetry/instrumentation-lru-memoizer)
- [opentelemetry/instrumentation-memcached](https://www.npmjs.com/package/@opentelemetry/instrumentation-memcached)
- [opentelemetry/instrumentation-mongodb](https://www.npmjs.com/package/@opentelemetry/instrumentation-mongodb)
- [opentelemetry/instrumentation-mongoose](https://www.npmjs.com/package/@opentelemetry/instrumentation-mongoose)
- [opentelemetry/instrumentation-mysql](https://www.npmjs.com/package/@opentelemetry/instrumentation-mysql)
- [opentelemetry/instrumentation-mysql2](https://www.npmjs.com/package/@opentelemetry/instrumentation-mysql2)
- [opentelemetry/instrumentation-nestjs-core](https://www.npmjs.com/package/@opentelemetry/instrumentation-nestjs-core)
- [opentelemetry/instrumentation-net](https://www.npmjs.com/package/@opentelemetry//instrumentation-net)
- [opentelemetry/instrumentation-pg](https://www.npmjs.com/package/@opentelemetry/instrumentation-pg)
- [opentelemetry/instrumentation-pino](https://www.npmjs.com/package/@opentelemetry/instrumentation-pino)
- [opentelemetry/instrumentation-redis](https://www.npmjs.com/package/@opentelemetry/instrumentation-redis)
- [opentelemetry/instrumentation-redis-4](https://www.npmjs.com/package/@opentelemetry/instrumentation-redis-4)
- [opentelemetry/instrumentation-restify](https://www.npmjs.com/package/@opentelemetry/instrumentation-restify)
- [opentelemetry/instrumentation-router](https://www.npmjs.com/package/@opentelemetry/instrumentation-router)
- [opentelemetry/instrumentation-socket.io](https://www.npmjs.com/package/@opentelemetry/instrumentation-socket.io)
- [opentelemetry/instrumentation-tedious](https://www.npmjs.com/package/@opentelemetry/instrumentation-tedious)
- [opentelemetry/instrumentation-undici](https://www.npmjs.com/package/@opentelemetry/instrumentation-undici)
- [opentelemetry/instrumentation-winston](https://www.npmjs.com/package/@opentelemetry/instrumentation-winston)

## Manual instrumentation

In order to create spans manually, install `@opentelemetry/api` package: `npm i @opentelemetry/api@^1.9.0`.

Example:

```javascript
const opentelemetry = require('@opentelemetry/api');

const tracer = opentelemetry.trace.getTracer('default');
const span = tracer.startSpan('operation');
span.end();
```
