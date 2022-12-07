import Head from 'next/head';
import { MobileNav } from '../components/MobileNav';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tom Sanders - Portfolio</title>
        <meta name="description" content="Personal Website for Tom Sanders" />
        <meta charset="UTF-8" />
        <meta name="author" content="Tom Sanders" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
      </Head>
      <main>
        <MobileNav />
      </main>
    </>
  );
};
