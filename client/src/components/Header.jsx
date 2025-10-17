import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Image,
  Badge,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import AppRoutes from "../routes/AppRoutes";
import { NavLink } from "react-router-dom";
import { useTheme } from "../store/features/theme";

export default function Header() {
  const { mode, toggleTheme } = useTheme();

  // Example: this could later come from user context or API
  const user = {
    name: "Kotresh",
    status: "online", // or "offline"
    avatar: "https://placehold.co/600x400", // You can replace this with your own logo
  };

  const getStatusColor = (status) => {
    return status === "online" ? "success" : "secondary";
  };

  return (
    <Navbar
      expand='lg'
      sticky='top'
      className='shadow-sm'
      style={{ padding: 0 }}
      bg={mode === "light" ? "light" : "dark"}
      variant={mode === "light" ? "light" : "dark"}
    >
      <Container>
        {/* Left: Logo + Brand */}
        <Navbar.Brand href='/' className='d-flex align-items-center gap-2'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png'
            width='35'
            height='35'
            roundedCircle
            alt='Logo'
          />
          <span className='fw-bold'>MyApp</span>
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle aria-controls='main-navbar' />

        <Navbar.Collapse id='main-navbar'>
          {/* Center/Right: Navigation links */}
          <Nav className='ms-auto align-items-center'>
            {AppRoutes.map((route) => (
              <NavLink key={route.path} to={route.path} className='nav-link'>
                {route.label}
              </NavLink>
            ))}
            {/* Theme toggle icon */}
            <div
              className='fs-4 text-primary mx-3'
              style={{ cursor: "pointer" }}
              onClick={toggleTheme}
              title='Toggle Theme'
            >
              {mode === "light" ? (
                <i className='bi bi-moon'></i>
              ) : (
                <i className='bi bi-sun'></i>
              )}
            </div>

            {/* User Profile Dropdown */}
            <NavDropdown
              align='end'
              title={
                <span className='d-inline-flex align-items-center gap-2'>
                  <Image
                    src={user.avatar}
                    roundedCircle
                    width='35'
                    height='35'
                    alt='User'
                    className='border border-light'
                  />
                  <Badge
                    bg={getStatusColor(user.status)}
                    className='rounded-pill'
                  >
                    {user.status}
                  </Badge>
                </span>
              }
              id='user-dropdown'
            >
              <NavDropdown.Header>
                Signed in as <strong>{user.name}</strong>
              </NavDropdown.Header>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#profile'>
                <i className='bi bi-person me-2'></i> Profile
              </NavDropdown.Item>
              <NavDropdown.Item href='#settings'>
                <i className='bi bi-gear me-2'></i> Settings
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href='#logout' className='text-danger'>
                <i className='bi bi-box-arrow-right me-2'></i> Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
