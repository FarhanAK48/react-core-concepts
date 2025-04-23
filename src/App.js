import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Hooks from "./react-hooks/hooks";
import UseContext from "./react-hooks/useContext";
import UseEffect from "./react-hooks/useEffect";
import UseState from "./react-hooks/useState";
import UseRef from "./react-hooks/useRef";
import UseReducer from "./react-hooks/useReducer";
import UseMemo from "./react-hooks/useMemo";
import CallBack from "./react-hooks/useCallBack";
import "./App.css";
import Todo from "./components/todo";
import CounterSlice from "./redux/counter/counterSlice";
import Redux from "./redux/redux";
import Uidesign from "./components/uidesign";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/" element={<Hooks />}>
            <Route path="/" element={<UseState />} />
            <Route path="use-effect" element={<UseEffect />} />
            <Route path="use-context" element={<UseContext />} />
            <Route path="use-ref" element={<UseRef />} />
            <Route path="use-memo" element={<UseMemo />} />
            <Route path="use-reducer" element={<UseReducer />} />
            <Route path="callback" element={<CallBack />} />
          </Route>
          <Route path="/redux" element={<Redux />} />
          <Route path="/uidesign" element={<Uidesign />} />

        </Routes>
      </div>
      </Router>
  );
}

export default App;