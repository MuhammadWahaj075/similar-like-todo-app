import { Route, Routes } from "react-router-dom";

import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import Home from "./pages/Home";
import Profile from "./pages/profile-Section/Profile";
import { ProtectedRoute } from "./routes/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
