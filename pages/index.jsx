import Head from 'next/head';
import { Ide } from '../components/Ide';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tom Sanders - Portfolio</title>
        <meta name="description" content="Personal Website for Tom Sanders" />
        <meta charset="UTF-8" />
        <meta name="author" content="Tom Sanders" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Ide />
    </>
  );
};
