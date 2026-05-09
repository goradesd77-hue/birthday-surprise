import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-black">

        <Routes>

          {/* Login Page */}
          <Route
            path="/"
            element={<Login />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;