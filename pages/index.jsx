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
      <main className="flex items-center justify-center w-screen h-screen p-4 overflow-hidden bg-slate-400 md:items-start md:justify-start md:pt-16 md:pl-16 md:bg-gradient-to-t md:from-slate-400 md:to-blue-500">
        <div className="flex flex-col w-full h-full rounded-lg bg-console-bg md:max-w-xl md:max-h-[65vh] overflow-hidden">
          <header className="flex items-start justify-start gap-2 p-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <h1 className="text-xs text-right grow text-slate-300">tom_sanders--portfolio.jsx</h1>
          </header>
          <div className="px-4 max-h-[90vh] overflow-auto pb-4 bg-dev-bg pt-2 grow">
            <Developer />
          </div>
        </div>
      </main>
    </>
  );
};
