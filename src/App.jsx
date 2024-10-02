import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import SplineComponent from "./Components/SplineComponent";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-slate-400 vignette">
        <SplineComponent></SplineComponent>
        <Projects></Projects>
      </div>
    </>
  );
}

export default App;
