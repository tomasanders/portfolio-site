export const Projects = () => {
  const projects = [
    {
      id: "hika",
      name: "HiKa QUIZ",
      type: "personal",
      desc: "a flashcard-style hiragana and katakana quiz",
      link: "https://github.com/tomasanders/hikaquiz",
      tech: "Next.js, TypeScript, SASS",
    },
    {
      id: "portfolio",
      name: "Portfolio Site",
      type: "personal",
      desc: "this website! a fun way to show off some cool stuff I can do",
      link: "https://github.com/tomasanders/portfolio-site",
      tech: "Next.js, React, Tailwind CSS",
    },
    {
      id: "bunpro",
      name: "Bunpro SRS",
      type: "professional work",
      desc: "a comprehensive japanese language learning tool that makes learning simple and efficient",
      link: "https://bunpro.jp",
      tech: "jQuery, SASS, Ruby on Rails, React",
    },
  ];

  return (
    <div>
      <span className="y">const</span> <span className="p">projects</span> = <span className="y">{'{'}</span>
      <br/>
      {console.log(projects)}
      {projects.map((project, index) => {
        return (
          <div key={index}>
            &nbsp; <span className="p">{project.id}</span>: <span className="p">{'{'}</span>
            <br/>
            &nbsp; &nbsp; <span className="p">name</span>: <span className="o">"{project.name}"</span>,
            <br/>
            &nbsp; &nbsp; <span className="p">type</span>: <span className="o">"{project.type}"</span>,
            <br/>
            &nbsp; &nbsp; <span className="p">desc</span>: <span className="o">"{project.desc}"</span>,
            <br/>
            &nbsp; &nbsp; <span className="p">link</span>: <a href={project.link} target="_blank" className="underline decoration-dotted underline-offset-2 o">"Here"</a>,
            <br/>
            &nbsp; &nbsp; <span className="p">tech</span>: <span className="o">"{project.tech}"</span>,
            <br/>
            &nbsp; <span className="p">{'}'}</span>,
            <br/>
            <br/>
          </div>
        );
      })}
      &nbsp; <span className="p">disclaimer</span>: <span className="b">"more info in my resume!</span>
    </div>
  );
};
