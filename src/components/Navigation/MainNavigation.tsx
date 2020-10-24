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
    const logedInRender = () => {
        return (
            <>
                <Nav className="mr-auto" navbar>
                    <NavItem className={classes.mainNavigationItems}>
                        <NavLink to="/users/">Users</NavLink>
                    </NavItem>
                </Nav>
                <Button onClick={handleLogout}>
                    Logout
                </Button>
            </>
        )
    }
    const notLogedInRender = () => {
        return (
            <>
                <Nav className="mr-auto" navbar>
                    <NavItem className={classes.mainNavigationItems}>
                        <NavLink to="/any/">AnyData</NavLink>
                    </NavItem>
                </Nav>
                <Button onClick={() => history.push('/auth/login/')}>
                    Login
                </Button>
            </>
        )
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

                    {!props.token ?
                        notLogedInRender()
                        :
                        logedInRender()
                    }

                </Collapse>
            </Navbar>
        </div>
    );
}

export default MainNavigation;