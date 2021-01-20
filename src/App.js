import './App.css';
import DebateCardList from './components/DebateCardList';
import DebateTopicList from './components/DebateTopicList';
import DebateDetails from './components/DebateDetails';
import DebateCreation from './components/DebateCreation';
import DebateSignUp from './components/DebateSignUp';

import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

let colors = ["#fcf8ec", "#d0e8f2", "#79a3b1", "#456268"]

function App() {

  return (
    <div className="App">
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/topics' component={() => <DebateTopicList colors={colors}/>} exact />
      <Route path='/topics/:topicName' component={() =><DebateCardList colors={colors}/>} exact />
      <Route path='/topics/:topicid/:id/details' component={() =><DebateDetails colors={colors}/>}  exact/>
      <Route path='/topics/:topicid/:title/signup' component={() =><DebateSignUp/>} exact />
      <Route path='/newDebate' component={() =><DebateCreation/>} />
    </Switch>
    </div>
  );
}

export default App;
