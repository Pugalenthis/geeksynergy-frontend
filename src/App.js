import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./components/loginForm.js";
import SignupForm from "./components/signupForm.js";
import Movies from "./components/movies";
import CompanyInfo from "./components/companyInfo";
import ListUsers from "./components/listUsers";
import EditUser from "./components/editUser";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/company">
          <CompanyInfo />
        </Route>
        <Route exact path="/users">
          <ListUsers />
        </Route>
        <Route exact path="/user/edit/:id">
          <EditUser />
        </Route>
        {/* <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignUpForm />
        </Route>
        <Route exact path="**">
          <h1>Not found</h1>
        </Route>*/}
      </Switch>
    </div>
  );
}

export default App;
