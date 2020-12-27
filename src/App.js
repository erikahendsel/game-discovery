import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";

import Search from "./components/Search";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Search />
      {/* <Switch>
        <Route path={["/game/:id", "/"]} exact>
          <Home />
        </Route>
      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
