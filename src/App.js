 import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateTask from "./crud/index";
import "./App.css";
import TaskUpdate from "./crud/Update";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={CreateTask} />
        <Route exact path="/update/:slug" component={TaskUpdate} />
      </Switch>
    </div>
  );
}

export default App;
