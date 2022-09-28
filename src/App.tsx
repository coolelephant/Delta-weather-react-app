import { StylesProvider } from "@mui/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { MyPage } from "./pages/mypage";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";

const queryClient = new QueryClient();

declare global {
  interface Window {
    kakao: any;
  }
}

const App = () => {
  return (
    <StylesProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </QueryClientProvider>
    </StylesProvider>
  );
};

export default App;
