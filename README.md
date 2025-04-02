# Next.js Rendering Optimization

This monorepo contains multiple projects focused on optimizing Next.js rendering strategies, comparing CSR, SSR, SSG, and ISR, and exploring how to handle dynamic data updates efficiently using ISR.

## Table of Contents

- [Introduction](#introduction)
- [Projects](#projects)
- [Getting Started](#getting-started)
- [Development](#development)
- [License](#license)

## Introduction

Next.js offers various rendering strategies, including Client-Side Rendering (CSR), Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR). This monorepo explores and compares these strategies in the context of performance optimization and dynamic data handling.

Through this repository, you'll understand when to use each rendering strategy and how ISR can be leveraged to efficiently update dynamic content without sacrificing performance.

## Projects

This monorepo includes the following two projects:

### 1. **CSR, SSR, SSG, and ISR Comparison**

A project that compares different Next.js rendering strategies (CSR, SSR, SSG, ISR) in terms of performance, scalability, and suitability for various use cases. This project demonstrates how different rendering methods can impact the initial page load, user experience, and server load.

### 2. **Optimizing Dynamic Data Updates with ISR**

A project that focuses on optimizing the handling of dynamic data updates in Next.js using Incremental Static Regeneration (ISR). It shows how ISR can be used to regenerate static pages with fresh data periodically without the need for full re-builds. This project emphasizes performance improvements when dealing with dynamic content such as music URLs with expiration times.

## Getting Started

To get started with this monorepo, follow these steps:

### 1. Install Dependencies

Install dependencies for the entire monorepo:

```bash
yarn install
```

### 2. Running the Projects

After installing the dependencies, you can run the projects individually.

- CSR, SSR, SSG, and ISR Comparison:

```bash
cd packages/csr-ssr-ssg-isr-comparison
yarn dev
```

- Optimizing Dynamic Data Updates with ISR:

```bash
cd packages/optimizing-dynamic-data-with-isr
yarn dev
```

## Development

### Lerna

This monorepo uses Lerna to manage packages and dependencies between the projects. Lerna makes it easy to develop and test projects in a monorepo.

To run scripts across all packages, you can use Lerna commands. For example, to run a script in all packages, you can use:

```bash
yarn lerna run <script-name>
```

## Yarn Workspaces

We are using Yarn Workspaces to manage dependencies and simplify package management. This allows us to share common dependencies across all projects in the monorepo and avoid duplication.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
