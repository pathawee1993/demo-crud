import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Read from './components/Read'
// import { Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <Container class="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="create">Demo Crud</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="create">Create</Nav.Link>
              <Nav.Link href="read">Read</Nav.Link>
              <Nav.Link href="update">Update</Nav.Link>
              <Nav.Link href="delete">Delete</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Router>
          <Switch>
            <Route path="/create">
            </Route>
            <Route path="/read">
              <Read/>
            </Route>
            <Route path="/update">
            </Route>
            <Route path="/delete">
            </Route>
          </Switch>
        </Router>
      </Container>
    </Container>
  )
}

export default App
