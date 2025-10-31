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
import { FaUserCircle } from "react-icons/fa";
export default function Header() {
  const { mode, toggleTheme } = useTheme();

  // Example: this could later come from user context or API
  const user = {
    name: "KOTRESHA D M",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLNKp-z93cOWhVKuUnU7kuQDY8om5WLRiVcu4r96WH-tcNc9Djwaw=s192-c", // or null if unavailable
  };

  const isImageAvailable = Boolean(user.avatar);

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
              className={`fs-5 mx-2 ${
                mode === "light" ? "text-dark" : "text-light"
              }`}
              style={{ cursor: "pointer" }}
              onClick={toggleTheme}
              title='Toggle Theme'
            >
              {mode === "light" ? (
                <i className='bi bi-moon'></i> // 🌙
              ) : (
                <i className='bi bi-sun'></i> // ☀️
              )}
            </div>

            {/* User Dropdown */}
            <NavDropdown
              align='center'
              title={
                <span className='d-inline-flex align-items-center gap-2'>
                  {isImageAvailable ? (
                    <img
                      src={user.avatar}
                      alt='User'
                      width='30'
                      height='30'
                      className='rounded-circle border border-light'
                      style={{ objectFit: "cover" }}
                      onError={(e) => {
                        // fallback if image fails to load
                        e.target.onerror = null;
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <FaUserCircle size={25} />
                  )}
                  <span className='fw-semibold'>{user.name}</span>
                </span>
              }
              id='user-dropdown'
              className='no-caret'
            >
              <NavDropdown.Item href='#profile'>My Profile</NavDropdown.Item>
              <NavDropdown.Item href='#orders'>Orders</NavDropdown.Item>
              <NavDropdown.Item href='#wishlist'>Wishlist</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#logout' className='text-danger'>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
