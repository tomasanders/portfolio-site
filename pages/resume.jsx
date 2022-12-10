import Head from 'next/head';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Tom Sanders - Resume</title>
        <meta name="description" content="Resume for Tom Sanders" />
        <meta charset="UTF-8" />
        <meta name="author" content="Tom Sanders" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&amp;display=swap" rel="stylesheet" />
      </Head>

      <div className="w-full fixed top-0 drop-shadow bg-white font-sans py-2">
        <a href="/index" className="text-xs pl-2 underline">
          {'<-'} back
        </a>
      </div>

      <header id="resumeHead" className="pt-10 px-6 mb-8 bg-white mt-4">
        <h1 className="text-res-blk font-medium leading-none uppercase tracking-[1.3px] mb-6 text-[1.625rem]">
          Tom Sanders
        </h1>
        <h2 className="text-res-blk leading-normal font-normal text-sm mb-2">
          Front-End Developer
        </h2>
        <aside className="leading-normal font-normal text-sm mb-2 text-res-gray">
          <p>Tokyo, Japan</p>
          <p>github.com/tomasanders</p>
          <p>thomas.a.sanders@gmail.com</p>
        </aside>
      </header>

      <main id="resumeMain" className="bg-white px-6 flex flex-col gap-6 mb-4">
        <h2 className="text-res-blk text-sm italic mb-8">
          Adept front-end developer focusing on React mobile-first development. Eager to continue expanding my knowledge while focusing on responsive design and accessibility.
        </h2>

        <section className="flex flex-col gap-6">
          <h2 className="text-res-lgray text-xs tracking-wider">
            WORK EXPERIENCE
          </h2>

          <div className="mb-8 text-res-blk text-sm flex flex-col gap-3">
            <h3 className="text-base tracking-wider">
              Bunpro SRS
            </h3>
            <p className="text-res-gray">
              Full-Stack Developer
              <br/>
              August 2021 - Current
            </p>
            <p className="italic">
              Bunpro SRS is a website that aims to simplify the difficult process of learning Japanese through a wealth of resources and a powerful spaced repetition review system.
            </p>
            <p className="italic">
              Although I joined as a brand-new developer, I was assigned projects dealing with every aspect of the site. From debugging to refactoring to introducing new features, I've had a hand in several projects since I joined.
            </p>
            <ul className="list-disc flex flex-col gap-1">
              <li className="ml-8">
                Built redesigns of Learn, Onboarding, Landing, Subscription, and Payment sections.
              </li>
              <li className="ml-8">
                Designed and implemented color blind mode and other accessibility features.
              </li>
              <li className="ml-8">
                Refactored code sitewide and redesigned CSS guidelines.
              </li>
              <li className="ml-8">
                Implemented i18n localization sitewide in English, Spanish, and Japanese.
              </li>
              <li className="ml-8">
                Helped to transition the front-end from Rails to Next.js, along with rebuilding of features in React and TypeScript.
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-res-lgray text-xs tracking-wider">
            PROJECTS
          </h2>

          <div className="mb-8 text-res-blk text-sm flex flex-col gap-3">
            <h3 className="text-base tracking-wider">
              HIKA QUIZ (PERSONAL - APP)
            </h3>
            <p className="text-res-gray">
              Next.js, React, TypeScript, SASS
              <br/>
              github.com/tomasanders/hikaquiz
            </p>
            <p className="italic">
              A simple flashcard-style hiragana and katakana quiz. Has variable options for theme, font-style, quiz content, and number of potential answers. Still a work in progress.
            </p>
          </div>

          <div className="mb-8 text-res-blk text-sm flex flex-col gap-3">
            <h3 className="text-base tracking-wider">
              PORTFOLIO (PERSONAL - SITE)
            </h3>
            <p className="text-res-gray">
              Next.js, React, Tailwind CSS
              <br/>
              github.com/tomasanders/portfolio-site
            </p>
            <p className="italic">
              This website. Just a way to display things I'm working on and host my HTML resume.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-res-lgray text-xs tracking-wider">
            EDUCATION
          </h2>

          <div className="text-res-gray text-sm flex flex-col gap-3">
            <h3 className="tracking-wider text-base text-res-blk">
              LE WAGON TOKYO
            </h3>
            <p>
              Full-Stack Web Developer, Computer Programming
              <br/>
              April 2021 - June 2021
            </p>
            <p className="italic text-res-blk">
              9-week full-time intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6, SQL, git, GitHub, Heroku, and Ruby on Rails.
            </p>
          </div>

          <div className="text-res-gray text-sm flex flex-col gap-3">
            <h3 className="tracking-wider text-base text-res-blk">
              UNIVERSITY OF CALIFORNIA, DAVIS
            </h3>
            <p>
              Bachelor of Arts <abbr>(B.A),</abbr> Communication
              <br/>
              June 2010 - June 2013
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-res-lgray text-xs tracking-wider">
            SKILLS
          </h2>

          <div className="flex flex-col gap-3 text-sm text-res-blk">
            <div>
              <h3 className="tracking-wider text-base text-res-blk">
                LANGUAGES
              </h3>
              <ul className="text-res-gray">
                <li>CSS3</li>
                <li>HTML5</li>
                <li>JavaScript</li>
                <li>Postgres</li>
                <li>Ruby</li>
              </ul>
            </div>

            <div>
              <h3 className="tracking-wider text-base text-res-blk">
                LIBRARIES
              </h3>
              <ul className="text-res-gray">
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>React.js</li>
                <li>Ruby on Rails</li>
                <li>SASS</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div>
              <h3 className="tracking-wider text-base text-res-blk">
                OTHER
              </h3>
              <ul className="text-res-gray">
                <li>Git</li>
                <li>GitHub</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};
