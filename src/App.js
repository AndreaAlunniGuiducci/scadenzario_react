import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
