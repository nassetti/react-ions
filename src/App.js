import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import Register from "./pages/auth/Register";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/sign-in" render={() => <h1>Sign-In</h1>} />
          <Route
            exact
            path="/register"
            render={() => (
              <h1>
                {" "}
                <Register />
              </h1>
            )}
          />
          <Route
            exact
            path="/post/create"
            render={() => <h1>Create Post</h1>}
          />
          <Route render={() => <h1>PAGE NOT FOUND</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
