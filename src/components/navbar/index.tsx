import FootBar from "./footBar";
import MiddleBar from "./middleBar";
import TopBar from "./topBar";

export default function Navbar() {
  return (
    <header>
        <TopBar />
        <MiddleBar />
        <FootBar />
    </header>
  );
}
