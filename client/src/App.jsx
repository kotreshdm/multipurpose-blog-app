import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <div
      className={
        theme === "dark"
          ? "bg-dark text-light min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >
      <Router>
        <Header />
        <div className='container mt-4'>
          <React.Suspense
            fallback={<div className='text-center mt-5'>Loading...</div>}
          >
            <Routes>
              {AppRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </React.Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
