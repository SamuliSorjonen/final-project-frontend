import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import {
  Home,
  Person,
  Map,
  Assignment,
  Info,
  AccountBox,
  Settings,
  ExitToApp
} from "@material-ui/icons";
import LoginModal from "../login/LoginModal";
import { Consumer } from "../context/Authcontext";

export const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">
      <Home />
      Home
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/plan">
            <Assignment />
            Plan
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/map">
            <Map />
            Map
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Info />
          About
        </Nav.Link>
        <Consumer>
          {({ isLoggedIn }) =>
            isLoggedIn ? (
              <Nav.Link>
                <ExitToApp /> Log out
              </Nav.Link>
            ) : (
              <LoginModal />
            )
          }
        </Consumer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

/*
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Home, Map, Assignment, Info, AccountBox, Settings, ExitToApp } from '@material-ui/icons'

function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div" >

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Home  <Home />
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Plans <Assignment />
                    </TypoGraphy>
                </ListItemText>



                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Map <Map />
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Settings <Settings />
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                    About <Info />
                </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Log out <ExitToApp />
                    </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List>
    )
}


export default NavBar;*/
