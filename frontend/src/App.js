import logo from "./logo.svg";
import "./App.css";
import router from "./routes";

import { RouterProvider } from "react-router-dom";
function App() {
  return<div className="h-full">
<RouterProvider router={router} />
  </div> ;
}

export default App;
