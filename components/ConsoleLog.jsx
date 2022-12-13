import { Typewriter } from "react-simple-typewriter";
export const ConsoleLog = (props) => {
  return (
    <>
      {props.page === "about" &&
        <span className="p"><Typewriter words={['console.log(Tom.about());']} typeSpeed={40} /></span>
      }
      {props.page === "projects" &&
        <span className="p"><Typewriter words={['console.log(Tom.projects());']} typeSpeed={40} /></span>
      }
      {props.page === "contact" &&
        <span className="p"><Typewriter words={['console.log(Tom.contact());']} typeSpeed={40} /></span>
      }
    </>
  );
};
