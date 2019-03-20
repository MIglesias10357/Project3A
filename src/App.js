import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./pages/Movies";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Friends from "./pages/Friends";


function App() {
  return (
      <div id="container">
        <video id="background_video" loop muted></video>
        <div id="video_cover"></div>
        <div id="overlay"></div>
        <section id="main_content">
          <h1 class="f1 b">Movie Hub!</h1>
          <Router>
            <div>
              <Nav />
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signUp" component={SignUp} />
                {/* <Route exact path="/" component={Movies} /> */}
                <Route exact path="/movies" component={Movies} />
                <Route exact path="/movies/:id" component={Detail} />
                <Route exact path="/friends" component={Friends} />
                <Route component={NoMatch} />
              </Switch>
              </div>
          </Router>
        </section>
    </div>
  );
}

export default App;
