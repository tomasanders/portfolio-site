import { useState } from "react";
import { About } from "./About";
import { ButtonBar } from "./ButtonBar";
import { Compile } from "./Compile";
import { ConsoleLog } from "./ConsoleLog";
import { Contact } from "./Contact";
import { Projects } from "./Projects";



export const Ide = () => {
  const linkClass = "underline underline-offset-4 motion-safe:animate-pulse delay-500 cursor-pointer";

  const [pageName, setPageName] = useState(" ");
  const [console, setConsole] = useState();

  function setInputAbout() {
    setConsole(<ConsoleLog page="about" />);
    setTimeout(() => {
      setPageName("Loading File ...");
      setConsole(<Compile />);
      setTimeout(() => {
        setPageName("about.jsx");
        setConsole(<About />);
      }, 2000);
    }, 3000);
  };

  function setInputProjects() {
    setConsole(<ConsoleLog page="projects" />);
    setTimeout(() => {
      setPageName("Loading File ...");
      setConsole(<Compile />);
      setTimeout(() => {
        setPageName("projects.jsx");
        setConsole(<Projects />);
      }, 2000);
    }, 3000);
  };

  function setInputContact() {
    setConsole(<ConsoleLog page="contact" />);
    setTimeout(() => {
      setPageName("Loading File ...");
      setConsole(<Compile />);
      setTimeout(() => {
        setPageName("contact.jsx");
        setConsole(<Contact />);
      }, 2000);
    }, 3000);
  };

  return (
    <main className="flex flex-col w-screen h-screen bg-slate-400 d-flex overflow-hidden border border-[pink] md:flex-row md:gap-4 md:p-4">
      <div className="text-sm ide text-console-gray bg-dev-bg">
        <ButtonBar head={true} />
        <div className="p-4">
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
        </div>
      </div>

      <div className="text-sm console text-console-gray bg-dev-bg">
        <ButtonBar head={false} pageName={pageName} />

        <div className="p-4 pb-16 text-left console-content">
          {console}
        </div>
      </div>
    </main>
  );
};
