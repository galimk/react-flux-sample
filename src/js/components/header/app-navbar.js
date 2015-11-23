var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

var AppNavbar = React.createClass({
    render: function() {
        return (
            <Navbar brand='React-Bootstrap' inverse toggleNavKey={0}>
                <Nav right eventKey={0}> {/* This is the eventKey referenced */}
                    <NavItem eventKey={1} href='#'>Link</NavItem>
                    <NavItem eventKey={2} href='#'>Link</NavItem>
                    <NavDropdown eventKey={3} title='Dropdown' id='collapsible-navbar-dropdown'>
                        <MenuItem eventKey='1'>Action</MenuItem>
                        <MenuItem eventKey='2'>Another action</MenuItem>
                        <MenuItem eventKey='3'>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey='4'>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
});

module.exports = AppNavbar;