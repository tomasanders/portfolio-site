export const ConsoleLog = (props) => {
  return (
    <p>
      <span className="p">console</span>.
      <span className="b">log</span>
      <span className="y">{'('}</span>
      <span className="p">Tom</span>.
      <span className="b">{props.page}</span>
      <span className="p">()</span>
      <span className="y">{')'}</span>;
    </p>
  );
};
