import { StylesProvider } from "@mui/styles";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { MyPage } from "./pages/mypage";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";

const App = () => {
  return (
    <StylesProvider injectFirst>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </StylesProvider>
  );
};

export default App;
