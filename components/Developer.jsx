import { useState } from "react";
import { About } from "./About";
import { ConsoleLog } from "./ConsoleLog";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { Compile } from "./Compile";

export const Developer = () => {
  const linkClass = "underline decoration-dotted underline-offset-4";

  const [input, setInput] = useState(" ");
  const [pageName, setPageName] = useState(" ");
  const [console, setConsole] = useState();

  function setInputAbout() {
    setInput(<ConsoleLog page="about" />);
    setPageName("Loading File ...");
    setConsole(<Compile />);
    setTimeout(() => {
      setPageName("about.jsx");
      setConsole(<About />);
    }, 1000);
  };

  function setInputProjects() {
    setInput(<ConsoleLog page="projects" />);
    setPageName("Loading File ...");
    setConsole(<Compile />);
    setTimeout(() => {
      setPageName("projects.jsx");
      setConsole(<Projects />);
    }, 1000);
  };

  function setInputContact() {
    setInput(<ConsoleLog page="contact" />);
    setPageName("Loading File ...");
    setConsole(<Compile />);
    setTimeout(() => {
      setPageName("contact.jsx");
      setConsole(<Contact />);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-base text-slate-500">
        1 &#8744; <span className="y">class</span> <span className="r">Developer</span> <span className="y">{'{'}</span>
        <br />
        2 &#8744; &nbsp; <span className="y">constructor</span> <span className="p">() {'{'}</span>
        <br />
        3 &nbsp; &nbsp; &nbsp; <span className="r">this</span>.<span className="p">birthYear</span> = <span className="b">1985</span>;
        <br />
        4 &nbsp; &nbsp; &nbsp; <span className="r">this</span>.<span className="p">birthPlace</span> = <span className="o">'USA'</span>;
        <br />
        5 &nbsp; &nbsp; &nbsp; <span className="r">this</span>.<span className="p">spec</span> = <span className="o">'Front-end'</span>;
        <br />
        6 &nbsp; &nbsp; <span className="p">{'}'}</span>;
        <br />
        7 &nbsp; &nbsp; <span className="b"><a className={linkClass} onClick={setInputAbout}>about</a></span> <span className="p">() {'{'}</span> <span className="y">...</span> <span className="p">{'}'}</span>;
        <br />
        8 &nbsp; &nbsp; <span className="b"><a className={linkClass} onClick={setInputProjects}>projects</a></span> <span className="p">() {'{'}</span> <span className="y">...</span> <span className="p">{'}'}</span>;
        <br />
        9 &nbsp; &nbsp; <span className="b"><a className={linkClass} onClick={setInputContact}>contact</a></span> <span className="p">() {'{'}</span> <span className="y">...</span> <span className="p">{'}'}</span>;
        <br />
        10 &nbsp;<span className="y">{'}'}</span>;
        <br />
        11<br />
        12 &nbsp;<span className="y">let</span> <span className="p">Tom</span> = <span className="y">new</span> <span className="r">Developer</span><span className="y">()</span>;
        <br />
        <div className="flex justify-start w-full">
        13 &nbsp;{input}
        </div>
      </div>
      <div className="[console] flex flex-col gap-2 mt-4 text-xs">
        <p className="text-right text-slate-300">{`Console: ${pageName}`}</p>
        <div className="text-slate-100 text-left">
          {console}
        </div>
      </div>
    </div>
  );
};
