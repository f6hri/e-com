import FootBar from "./footBar";
import MiddleBar from "./middleBar";
import TopBar from "./topBar";

export default function Navbar() {
  return (
    <header>
      <div className="flex flex-col gap-2">
        <TopBar />
        <MiddleBar />
        <FootBar />
      </div>
    </header>
  );
}
