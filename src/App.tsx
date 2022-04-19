import "./App.css";
import { Route, Routes } from "react-router-dom";
import Tasks from "./screens/Tasks";
import Details from "./screens/Details";

const App = () => {
  return (
    <div className="md:w-[500px] w-72 mx-7 min-h-fit border-2 border-lime-400 p-7 rounded-xl text-white text-center font-sans">
      <Routes>
        {["/", "/index.html"].map(path => <Route path={path} element={<Tasks />} />)}

          <Route path="/details/:title" element={<Details />} />
          <Route
            path="*"
            element={
              <main className="p-4">
                <h1>There's nothing here!</h1>
              </main>
            }
          />
        </Routes>
    </div>
  );
};

export default App;
