import './App.css';
import DebateCardList from './components/DebateCardList';
import DebateTopicList from './components/DebateTopicList';
import DebateDetails from './components/DebateDetails';
import DebateCreation from './components/DebateCreation';
import DebateRegister from './components/DebateRegister';

import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


// let topics = ["Healthcare", "Ethics of AI", "Moral Philosophy"]
// let colors = ["AliceBlue", 'CornSilk', 'HoneyDew']
// let detailColors = ["PapayaWhip", 'MistyRose', 'Thistle']
let colors = ["#fcf8ec", "#d0e8f2", "#79a3b1", "#456268"]

function App() {

  return (
    <div className="App">
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/topics' component={() => <DebateTopicList colors={colors}/>} exact />
      <Route path='/topics/:id' component={() =><DebateCardList colors={colors}/>} exact />
      <Route path='/topics/:topicid/:title/details' component={() =><DebateDetails colors={colors}/>}  exact/>
      <Route path='/topics/:topicid/:title/register' component={() =><DebateRegister/>} exact />
      <Route path='/newDebate' component={() =><DebateCreation/>} />

    </Switch>
    {/*  
    <DebateCardList debates={posts}/>
    {posts.map((debate) => 
    <DebateDetails 
      color={detailcolors[i++]}
      person1={debate.person1}
      person2={debate.person2}
      topic={debate.topic}
      person1img={debate.person1img}
      person2img={debate.person2img}
      person1description={debate.person1description}
      person2description={debate.person2description}
      date={debate.date}/>
    )} */}
    </div>
  );
}

export default App;
