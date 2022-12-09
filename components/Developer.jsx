import { useState } from "react";
import { About } from "./About";
import { ConsoleAbout } from "./ConsoleAbout";
import { ConsoleContact } from "./ConsoleContact";
import { ConsoleProjects } from "./ConsoleProjects";
import { Contact } from "./Contact";
import { Projects } from "./Projects";

export const Developer = () => {
  const linkClass = "underline decoration-dotted underline-offset-4";

  const [input, setInput] = useState(" ");
  const [pageName, setPageName] = useState(" ");
  const [console, setConsole] = useState();

  function setInputAbout() {
    setInput(<ConsoleAbout />);
    setPageName("Loading File ...");
    setTimeout(() => {
      setPageName("about.jsx");
      setConsole(<About />);
    }, 1000);
  };

  function setInputProjects() {
    setInput(<ConsoleProjects />);
    setPageName("Loading File ...");
    setTimeout(() => {
      setPageName("projects.jsx");
      setConsole(<Projects />);
    }, 1000);
  };

  function setInputContact() {
    setInput(<ConsoleContact />);
    setPageName("Loading File ...");
    setTimeout(() => {
      setPageName("contact.jsx");
      setConsole(<Contact />);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-base text-slate-100">
        <span className="y">class</span> <span className="r">Developer</span> <span className="y">{'{'}</span>
        <br />
        &nbsp;&nbsp;<span className="y">constructor</span> <span className="p">() {'{'}</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="r">this</span>.<span className="p">birthYear</span> = <span className="b">1985</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="r">this</span>.<span className="p">birthPlace</span> = <span className="o">'USA'</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="r">this</span>.<span className="p">spec</span> = <span className="o">'Front-end'</span>;
        <br />
        &nbsp;&nbsp;<span className="p">{'}'}</span>;
        <br />
        &nbsp;&nbsp;<span className="b"><a className={linkClass} onClick={setInputAbout}>about</a></span> <span className="p">() {'{'}</span> <span className="y">...</span> <span className="p">{'}'}</span>;
        <br />
        &nbsp;&nbsp;<span className="b"><a className={linkClass} onClick={setInputProjects}>projects</a></span> <span className="p">() {'{'}</span> <span className="y">...</span> <span className="p">{'}'}</span>;
        <br />
        &nbsp;&nbsp;<span className="b"><a className={linkClass} onClick={setInputContact}>contact</a></span> <span className="p">() {'{'}</span> <span className="y">...</span> <span className="p">{'}'}</span>;
        <br />
        <span className="y">{'}'}</span>;
        <br />
        <br />
        <span className="y">let</span> <span className="p">Tom</span> = <span className="y">new</span> <span className="r">Developer</span><span className="y">()</span>;
        <br />
        <div className="flex justify-start w-full">
          {input}
        </div>
      </div>
      <div className="[console] flex flex-col gap-2 mt-4">
        <p className="text-right text-slate-100 text-xs">{`Console: ${pageName}`}</p>
        <div className="text-slate-100 text-left">
          {console}
        </div>
      </div>
    </div>
  );
};
