import { Outlet } from "react-router-dom";
import SlideBar from "./components/SlideBar";

function App() {
  return (
    <>
      <div className="bg-primaryBg-default h-screen flex">
        <div className="xl:block hidden">
          <SlideBar />
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default App;
