import React from 'react';
import Blog from './containers/Blog/Blog';
import './App.css';
import {BrowserRouter} from 'react-router-dom'

function App() {

  return (
      // <BrowserRouter basename="my-app"> this is included wgen deploying the app on a part ul
      <BrowserRouter>
        <div className="App">
          <Blog/>
        </div>
      </BrowserRouter>

  );
}

export default App;
