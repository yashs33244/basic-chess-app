import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./screens/Landing";
import { Game } from "./screens/Game";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="h-screen bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/game" element={<Game />} />
            {/* Add other routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
