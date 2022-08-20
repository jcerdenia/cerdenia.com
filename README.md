# music.cerdenia.com

My personal music website at [cerdenia.com](https://music.cerdenia.com) containing a detailed list of works with audio samples, program notes, perusal scores, a biography and photographs, press items, and events. 

Built with Next.js, written in TypeScript, and deployed with Vercel.

## Running Locally

After cloning the repository, `cd` into the root folder and install dependencies before running the development server.

```
npm i
npm run dev
```

Alternatively, build an optimized version of the project and run locally.

```
npm run build
npm run start
```

The project runs by default at `localhost:3000`.

## Frameworks & Libraries
- [Next.js](https://nextjs.org), a [React](https://reactjs.org/) framework
- [Bootstrap](https://getbootstrap.com/) and [React Bootstrap](https://react-bootstrap.github.io/) for styling and pre-built components
- [gray-matter](https://www.npmjs.com/package/gray-matter) and [markdown-it](https://www.npmjs.com/package/gray-matter) for parsing markdown at build time