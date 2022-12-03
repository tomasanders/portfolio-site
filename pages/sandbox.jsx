import { About } from "../components/About";
import { Intro } from "../components/Intro";
import { Nav } from "../components/Nav";

const TestPage = () => {
  // Grab all <section> that have an ID
  const sections = document.querySelectorAll("section[id]");
  // Listen for scroll events
  window.addEventListener("scroll", navHighlighter);
  // Get the current scroll position and check if it's inside one of our sections, if so highlight the appropriate nav link.
  function navHighlighter() {
    let scrollY = window.scrollY;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.navigation a[href*=${sectionId}]`).classList.add("active");
      } else {
        document.querySelector(`.navigation a[href*=${sectionId}]`).classList.remove("active");
      };
    });
  };

  return (
    <div className="page-wrapper">
      <Nav />
      <Intro />
      <About />
      <section className="projects" id="projects"></section>
      <section className="contact" id="contact"></section>
      <section className="resume" id="resume"></section>
    </div>
  )
}

export default TestPage;
