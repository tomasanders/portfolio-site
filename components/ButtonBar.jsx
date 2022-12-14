export const ButtonBar = (props) => {
  return (
    <>
      <div className="flex items-start justify-start gap-2 px-4 py-2 text-xs text-right bg-console-bg text-console-gray">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        {props.head === true &&
          <h1 className="grow">tom-sanders-portfolio.jsx</h1>
        }
        {props.head === false &&
          <p className="grow">{`Console: ${props.pageName}`}</p>
        }
      </div>
    </>
  );
};
