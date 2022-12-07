export const DesktopNav = () => {
  return (
    <nav className="w-screen flex items-center justify-between text-c-white border-b-c-red border-b-2 p-4">
      <div className="logo">Logo</div>
      <ul className="flex items-center gap-6">
        <li><a href="#about">about</a></li>
        <li><a href="#things">things</a></li>
        <li><a href="#chat">chat</a></li>
        <li><a href="#resume">resume</a></li>
      </ul>
    </nav>
  );
};
