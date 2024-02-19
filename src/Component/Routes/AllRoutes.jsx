import navs from "./Navigations";
import { Route, Routes } from "react-router-dom";
import App from "../../App";
import { useAuth } from "../Context/AuthProvider";

const AllRoutes = () => {
  const { auth } = useAuth();
  const { role, isAuthenticated } = auth;

  return (
    <Routes>
      <Route path={"/"} element={<App />}>
        {navs.map((nav, i) => {
          if (isAuthenticated) {
            if (nav.isVisibleAfterAuth) {
              if (nav.role === role || nav.role === "ALL") {
                console.log(nav);
                return <Route key={i} path={nav.path} element={nav.element} />;
              }
            }
          } else {
            if (!nav.requireAuth && nav.role === "ALL") {
              console.log(nav);
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        })}
      </Route>
    </Routes>
  );
};

export default AllRoutes;
