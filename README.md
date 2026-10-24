# @x12i/analytix usage example

Catalog-driven analytics runtime that resolves and runs queries, functions, matrices, dashboards, and dependency tiers, with caching and execution traces.

This consuming application demonstrates **run a catalog query over in-memory source records** using the published npm package, pinned to `1.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Run a parameterized analytic and inspect its cache result and execution trace.
- Explain the dependencies of an analytic before executing it.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/analytix)
- [Implementation monorepo](https://github.com/x12i/analytix)
- [Reviewed package source](https://github.com/x12i/analytix/tree/cf2ed708652df6f853af877340acc385d17c76f2/packages/analytix)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

The definitions, outputs, callers, and source data are authored fixtures. Storage is in memory, and model assignment/resolution never invokes a provider. The function example executes only the source written in this repository; the package's Node VM mode is not a security boundary for untrusted code. The service authentication example inspects the demo/default hook and does not constitute a production authentication setup.
