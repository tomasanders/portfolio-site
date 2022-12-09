export const Projects = () => {
  return (
    <div className="text-xs">
      <span className="y">const</span>
      <span className="p pl-1">projects</span>
      <span className="pl-1">=</span>
      <span className="y pl-1">{'{'}</span>
      <br/>
      {/* HiKa Quiz */}
      <span className="p pl-4">hika</span>:
      <span className="p pl-1">{'{'}</span>
      <br/>
      <span className="p pl-6">name</span>:
      <span className="o pl-1">"HiKa QUIZ"</span>,
      <br/>
      <span className="p pl-6">type</span>:
      <span className="o pl-1">"personal"</span>,
      <br/>
      <span className="p pl-6">desc</span>:
      <span className="o pl-1">"a simple flashcard-style hiragana/katakana quiz"</span>,
      <br/>
      <span className="p pl-6">link</span>:
      <span className="o pl-1">
        <a href="https://github.com/tomasanders/hikaquiz" target="_blank" className="underline decoration-dotted underline-offset-2">"Here"</a>
      </span>,
      <br/>
      <span className="p pl-6">tech</span>:
      <span className="o pl-1">"Next.js, TypeScript, SASS"</span>,
      <br/>
      <span className="p pl-4">{'}'}</span>,
      <br/>
      <br/>

      {/* Portfolio */}
      <span className="p pl-4">portfolio</span>:
      <span className="p pl-1">{'{'}</span>
      <br/>
      <span className="p pl-6">name</span>:
      <span className="o pl-1">"Portfolio Site"</span>,
      <br/>
      <span className="p pl-6">type</span>:
      <span className="o pl-1">"personal"</span>,
      <br/>
      <span className="p pl-6">desc</span>:
      <span className="o pl-1">"this website! a fun way to show off some cool stuff I can do"</span>,
      <br/>
      <span className="p pl-6">link</span>:
      <span className="o pl-1">
        <a href="https://github.com/tomasanders/portfolio-site" target="_blank" className="underline decoration-dotted underline-offset-2">"Here"</a>
      </span>,
      <br/>
      <span className="p pl-6">tech</span>:
      <span className="o pl-1">"Next.js, React, Tailwind CSS"</span>,
      <br/>
      <span className="p pl-4">{'}'}</span>,
      <br/>
      <br/>

      {/* Bunpro SRS */}
      <span className="p pl-4">bunpro</span>:
      <span className="p pl-1">{'{'}</span>
      <br/>
      <span className="p pl-6">name</span>:
      <span className="o pl-1">"Bunpro SRS"</span>,
      <br/>
      <span className="p pl-6">type</span>:
      <span className="o pl-1">"professional"</span>,
      <br/>
      <span className="p pl-6">desc</span>:
      <span className="o pl-1">"a complete japanese language learning tool that uses grammar/vocab lessons and reviews, reading passages, audio clips, and quizzes to simplify learning japanese"</span>,
      <br/>
      <span className="p pl-6">link</span>:
      <span className="o pl-1">
        <a href="https://bunpro.jp" target="_blank" className="underline decoration-dotted underline-offset-2">"Here"</a>
      </span>,
      <br/>
      <span className="p pl-6">tech</span>:
      <span className="o pl-1">"jQuery, SASS, Ruby on Rails, React"</span>,
      <br/>
      <span className="p pl-4">{'}'}</span>,
      <br/>

      <span className="p pl-4">disclaimer</span>:
      <span className="o pl-1">"more info on each project in my resume!</span>
    </div>
  );
};
