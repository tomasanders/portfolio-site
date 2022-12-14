import { Typewriter } from "react-simple-typewriter";
export const ConsoleLog = (props) => {
  return (
    <>
      {props.page === "about" &&
        <span className="p"><Typewriter words={['npm run tom-about']} typeSpeed={40} /></span>
      }
      {props.page === "projects" &&
        <span className="p"><Typewriter words={['npm run tom-projects']} typeSpeed={40} /></span>
      }
      {props.page === "contact" &&
        <span className="p"><Typewriter words={['npm run tom-contact']} typeSpeed={40} /></span>
      }
    </>
  );
};
