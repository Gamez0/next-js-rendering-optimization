# SSG with Dynamic Routes

This project demonstrates how to use `generateStaticParams` in Next.js 15 to generate static pages for dynamic routes. It showcases the use of `Static Site Generation (SSG)` for pre-rendering pages at build time.

## Features

- Static Site Generation (SSG) for dynamic routes

- Uses `generateStaticParams` to pre-generate pages

- Optimized performance with build-time rendering

- Minimal and efficient Next.js 15 setup

## Installation
```bash
yarn install
```
## Running the Development Server
```bash
yarn dev
```
## How It Works

1. The project includes dynamic routes (`[id].tsx`).

2. `generateStaticParams` is used to fetch all possible route parameters at build time.

3. Next.js pre-generates these pages and serves them statically.

## Example Code
```tsx
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return posts.map((post: { id: number }) => ({ id: post.id.toString() }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();
  return <h1>{post.title}</h1>;
}
```
## Why Use `generateStaticParams`?

- Helps pre-render all necessary pages at build time.

- Improves performance by serving static HTML instead of fetching data on each request.

- Ideal for blogs, documentation sites, and other content that doesn't change frequently.

## Conclusion

This project highlights the benefits of SSG with dynamic routes, leveraging `generateStaticParams` for efficient pre-rendering in Next.js 15.