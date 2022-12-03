import { Logo } from "./Logo";

export const Nav = () => {
  return (
    <header>
      <Logo />
      <nav class="navigation">
        <ul>
          <li><a href="#home">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact</a></li>
          <li><a href="#resume">resume</a></li>
        </ul>
      </nav>
    </header>
  );
};
