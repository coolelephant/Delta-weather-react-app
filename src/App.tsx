import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { SignUp } from "./pages/signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
