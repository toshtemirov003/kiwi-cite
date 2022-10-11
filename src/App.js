import "./App.css";
import { Header } from "./components/Header/Header";
// import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Shop } from "./pages/Shop/Shop";
import { Business } from "./pages/Business/Business";
import { Product } from "./pages/Product/Product";
import { SingleItem } from "./pages/SingleItem/SingleItem";
import { Help } from "./pages/Help/Help";
import { Settings } from "./pages/Settings/Settings";
import { useContext } from "react";
import { LoginContext } from "./context/LoginContext";
import { Registratsiya } from "./pages/Registratsiya/Registratsiya";
import { Profile } from "./pages/Profile/Profile";
import { Elonlar } from "./pages/ElonlarNest/Elonlar";
import { Xabarlar } from "./pages/XabarlarNest/Xabarlar";
import { Hisob } from "./pages/HisobNest/Hisob";
import { Biznes } from "./pages/BiznesNest/Biznes";
import { Error } from "./pages/Error/Error";

function App() {
  const { token } = useContext(LoginContext);

  return (
    <div className="App">
      <Header />
      <div className="app__routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<SingleItem />} />
          <Route path="/add-product" element={<Shop />} />
          <Route path="/business" element={<Business />} />
          <Route path="/help" element={<Help />} />
          <Route path="/registratsiya" element={<Registratsiya />} />
          {token ? (
            <>
              <Route path="/profile" element={<Profile />}>
                <Route index element={<Elonlar />} />
                <Route path="elonlar" element={<Elonlar />} />
                <Route path="xabarlar" element={<Xabarlar />} />
                <Route path="hisob" element={<Hisob />} />
                <Route path="settings" element={<Settings />} />
                <Route path="biznes" element={<Biznes />} />
              </Route>
            </>
          ) : (
            <Route path="/login" element={<Login />} />
          )}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      {/* {token ? (
        <>
          <Footer />
        </>
      ) : (
        ""
      )} */}
    </div>
  );
}

export default App;
