import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import NotFoundPage from "./components/NotFoundPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path={["/game/:id", "/"]} exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
