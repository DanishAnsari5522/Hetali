
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import Service from './Service'
import Navigation from './Navigation'
import Footer from './component/footer'
import Home from './component/Home'
import UnderWork from './component/underwork'
import './App.css'


function App() {
  return (
    <div class="bg_img">

      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={UnderWork} />
          <Route exact path="/diversification" component={UnderWork} />
          <Route exatc path="/process" component={UnderWork} />
          <Route exact path="/testimonials" component={UnderWork} />
          <Route exact path="/careers" component={UnderWork} />
          <Route exatc path="/contact" component={UnderWork} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
