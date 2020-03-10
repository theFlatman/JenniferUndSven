import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { getSessionCookie } from "./Sessions";
import Trauzeugen from "./Trauzeugen";
import Album from "./Album";
import Galerie from "./Galerie";
import Geschenke from "./Geschenke";
import Informationen from "./Informationen";
import Ablauf from "./Ablauf";
import Landing from "./Landing";
import Anmeldung from "./Anmeldung";
import Header from "./Header";
import history from "../history";
import Global from "../styles/global";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: auto 950px auto;
  grid-template-rows: 30px 200px auto 100px;
`;

const NavbarBox = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;

const ContentBox = styled.div`
  grid-row: 3 / 4;
  grid-column: 2/ 3;
  padding-top: 50px;

  p {
    font-family: "Titillium Web", sans-serif;
    opacity: 0.8;
    font-size: 18px;
    margin-bottom: 20px;
  }

  h3,
  h4,
  h5 {
    font-family: "thebrooklyn";
    opacity: 0.7;
    text-shadow: 0 0 5px #ef94d6;
    margin-bottom: 20px;
  }

  h1,
  h2 {
    font-family: "thebrooklyn";
    opacity: 0.5;
    text-shadow: 0 0 5px #ef94d6;
    margin-bottom: 10px;
  }

  h1 {
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 30px;
  }
`;

const App = () => {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        getSessionCookie("session") === null ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );

  return (
    <div>
      <Global />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <GridWrapper>
            <NavbarBox>
              <Header />
            </NavbarBox>
            <ContentBox>
              <PrivateRoute path="/ablauf" exact component={Ablauf} />
              <PrivateRoute path="/trauzeugen" exact component={Trauzeugen} />
              <PrivateRoute path="/galerie" exact component={Album} />
              <PrivateRoute path="/galerie/:id" exact component={Galerie} />
              <PrivateRoute path="/geschenke" exact component={Geschenke} />
              <PrivateRoute
                path="/informationen"
                exact
                component={Informationen}
              />
              <PrivateRoute path="/anmeldung" exact component={Anmeldung} />
            </ContentBox>
          </GridWrapper>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
