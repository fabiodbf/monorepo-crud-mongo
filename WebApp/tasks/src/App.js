import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Container from "./components/container/container";
import Dndemo from "./components/dndemo/dndemo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route
          path="/Dndemo"
          element={
            <DndProvider backend={HTML5Backend}>
              <Dndemo />
            </DndProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
