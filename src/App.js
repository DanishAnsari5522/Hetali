
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import Service from './Service'
import Navigation from './Navigation'

import Home from './component/Home'
import UnderWork from './component/underwork'


function App() {
  return (
    <div>

      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={UnderWork} />
          <Route exact path="/contact" component={UnderWork} />
          <Route exatc path="/services" component={UnderWork} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
