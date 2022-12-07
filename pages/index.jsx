import Head from 'next/head';
import { useEffect, useState } from "react";
import { DesktopNav } from '../components/DesktopNav';
import { MobileNav } from '../components/MobileNav';

export default function Home() {
  /**
  * Create an event listener to detect when the window resizes in order to toggle the mobile nav.
  */
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

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
      <main className="bg-c-black h-screen">
        {isMobile ? <MobileNav /> : <DesktopNav />}
      </main>
    </>
  );
};
