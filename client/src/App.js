import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CheckAuthenticated, Home, Login, Signup } from "./pages";
import NewTailwind from "./pages/NewTailwind";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CheckAuthenticated />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<NewTailwind />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
