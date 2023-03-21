import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Main from "./layout/Main";

const router = createBrowserRouter([
{
  path: "/",
  element: <Main></Main>,
  children: [
    {
      path: "/",
      element: <Hero></Hero>
    },
    {
      path: "/about",
      element: <About></About>
    }
]
}
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
