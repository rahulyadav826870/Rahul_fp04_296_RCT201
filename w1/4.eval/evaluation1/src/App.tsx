import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopicBoard from './components/TopicBoard';
import initialData from "./initialData.json"
function App() {
  return (
    <div className="App">
     {/* <TopicBoard initialData={initialData}  /> */}
     <TopicBoard   />
     
    </div>
  );
}

export default App;
