// import './App.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Wishlist from "./components/Wishlist/Wishlist";
import AppLayout from "./AppLayout";
import Movie from "./components/Movie/Movie";
import Details from "./components/Movie/Details";
import NotFound from "./components/NotFound/NotFound";
import { Provider } from "react-redux";
import store from "./store/store";
import Favorite from "./components/Favorite/Favorite";
import { LanguageProvider } from "./context/language";
import { useState } from "react";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/wishlist", element: <Wishlist /> },
      { index: true, element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/movie", element: <Movie /> },
      { path: "/favorite", element: <Favorite /> },

      { path: "/details/:id", element: <Details /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Wishlist /> */}
      <Provider store={store}>
        <LanguageProvider value={{ language, setLanguage }}>
          <RouterProvider router={router} />
        </LanguageProvider>
      </Provider>
    </>
  );
}

export default App;
