import Image from "next/image";

export const About = () => {
  return (
    <section className="about" id="about">
      <div>
        <h1>who?</h1>
        <div className="blurb">
          <div className="profile-pic">
            <Image
              src="/Profile.png"
              width={200}
              height={200}
              alt="A picture of Tom Sanders, looking very handsome"
              role="presentation"
              />
          </div>
          <p>
            Hi! I'm <span className="main">Tom Sanders</span>. Originally from the United States, but living in Japan since 2015. <span className="sub">Relocating to England in early 2023!</span>
            <br /><br />
            I love working on front-end solutions and creating colorful, interesting things. Recently, I've been really into making things as simple as possible (<i>read: remove <u>all</u> the divs!</i>). I value simple structures, clean design patterns, and thoughful user interactions.
            <br /><br />
            When I'm not drinking coffee and writing code, you can find me exploring with my wife, eating at restaurants, playing games, or reading books.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skill-wrap">
          <h2>stuff I use:</h2>
          <h3>Languages</h3>
          <div className="grid">
            <i class="devicon-javascript-plain colored" title="JavaScript icon"></i>
            <i class="devicon-html5-plain colored" title="HTML icon"></i>
            <i class="devicon-css3-plain colored" title="CSS icon"></i>
            <i class="devicon-ruby-plain colored" title="Ruby icon"></i>
            <i class="devicon-postgresql-plain colored" title="PostgreSQL icon"></i>
          </div>
        </div>
        <div className="skill-wrap">
          <h3>Frameworks and Libraries</h3>
          <div className="grid">
            <i class="devicon-react-original colored" title="React icon"></i>
            <i class="devicon-jquery-plain colored" title="jQuery icon"></i>
            <i class="devicon-rails-plain colored" title="Ruby on Rails icon"></i>
            <i class="devicon-bootstrap-plain colored" title="Bootstrap icon"></i>
            <i class="devicon-nextjs-original colored" title="Next.js icon"></i>
            <i class="devicon-typescript-plain colored" title="TypeScript icon"></i>
            <i class="devicon-sass-original colored" title="SASS icon"></i>
            <i class="devicon-github-original colored" title="GitHub icon"></i>
            <i class="devicon-tailwindcss-plain colored" title="Tailwind CSS icon"></i>
          </div>
        </div>
        <div className="skill-wrap">
          <h3>Other Technologies</h3>
          <div className="grid">
            <i class="devicon-git-plain colored" title="Git icon"></i>
            <i class="devicon-trello-plain colored" title="Trello icon"></i>
            <i class="devicon-figma-plain colored" title="Figma icon"></i>
            <i class="devicon-slack-plain colored" title="Slack icon"></i>
            <i class="devicon-vscode-plain colored" title="VSCode icon"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
