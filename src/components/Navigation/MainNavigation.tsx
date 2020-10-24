import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {
    Button, Collapse,
    Nav, Navbar,
    NavbarBrand, NavbarToggler,
    NavItem
} from 'reactstrap';
import classes from './MainNavigation.module.css'
import { AUTH_TOKEN_LOCAL_STORAGE } from '../../constants';


export interface MainNavigationProps {
    token: string | null
}

const MainNavigation: React.SFC<MainNavigationProps> = (props: MainNavigationProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    console.log(props)
    const toggle = () => setIsOpen(!isOpen);
    const handleLogout = () => {
        //cleare token
        localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE)
        history.push('/auth/login/')
        window.location.reload()
    }
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
                    {!props.token ?
                        <Button onClick={() => history.push('/auth/login/')}>
                            Login
                    </Button>
                        :
                        <Button onClick={handleLogout}>
                            Logout
                        </Button>
                    }

                </Collapse>
            </Navbar>
        </div>
    );
}

export default MainNavigation;