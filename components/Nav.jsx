import { Logo } from "./Logo";

export const Nav = () => {
  return (
    <header>
      <Logo />
      <nav class="navigation">
        <ul>
          <li><a href="#home" title="Intro Page">start</a></li>
          <li><a href="#about" title="About and Skills Page">who</a></li>
          <li><a href="#projects" title="Projects Page">things</a></li>
          <li><a href="#contact" title="Contact Page">chat</a></li>
          <li><a href="#resume" title="HTML Resume">hire</a></li>
        </ul>
      </nav>
    </header>
  );
};
