import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Search />
      <Switch>
        <Route path={["/game/:id", "/"]} exact>
          <Home />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
