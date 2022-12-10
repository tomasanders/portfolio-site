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
    <div className="flex flex-col gap-3">
      <div className="text-base text-console-gray">
        <pre className="flex flex-col gap-1">
          <p>1 &#8744; <span className="y">class</span> <span className="r">Developer</span> <span className="y">{'{'}</span></p>
          <p>2 &#8744;   <span className="y">constructor</span> <span className="p">() {'{'}</span></p>
          <p>3       <span className="pl-13 r">this</span>.<span className="p">birthYear</span> = <span className="b">1985</span>;</p>
          <p>4       <span className="r">this</span>.<span className="p">birthPlace</span> = <span className="o">'USA'</span>;</p>
          <p>5       <span className="r">this</span>.<span className="p">spec</span> = <span className="o">'Front-end'</span>;</p>
          <p>6       <span className="r">this</span>.<span className="p">resume</span> = <a href="/resume" target="_blank" className={`o ${linkClass}`}>'Here'</a>;</p>
          <p>7     <span className="p">{'}'}</span>;</p>
          <p>8     <span className="b"><a className={linkClass} onClick={setInputAbout}>about</a></span> <span className="p">() {'{'}</span> <span className="y">...</span> <span className="p">{'}'}</span>;</p>
          <p>9     <span className="b"><a className={linkClass} onClick={setInputProjects}>projects</a></span> <span className="p">() {'{'}</span> <span className="y">...</span> <span className="p">{'}'}</span>;</p>
          <p>10    <span className="b"><a className={linkClass} onClick={setInputContact}>contact</a></span> <span className="p">() {'{'}</span> <span className="y">...</span> <span className="p">{'}'}</span>;</p>
          <p>11  <span className="y">{'}'}</span>;</p>
          <p>12</p>
          <p>13  <span className="y">let</span> <span className="p">Tom</span> = <span className="y">new</span> <span className="r">Developer</span><span className="y">()</span>;</p>
        </pre>
        <div className="flex justify-start w-full mt-1">
          14 &nbsp;{input}
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4 text-xs text-console-gray">
        <p className="text-right">
          {`Console: ${pageName}`}
        </p>
        <div className="text-left">
          {console}
        </div>
      </div>
    </div>
  );
};
