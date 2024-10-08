import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WatchDetails from "./pages/WatchDetails";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch-detail" element={<WatchDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
