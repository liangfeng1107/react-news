import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar, NavItem, Nav, FormGroup, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import NewsList from './NewsList';
// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

const SideBar = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to="/">
                <a>NEWS</a>
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/news">
                <NavItem eventKey={1}>主页</NavItem>
              </LinkContainer>
              <LinkContainer to="/it">
                <NavItem eventKey={2}>科技新闻</NavItem>
              </LinkContainer>
              <LinkContainer to="/internet">
                <NavItem eventKey={3}>互联网新闻</NavItem>
              </LinkContainer>
            </Nav>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="" />
              </FormGroup>
              {' '}
              <Button type="submit">搜索</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>

        <Redirect from="/" to="/news" />
        <Route exact path="/news" component={NewsList} />
        <Route path="/it" component={NewsList} />
        <Route path="/internet" component={NewsList} />
      </div>
    </Router>
  </Provider>
);

export default SideBar;
