import "./App.css";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-1%", right: "-1rem" }}></div>
      <div className="blur" style={{ top: "29%", left: "-3rem" }}></div>
      <Home />
      {/* <Profile/> */}
      {/* <Auth/> */}
    </div>
  );
}

export default App;
