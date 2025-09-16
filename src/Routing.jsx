import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import One from "./components/one";

const Routing = () => (
    <Router>
        <Routes>
            <Route path="/" element={<One />} />
            {/* Add more routes here as needed */}
        </Routes>
    </Router>
);

export default Routing;
