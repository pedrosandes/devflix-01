import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { MovieInfo } from './pages/MovieInfo'
import { Search } from './pages/Search'
import { NotFound } from './pages/NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movieinfo">
          <MovieInfo />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export { Router };