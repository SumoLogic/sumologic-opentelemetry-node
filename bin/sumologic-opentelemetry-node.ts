#!/usr/bin/env node

import process from 'process';
import fs from 'fs/promises';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter(),
  instrumentations: getNodeAutoInstrumentations(),
});

const start = async () => {
  await sdk.start();

  const [_node, _thisBin, givenEntryPath] = process.argv;
  const realEntryPath = await fs.realpath(givenEntryPath);

  // when running `node .` the second argument is automatically converted, so we're doing the same thing here
  process.argv[2] = realEntryPath;

  // remove argument showing that the sumologic-opentelemetry-node was the original caller
  process.argv.splice(1, 1);

  // at this point the real script should have `process.argv` defined as it would be originally called
  require(realEntryPath);
};

start().catch((error) => {
  // Without this catch block, node would print a unhandled promise exception which would change the behaviour how
  // scripts acts with sumologic-opentelemetry-node running.
  // Instead we log the error into the stderr and finish the process with error code status.
  console.error(error);
  process.exit(1);
});

process.on('SIGTERM', () => {
  sdk
    .shutdown()
    .catch((error) =>
      console.log('Error shutting down OpenTelemetry SDK', error),
    )
    .finally(() => process.exit(0));
});
