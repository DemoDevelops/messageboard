import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App/App'
import AddPostContainer from '../containers/AddPostContainer';
import PostContainer from '../containers/PostContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/newpost" component={AddPostContainer} />
        <Route path="/post/:id" component={PostContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default Root