import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {
    Button, Collapse,
    Nav, Navbar,
    NavbarBrand, NavbarToggler,
    NavItem
} from 'reactstrap';
import classes from './MainNavigation.module.css'


export interface MainNavigationProps {

}

const MainNavigation: React.SFC<MainNavigationProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand >
                    <NavLink to='/'>
                        Flowers
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className={classes.mainNavigationItems}>
                            <NavLink to="/components/">Components</NavLink>
                        </NavItem>
                    </Nav>

                    <Button onClick={()=> history.push('/auth/login/')}>
                            Login
                    </Button>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MainNavigation;