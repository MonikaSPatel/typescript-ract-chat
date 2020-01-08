import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Register from './Register';
import Login from './Login';
import PostList from './PostList';

class App extends React.Component {
  render() {
    return (
      <div className="gx-main-content-wrapper">
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/post-list" component={PostList} />
          {/* <Redirect from="*" to="/404" /> */}
        </BrowserRouter>
      </div>)
  }
}

export default App;
