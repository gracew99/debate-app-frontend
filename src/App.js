import './App.css';
import DebateCardList from './components/DebateCardList';
import DebateTopicList from './components/DebateTopicList';
import DebateDetails from './components/DebateDetails';
import DebateCreation from './components/DebateCreation';
import DebateRegister from './components/DebateRegister';

import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';


// let topics = ["Healthcare", "Ethics of AI", "Moral Philosophy"]
let colors = ["AliceBlue", 'CornSilk', 'HoneyDew']
// let detailcolors = ["PapayaWhip", 'MistyRose', 'Thistle']


function App() {

  return (
    <div className="App">
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/topics' component={() => <DebateTopicList colors={colors}/>} exact />
      <Route path='/topics/:id' component={() =><DebateCardList/>} exact />
      <Route path='/topics/:topicid/:title/details' component={() =><DebateDetails/>}  exact/>
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
