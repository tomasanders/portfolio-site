import { Developer } from "../components/Developer";

export default function Sandbox() {
  return (
    <>
      <div className="bg-light-bg h-screen w-screen flex items-center justify-center p-4">
        <div className="[console] w-full h-full bg-black flex flex-col gap-4 rounded-lg">
          <div className="[buttons] flex items-start justify-start gap-2 p-2">
            <div className="rounded-full bg-red-400 h-3 w-3"></div>
            <div className="rounded-full bg-yellow-400 h-3 w-3"></div>
            <div className="rounded-full bg-green-400 h-3 w-3"></div>
          </div>
          <div className="[screen] px-4">
            <Developer />
          </div>
        </div>
      </div>
    </>
  );
};
