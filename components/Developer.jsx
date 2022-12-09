export const Developer = () => {
  const yellow = "text-yellow-200";
  const red = "text-red-500";
  const purple = "text-purple-500";
  const blue = "text-cyan-400";
  const orange = "text-orange-400";
  const bl = "{";
  const br = "}";
  const linkClass = "underline decoration-dotted underline-offset-4";

  return (
    <div className="flex flex-col gap-2">
      <p className="text-base text-slate-100">
        <span className={yellow}>class</span> <span className={red}>Developer</span> <span className={yellow}>{bl}</span>
        <br />
        &nbsp;&nbsp;<span className={yellow}>constructor</span> <span className={purple}>() {bl}</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={red}>this</span>.<span className={purple}>birthYear</span> = <span className={blue}>1985</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={red}>this</span>.<span className={purple}>birthPlace</span> = <span className={orange}>'USA'</span>;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className={red}>this</span>.<span className={purple}>spec</span> = <span className={orange}>'Front-end</span>;
        <br />
        &nbsp;&nbsp;<span className={purple}>{br}</span>;
        <br />
        &nbsp;&nbsp;<span className={blue}><a href="#about" className={linkClass}>about</a></span> <span className={purple}>() {bl}</span> <span className={yellow}>...</span> <span className={purple}>{br}</span>;
        <br />
        &nbsp;&nbsp;<span className={blue}><a href="#projects" className={linkClass}>projects</a></span> <span className={purple}>() {bl}</span> <span className={yellow}>...</span> <span className={purple}>{br}</span>;
        <br />
        &nbsp;&nbsp;<span className={blue}><a href="#contact" className={linkClass}>contact</a></span> <span className={purple}>() {bl}</span> <span className={yellow}>...</span> <span className={purple}>{br}</span>;
        <br />
        <span className={yellow}>{br}</span>;
        <br />
        <br />
        <span className={yellow}>let</span> <span className={purple}>Tom</span> = <span className={yellow}>new</span> <span className={red}>Developer</span><span className={yellow}>()</span>;
        <br />
        <span className={`${yellow} cursor`}>|</span>
      </p>
    </div>
  );
};
