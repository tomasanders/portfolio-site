import Head from 'next/head';
import { Developer } from "../components/Developer";

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
      <main className="bg-light-bg h-screen w-screen flex items-center justify-center p-4">
        <div className="[console] w-full h-full bg-black flex flex-col gap-4 rounded-lg">
          <div className="[buttons] flex items-start justify-start gap-2 p-2">
            <div className="rounded-full bg-red-500 h-3 w-3"></div>
            <div className="rounded-full bg-yellow-400 h-3 w-3"></div>
            <div className="rounded-full bg-green-400 h-3 w-3"></div>
            <p className="grow text-right text-slate-300 text-xs">tom_sanders--portfolio.jsx</p>
          </div>
          <div className="[screen] px-4 max-h-[90vh] overflow-scroll pb-4">
            <Developer />
          </div>
        </div>
      </main>
    </>
  );
};
