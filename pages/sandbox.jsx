import { Intro } from "../components/Intro";
import { Nav } from "../components/Nav";

const TestPage = (props) => {
  return (
    <div className="page-wrapper">
      <Intro />
      <div className="about">
        <Nav />
      </div>
    </div>
  )
}

export default TestPage;
